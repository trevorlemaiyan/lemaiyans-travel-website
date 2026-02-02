# 🚀 Lemaiyan's Travels - Deployment Guide

This guide will help you deploy your Next.js travel agency website to your domain and set up the GitHub repository.

## 📦 Project Packaging

### 1. Create GitHub Repository

```bash
# Navigate to your project directory
cd c:\Users\USER\Downloads\Lemaiyans_travels

# Initialize Git (if not already done)
git init

# Create .gitignore file (if it doesn't exist)
echo "node_modules/
.next/
out/
.env.local
.env.development.local
.env.test.local
.env.production.local
.DS_Store
*.log" > .gitignore

# Add all files to Git
git add .

# Make initial commit
git commit -m "Initial commit: Lemaiyan's Travels website"

# Create GitHub repository (replace with your details)
gh repo create lemaiyans-travels --public --source=. --remote=origin --push
```

### 2. Manual GitHub Setup (Alternative)

1. Go to [GitHub](https://github.com) and create a new repository named `lemaiyans-travels`
2. Don't initialize with README (since you already have files)
3. Follow the GitHub instructions to push your existing repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/lemaiyans-travels.git
git branch -M main
git push -u origin main
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended for Next.js)

**Why Vercel?**
- Built by the creators of Next.js
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Free tier available

**Steps:**

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Import your `lemaiyans-travels` repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables** (if needed)
   ```env
   # Add any environment variables in Vercel dashboard
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

5. **Custom Domain**
   - Go to Domain Settings in Vercel dashboard
   - Add your custom domain
   - Update DNS records as instructed by Vercel

### Option 2: Netlify

**Steps:**

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder (if using static export)
   - Or connect GitHub repository for automatic deployments

### Option 3: Traditional Hosting (cPanel, Plesk, etc.)

**Steps:**

1. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

2. **Server Requirements**
   - Node.js 18+ 
   - PM2 (for process management)
   - Nginx or Apache (as reverse proxy)

3. **Upload Files**
   - Upload all project files to server
   - Install dependencies: `npm install --production`
   - Start application: `pm2 start npm --name "lemaiyans-travels" -- start`

## 🔧 Domain Configuration

### Step 1: DNS Settings

Once you choose your hosting provider, update your domain's DNS records:

**For Vercel/Netlify (Recommended):**
```
Type: CNAME
Name: @ (or your domain name)
Value: cname.vercel.com (or netlify DNS value)
```

**For Traditional Hosting:**
```
Type: A
Name: @
Value: YOUR_SERVER_IP

Type: A
Name: www
Value: YOUR_SERVER_IP
```

### Step 2: SSL Certificate

- **Vercel/Netlify**: Automatic HTTPS included
- **Traditional Hosting**: Use Let's Encrypt (free) or purchase SSL

## 📋 Pre-Deployment Checklist

### ✅ Technical Requirements
- [ ] All TypeScript errors resolved
- [ ] Build runs successfully: `npm run build`
- [ ] No console errors in browser
- [ ] Responsive design works on mobile
- [ ] All links and forms work correctly

### ✅ Content Updates
- [ ] Update contact information
- [ ] Replace placeholder images
- [ ] Update testimonials with real ones
- [ ] Set up Instagram account: @lemaiyans_travels
- [ ] Add actual phone numbers and email

### ✅ SEO & Performance
- [ ] Update meta tags in `layout.tsx`
- [ ] Add Google Analytics (optional)
- [ ] Test site speed with Google PageSpeed Insights

## 🔄 CI/CD Setup (Automatic Deployments)

### GitHub Actions with Vercel

1. **Enable Automatic Deployments**
   - In Vercel dashboard, go to Settings → Git
   - Enable automatic deployments on push to main branch

2. **Workflow**
   - Push changes to GitHub
   - Vercel automatically builds and deploys
   - Site updates within minutes

## 📊 Monitoring & Analytics

### Google Analytics Setup

1. Create Google Analytics account
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to `layout.tsx`:

```tsx
import Script from 'next/script'

// In your layout component:
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🛠️ Maintenance

### Regular Updates
- Update dependencies: `npm update`
- Monitor site performance
- Update content regularly
- Check for security updates

### Backup Strategy
- Git repository serves as code backup
- Regular database backups (if you add one)
- Backup media files separately

## 🆘 Troubleshooting

### Common Issues

**Build Fails:**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**Deployment Issues:**
- Check environment variables
- Verify Node.js version
- Review deployment logs

**Domain Issues:**
- DNS propagation can take 24-48 hours
- Use `nslookup` to verify DNS changes
- Check SSL certificate status

## 📞 Support Resources

- **Vercel Documentation**: vercel.com/docs
- **Next.js Deployment**: nextjs.org/docs/deployment
- **GitHub Support**: docs.github.com
- **Domain Registrar**: Your domain provider's documentation

---

## 🎯 Quick Start Summary

1. **Create GitHub repository** with your code
2. **Choose hosting provider** (Vercel recommended)
3. **Connect domain** to hosting provider
4. **Update content** with real information
5. **Test thoroughly** before going live
6. **Monitor performance** after launch

Your Lemaiyan's Travels website will be live and ready to attract customers! 🌍✈️
