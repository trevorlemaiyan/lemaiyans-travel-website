# 🔥 Firebase Hosting Deployment Guide

This guide will help you deploy your Next.js travel agency website to Firebase Hosting.

## Prerequisites

1. **Firebase Account**: Sign up at [firebase.google.com](https://firebase.google.com)
2. **Node.js**: Version 18 or higher
3. **Firebase CLI**: Install globally with `npm install -g firebase-tools`

## Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

## Step 2: Login to Firebase

```bash
firebase login
```

This will open your browser to authenticate with your Google account.

## Step 3: Initialize Firebase Project

```bash
# Initialize Firebase in your project
firebase init hosting
```

When prompted:
- **Select "Use an existing project"** (or create a new one)
- **Project name**: `lemaiyan-travels` (or your preferred name)
- **Public directory**: `out` (this is where Next.js exports static files)
- **Configure as single-page app**: `Yes`
- **Set up automatic builds**: `No` (we'll do manual deployments)
- **Overwrite index.html**: `No`

## Step 4: Update Firebase Project ID

Edit `.firebaserc` and replace `lemaiyan-travels` with your actual Firebase project ID:

```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```

## Step 5: Build and Deploy

```bash
# Build the Next.js app (creates 'out' folder)
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

Or use the convenient script:
```bash
npm run firebase:deploy
```

## Step 6: Test Locally (Optional)

Before deploying, test locally:

```bash
npm run firebase:serve
```

This will serve your site at `http://localhost:5000`

## Step 7: Configure Custom Domain

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Go to **Hosting** → **Add custom domain**
4. Enter your domain name
5. Follow the instructions to update DNS records:
   - Add A records pointing to Firebase IPs
   - Or add a CNAME record (if supported)

## Environment Variables

If you need environment variables:

1. Create `.env.local` file (for local development)
2. For production, use Firebase Functions or set them during build

```bash
# Example .env.local
NEXT_PUBLIC_SITE_URL=https://lemaiyanstravels.co.ke
```

## Automatic Deployments with GitHub

### Option 1: Firebase GitHub Action

1. Go to Firebase Console → Project Settings → Service Accounts
2. Generate a new private key
3. Add to GitHub Secrets: `FIREBASE_SERVICE_ACCOUNT`

Create `.github/workflows/firebase-deploy.yml`:

```yaml
name: Deploy to Firebase

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-firebase-project-id
```

### Option 2: Manual Deployment

Just run `npm run firebase:deploy` whenever you want to deploy.

## Cost

- **Firebase Hosting**: Free tier includes:
  - 10 GB storage
  - 360 MB/day data transfer
  - More than enough for most websites!

## Troubleshooting

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next
rm -rf out
npm run build
```

### Deployment Fails
```bash
# Check Firebase CLI version
firebase --version

# Update Firebase CLI
npm install -g firebase-tools@latest

# Re-login
firebase logout
firebase login
```

### Site Not Updating
```bash
# Clear Firebase cache
firebase hosting:channel:delete preview

# Redeploy
npm run firebase:deploy
```

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records in Firebase Console
- Check SSL certificate status in Firebase Console

## Useful Commands

```bash
# View deployment history
firebase hosting:channel:list

# Preview a deployment
firebase hosting:channel:deploy preview

# Rollback to previous version
firebase hosting:clone SOURCE_SITE_ID TARGET_SITE_ID
```

## Next Steps

1. ✅ Deploy your site
2. ✅ Set up custom domain
3. ✅ Configure SSL (automatic with Firebase)
4. ✅ Set up analytics (optional)
5. ✅ Configure redirects if needed

## Support

- **Firebase Documentation**: https://firebase.google.com/docs/hosting
- **Next.js Static Export**: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
