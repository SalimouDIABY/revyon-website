@echo off
REM Script de démarrage pour Revyon Tech - Windows
REM Lance les serveurs frontend (Vite) et backend (Express) simultanément

echo.
echo ===============================================
echo   🚀 REVYON TECH - Démarrage du site
echo ===============================================
echo.
echo Frontend: http://localhost:5173
echo Backend:  http://localhost:5000
echo.
echo Pour arrêter: CTRL + C (dans chaque fenêtre)
echo.
pause

REM Lancer npm run dev:all qui utilise concurrently
npm run dev:all
