@echo off
REM Lemaiyan's Travels - Git Setup Script for Windows
REM This script helps you initialize Git and push to GitHub

echo 🌍 Setting up Lemaiyan's Travels Git Repository...

REM Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed. Please install Git first from https://git-scm.com
    pause
    exit /b 1
)

REM Initialize Git repository
if not exist ".git" (
    echo 📦 Initializing Git repository...
    git init
) else (
    echo ✅ Git repository already exists
)

REM Create .gitignore if it doesn't exist
if not exist ".gitignore" (
    echo 📝 Creating .gitignore file...
    (
    echo # Dependencies
    echo node_modules/
    echo .pnp
    echo .pnp.js
    echo.
    echo # Testing
    echo coverage/
    echo.
    echo # Next.js
    echo .next/
    echo out/
    echo build
    echo dist/
    echo.
    echo # Production
    echo .env.local
    echo .env.development.local
    echo .env.test.local
    echo .env.production.local
    echo.
    echo # Debug
    echo npm-debug.log*
    echo yarn-debug.log*
    echo yarn-error.log*
    echo.
    echo # Runtime data
    echo pids
    echo *.pid
    echo *.seed
    echo *.pid.lock
    echo.
    echo # TypeScript cache
    echo *.tsbuildinfo
    echo.
    echo # Optional npm cache directory
    echo .npm
    echo.
    echo # Optional eslint cache
    echo .eslintcache
    echo.
    echo # Microbundle cache
    echo .rpt2_cache/
    echo .rts2_cache_cjs/
    echo .rts2_cache_es/
    echo .rts2_cache_umd/
    echo.
    echo # Optional REPL history
    echo .node_repl_history
    echo.
    echo # Output of 'npm pack'
    echo *.tgz
    echo.
    echo # Yarn Integrity file
    echo .yarn-integrity
    echo.
    echo # dotenv environment variables file
    echo .env
    echo .env.test
    echo.
    echo # parcel-bundler cache
    echo .cache
    echo .parcel-cache
    echo.
    echo # Next.js build output
    echo .next
    echo.
    echo # Nuxt.js build / generate output
    echo .nuxt
    echo dist
    echo.
    echo # Gatsby files
    echo .cache/
    echo public
    echo.
    echo # Storybook build outputs
    echo .out
    echo .storybook-out
    echo.
    echo # Temporary folders
    echo tmp/
    echo temp/
    echo.
    echo # Logs
    echo logs
    echo *.log
    echo.
    echo # Editor directories and files
    echo .vscode/
    echo .idea/
    echo *.swp
    echo *.swo
    echo *~
    echo.
    echo # OS generated files
    echo .DS_Store
    echo .DS_Store?
    echo ._*
    echo .Spotlight-V100
    echo .Trashes
    echo ehthumbs.db
    echo Thumbs.db
    ) > .gitignore
    echo ✅ .gitignore created
) else (
    echo ✅ .gitignore already exists
)

REM Add all files to Git
echo 📁 Adding files to Git...
git add .

REM Check if there are files to commit
git diff --cached --quiet
if %errorlevel% equ 0 (
    echo ⚠️  No changes to commit
) else (
    REM Make initial commit
    echo 💾 Making initial commit...
    git commit -m "Initial commit: Lemaiyan's Travels website

🌍 Features:
- Modern Next.js 14 with TypeScript
- Responsive design with TailwindCSS
- Beautiful animations with Framer Motion
- Multi-page travel agency website
- Contact forms and content management
- SEO optimized and performance ready

📦 Tech Stack:
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide React Icons
- React Hook Form with Zod

🎨 Pages:
- Home with hero and services
- About page
- Services detail page
- Tours (coming soon)
- Blog page
- Contact page with form
- Privacy policy

🚀 Ready for deployment to Vercel, Netlify, or traditional hosting"
)

echo ✅ Git setup complete!
echo.
echo 📋 Next steps:
echo 1. Create a new repository on GitHub: https://github.com/new
echo 2. Name it 'lemaiyans-travels'
echo 3. Don't initialize with README (you already have one)
echo 4. Run these commands to connect to GitHub:
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/lemaiyans-travels.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 🌐 After pushing to GitHub, you can deploy to:
echo    - Vercel (recommended): https://vercel.com
echo    - Netlify: https://netlify.com
echo    - See DEPLOYMENT_GUIDE.md for detailed instructions
echo.
echo 🎉 Your Lemaiyan's Travels website is ready for deployment!
echo.
pause
