# 🚀 Deploy to Firebase - Quick Guide

Your Firebase project is configured as: **lemaiyans-travels**

## Step-by-Step Deployment

### 1. Install Firebase CLI (if not already installed)

```bash
npm install -g firebase-tools
```

### 2. Login to Firebase

```bash
firebase login
```

This will open your browser to authenticate with your Google account.

### 3. Verify Your Project

```bash
firebase use lemaiyans-travels
```

This confirms you're using the correct project.

### 4. Build Your Next.js App

```bash
npm run build
```

This creates the `out` folder with your static site.

### 5. Deploy to Firebase Hosting

```bash
firebase deploy --only hosting
```

Or use the convenient script:
```bash
npm run firebase:deploy
```

### 6. Your Site is Live! 🎉

After deployment, Firebase will give you a URL like:
`https://lemaiyans-travels.web.app` or `https://lemaiyans-travels.firebaseapp.com`

## Test Locally First (Optional)

Before deploying, test your build locally:

```bash
npm run firebase:serve
```

This will serve your site at `http://localhost:5000`

## Troubleshooting

### If you get "Project not found"
```bash
# List your Firebase projects
firebase projects:list

# Use the correct project
firebase use YOUR_PROJECT_ID
```

### If build fails
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf out
npm run build
```

### If deployment fails
```bash
# Make sure you're logged in
firebase login

# Check your project
firebase use lemaiyans-travels

# Try deploying again
firebase deploy --only hosting
```

## Quick Commands Reference

```bash
# Build only
npm run build

# Deploy only (after build)
firebase deploy --only hosting

# Build and deploy in one command
npm run firebase:deploy

# Test locally
npm run firebase:serve

# View deployment history
firebase hosting:channel:list
```

## Next Steps

1. ✅ Deploy your site
2. ✅ Set up custom domain (in Firebase Console → Hosting)
3. ✅ Configure SSL (automatic with Firebase)

Your site will be live at: `https://lemaiyans-travels.web.app`
