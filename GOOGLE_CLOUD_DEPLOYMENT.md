# 🚀 Google Cloud Deployment Guide

This guide will help you deploy your Next.js travel agency website to Google Cloud Run.

## Prerequisites

1. **Google Cloud Account**: Sign up at [cloud.google.com](https://cloud.google.com)
2. **Google Cloud SDK**: Install from [cloud.google.com/sdk](https://cloud.google.com/sdk)
3. **Docker**: Install from [docker.com](https://www.docker.com/get-started)

## Step 1: Set Up Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or select existing one)
3. Enable the following APIs:
   - Cloud Run API
   - Container Registry API
   - Cloud Build API

```bash
# Enable required APIs
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
gcloud services enable cloudbuild.googleapis.com
```

## Step 2: Configure Authentication

```bash
# Login to Google Cloud
gcloud auth login

# Set your project
gcloud config set project YOUR_PROJECT_ID

# Configure Docker to use gcloud as a credential helper
gcloud auth configure-docker
```

## Step 3: Build and Deploy

### Option A: Using Cloud Build (Recommended)

1. **Push your code to GitHub** (if not already done)

2. **Connect to Cloud Build**:
   - Go to Cloud Console → Cloud Build → Triggers
   - Connect your GitHub repository
   - Create a trigger that uses `cloudbuild.yaml`

3. **Manual Build** (Alternative):
```bash
# Submit build to Cloud Build
gcloud builds submit --config cloudbuild.yaml
```

### Option B: Manual Deployment

```bash
# Build the Docker image
docker build -t gcr.io/YOUR_PROJECT_ID/lemaiyan-travels .

# Push to Container Registry
docker push gcr.io/YOUR_PROJECT_ID/lemaiyan-travels

# Deploy to Cloud Run
gcloud run deploy lemaiyan-travels \
  --image gcr.io/YOUR_PROJECT_ID/lemaiyan-travels \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3000
```

## Step 4: Configure Custom Domain

1. Go to Cloud Run → Your Service → Manage Custom Domains
2. Add your domain
3. Update DNS records as instructed:
   - Add a CNAME record pointing to the provided Cloud Run URL

## Step 5: Environment Variables (if needed)

```bash
gcloud run services update lemaiyan-travels \
  --update-env-vars NEXT_PUBLIC_SITE_URL=https://yourdomain.com \
  --region us-central1
```

## Cost Estimation

- **Cloud Run**: Pay per request (very affordable)
- **Free Tier**: 2 million requests/month free
- **Estimated Cost**: $0-5/month for low traffic

## Monitoring

- View logs: `gcloud run services logs read lemaiyan-travels`
- Monitor in Cloud Console → Cloud Run → Your Service

## Troubleshooting

### Build Fails
```bash
# Check build logs
gcloud builds list
gcloud builds log BUILD_ID
```

### Service Won't Start
```bash
# Check service logs
gcloud run services logs read lemaiyan-travels --limit 50
```

### Update Deployment
```bash
# Rebuild and redeploy
gcloud builds submit --config cloudbuild.yaml
```

## Alternative: Google App Engine

If you prefer App Engine, create `app.yaml`:

```yaml
runtime: nodejs18
service: default
instance_class: F1
automatic_scaling:
  min_instances: 0
  max_instances: 10
env_variables:
  NODE_ENV: production
```

Then deploy:
```bash
gcloud app deploy
```

## Support

- **Google Cloud Documentation**: https://cloud.google.com/run/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
