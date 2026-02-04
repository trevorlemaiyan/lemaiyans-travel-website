#!/bin/bash

# Google Cloud Deployment Script
# Make sure you're logged in: gcloud auth login
# Set your project: gcloud config set project YOUR_PROJECT_ID

PROJECT_ID=$(gcloud config get-value project)
REGION="us-central1"
SERVICE_NAME="lemaiyan-travels"

echo "🚀 Deploying to Google Cloud Run..."
echo "Project: $PROJECT_ID"
echo "Region: $REGION"
echo "Service: $SERVICE_NAME"
echo ""

# Build and push Docker image
echo "📦 Building Docker image..."
docker build -t gcr.io/$PROJECT_ID/$SERVICE_NAME:latest .

echo "📤 Pushing to Container Registry..."
docker push gcr.io/$PROJECT_ID/$SERVICE_NAME:latest

# Deploy to Cloud Run
echo "🚀 Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME:latest \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --port 3000 \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10

echo ""
echo "✅ Deployment complete!"
echo "Get your URL with: gcloud run services describe $SERVICE_NAME --region $REGION --format 'value(status.url)'"
