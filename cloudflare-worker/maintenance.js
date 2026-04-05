const maintenanceHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manutenção | Daniel Costa</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            color-scheme: dark;
            background-color: #000000;
            color: #ffffff;
        }

        body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: radial-gradient(circle at top, #1a0b2e 0%, #000000 70%);
            padding: 1.5rem;
            text-align: center;
            overflow: hidden;
        }

        .container {
            max-width: 600px;
            width: 100%;
            animation: fadeIn 0.8s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .image-glow {
            position: relative;
            width: 120px;
            height: 120px;
            margin: 0 auto 2rem;
            border-radius: 50%;
            box-shadow: 0 0 50px 15px rgba(139, 92, 246, 0.4);
            padding: 4px;
            background: linear-gradient(135deg, #7c3aed, #db2777);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon {
            font-size: 3.5rem;
            filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));
        }

        h1 {
            font-size: 2.5rem;
            font-weight: 800;
            margin: 0 0 1rem;
            letter-spacing: -0.04em;
        }

        p {
            color: #a1a1aa;
            font-size: 1.1rem;
            line-height: 1.6;
            margin: 0 auto 2.5rem;
            max-width: 440px;
        }

        .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(124, 58, 237, 0.1);
            border: 1px solid rgba(124, 58, 237, 0.3);
            color: #a78bfa;
            padding: 0.6rem 1.2rem;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .dot {
            width: 8px;
            height: 8px;
            background-color: #a78bfa;
            border-radius: 50%;
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(167, 139, 250, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(167, 139, 250, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(167, 139, 250, 0); }
        }

        @media (max-width: 480px) {
            h1 { font-size: 1.8rem; }
            p { font-size: 1rem; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="image-glow">
            <span class="icon">🛠️</span>
        </div>
        <h1>Manutenção em curso</h1>
        <p>Estamos realizando algumas melhorias técnicas no site. Voltaremos em breve com novidades!</p>
        <div class="status-badge">
            <span class="dot"></span>
            Atualizando sistema
        </div>
    </div>
</body>
</html>
`;

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response(maintenanceHTML, {
    status: 503,
    headers: {
      'content-type': 'text/html;charset=UTF-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  })
}
