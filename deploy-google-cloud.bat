@echo off
REM Google Cloud Deployment Script for Windows
REM Make sure you're logged in: gcloud auth login
REM Set your project: gcloud config set project YOUR_PROJECT_ID

echo 🚀 Deploying to Google Cloud Run...
echo.

REM Get project ID
for /f "tokens=*" %%i in ('gcloud config get-value project') do set PROJECT_ID=%%i
set REGION=us-central1
set SERVICE_NAME=lemaiyan-travels

echo Project: %PROJECT_ID%
echo Region: %REGION%
echo Service: %SERVICE_NAME%
echo.

REM Build and push Docker image
echo 📦 Building Docker image...
docker build -t gcr.io/%PROJECT_ID%/%SERVICE_NAME%:latest .

echo 📤 Pushing to Container Registry...
docker push gcr.io/%PROJECT_ID%/%SERVICE_NAME%:latest

REM Deploy to Cloud Run
echo 🚀 Deploying to Cloud Run...
gcloud run deploy %SERVICE_NAME% ^
  --image gcr.io/%PROJECT_ID%/%SERVICE_NAME%:latest ^
  --platform managed ^
  --region %REGION% ^
  --allow-unauthenticated ^
  --port 3000 ^
  --memory 512Mi ^
  --cpu 1 ^
  --min-instances 0 ^
  --max-instances 10

echo.
echo ✅ Deployment complete!
echo Get your URL with: gcloud run services describe %SERVICE_NAME% --region %REGION% --format "value(status.url)"
