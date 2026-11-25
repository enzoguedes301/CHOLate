<?php
/**
 * Gravação de leads em ../leads/leads.csv — usado por lead.php e pix-widget.php.
 *
 * Colunas: data_hora;nome;telefone;cpf;nascimento;email;etapa;ip
 *
 * Regras:
 *  - Uma linha por telefone. Se o telefone já existe, só completa os campos
 *    vazios (nome, cpf, nascimento, email). Nunca duplica.
 *  - Migra automaticamente o CSV antigo (sem a coluna "nascimento").
 *  - Nunca lança exceção para fora (não pode travar o funil).
 */

function leadLimpa($s) {
    return str_replace([';', "\r", "\n"], [',', ' ', ' '], trim((string)$s));
}

/**
 * @param array $d  { nome, telefone, cpf, nascimento, email, etapa }
 * @return bool  true se gravou/atualizou, false se ignorou ou falhou.
 */
function gravarLead(array $d) {
    try {
        $telefone = preg_replace('/\D/', '', (string)($d['telefone'] ?? ''));
        if (strlen($telefone) < 10) return false;

        $dir = __DIR__ . '/../leads';
        if (!is_dir($dir)) @mkdir($dir, 0755, true);

        // Protege a pasta de acesso web (gera .htaccess só uma vez).
        $ht = $dir . '/.htaccess';
        if (!is_file($ht)) @file_put_contents($ht, "Require all denied\n");

        $arquivo = $dir . '/leads.csv';

        $COLUNAS   = ['data_hora', 'nome', 'telefone', 'cpf', 'nascimento', 'email', 'etapa', 'ip'];
        $CABECALHO = implode(';', $COLUNAS);

        $ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '';
        $ip = leadLimpa(explode(',', $ip)[0]);

        $novo = [
            date('Y-m-d H:i:s'),
            leadLimpa($d['nome'] ?? ''),
            $telefone,
            preg_replace('/\D/', '', (string)($d['cpf'] ?? '')),
            leadLimpa($d['nascimento'] ?? ''),
            leadLimpa($d['email'] ?? ''),
            leadLimpa($d['etapa'] ?? ''),
            $ip,
        ];

        // Lock exclusivo: lê tudo, ajusta e regrava (arquivo é pequeno).
        $fp = @fopen($arquivo, 'c+');
        if (!$fp) return false;
        if (!flock($fp, LOCK_EX)) { fclose($fp); return false; }

        $conteudo = stream_get_contents($fp);
        $linhas = array_values(array_filter(array_map('trim', explode("\n", (string)$conteudo)), 'strlen'));
        if (count($linhas) === 0) $linhas = [$CABECALHO];

        // Migração: CSV antigo sem "nascimento" (entra entre cpf e email).
        $cab = explode(';', $linhas[0]);
        if (!in_array('nascimento', $cab, true)) {
            $linhas[0] = $CABECALHO;
            for ($i = 1; $i < count($linhas); $i++) {
                $c = explode(';', $linhas[$i]);
                array_splice($c, 4, 0, ['']);
                $linhas[$i] = implode(';', $c);
            }
        }

        // Dedupe global por telefone: completa campos vazios da linha existente.
        $achou = false;
        for ($i = 1; $i < count($linhas); $i++) {
            $c = explode(';', $linhas[$i]);
            if (($c[2] ?? '') !== $telefone) continue;
            $achou = true;
            $c = array_pad($c, count($COLUNAS), '');
            foreach ([1, 3, 4, 5] as $k) {           // nome, cpf, nascimento, email
                if ($c[$k] === '' && $novo[$k] !== '') $c[$k] = $novo[$k];
            }
            $linhas[$i] = implode(';', $c);
            break;
        }
        if (!$achou) $linhas[] = implode(';', $novo);

        rewind($fp);
        ftruncate($fp, 0);
        fwrite($fp, implode("\n", $linhas) . "\n");
        fflush($fp);
        flock($fp, LOCK_UN);
        fclose($fp);
        return true;
    } catch (\Throwable $e) {
        return false;
    }
}
