<?php
// Página de erro para acesso via desktop. Responde 404 real (parece link
// quebrado comum) e não revela que o acesso funciona no celular.
http_response_code(404);
header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-store');
?><!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <title>404 Not Found</title>
  <style>
    html,body{height:100%}
    body{
      margin:0;background:#fff;color:#444;
      font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
      display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px;
    }
    .wrap{text-align:center;max-width:420px}
    h1{font-size:72px;font-weight:700;margin:0;color:#222;letter-spacing:-.02em}
    h2{font-size:20px;font-weight:600;margin:4px 0 14px;color:#333}
    p{font-size:15px;line-height:1.5;color:#777;margin:0}
    hr{border:none;border-top:1px solid #eee;margin:22px 0}
    .foot{font-size:12px;color:#aaa}
  </style>
</head>
<body>
  <div class="wrap">
    <h1>404</h1>
    <h2>Página não encontrada</h2>
    <p>A página que você tentou acessar não existe ou foi removida.</p>
    <hr>
    <div class="foot">Error 404 — Not Found</div>
  </div>
</body>
</html>
