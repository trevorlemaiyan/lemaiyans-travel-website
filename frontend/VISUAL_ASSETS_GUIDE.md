# 🖼️ Lemaiyan's Travels - Visual Assets Guide

## 📋 **Complete Image & Icon Requirements**

This guide lists every placeholder and emoji that needs to be replaced with actual images, along with specifications and locations.

---

## 🏠 **Homepage Assets**

### **Hero Section** (`src/app/page.tsx`)
**Current**: Gradient background placeholder
**Required**: 
- **Hero Banner Image**
  - Size: 1920x1080px (16:9 ratio)
  - Format: JPG or WebP
  - Location: `/public/images/hero-banner.jpg`
  - Content: Professional travel scene - Kenya landscape, safari, or travel agency office
  - Style: High-quality, vibrant colors, professional photography

**Current**: No company logo in hero
**Required**:
- **Company Logo (White)**
  - Size: 300x100px (vector preferred)
  - Format: SVG or PNG with transparency
  - Location: `/public/images/logo-white.svg`
  - Style: White logo for dark backgrounds

---

### **Services Grid** (`src/components/sections/ServicesGrid.tsx`)
**Current**: Emoji icons for services
**Required Service Icons** (all 64x64px, SVG format):

1. **Flight Icon** ✈️ → `/public/images/icons/flight.svg`
   - Airplane or aviation symbol
   - Style: Clean, modern, red accent color

2. **Hotel Icon** 🏨 → `/public/images/icons/hotel.svg`
   - Building or hotel symbol
   - Style: Professional hospitality icon

3. **Visa Icon** 🛂 → `/public/images/icons/visa.svg`
   - Passport or document symbol
   - Style: Official, trustworthy

4. **Car Icon** 🚗 → `/public/images/icons/car.svg`
   - Vehicle or transportation symbol
   - Style: Modern car icon

5. **Tour Icon** 🎯 → `/public/images/icons/tour.svg`
   - Map pin or tour guide symbol
   - Style: Adventure/exploration theme

6. **Insurance Icon** 🛡️ → `/public/images/icons/insurance.svg`
   - Shield or protection symbol
   - Style: Security-focused

**Service Background Images** (optional, 400x300px each):
- `/public/images/services/flight-bookings.jpg`
- `/public/images/services/hotel-reservations.jpg`
- `/public/images/services/visa-services.jpg`
- `/public/images/services/car-hire.jpg`
- `/public/images/services/tour-packages.jpg`
- `/public/images/services/travel-insurance.jpg`

---

### **Why Choose Us** (`src/components/sections/WhyChooseUs.tsx`)
**Current**: Emoji icons
**Required Feature Icons** (48x48px, SVG format):

1. **Experience Icon** ⭐ → `/public/images/icons/experience.svg`
   - Star or award symbol
   - Style: Premium, quality-focused

2. **Support Icon** 🤝 → `/public/images/icons/support.svg`
   - Handshake or customer service
   - Style: Trust, reliability

3. **Price Icon** 💰 → `/public/images/icons/price.svg`
   - Price tag or value symbol
   - Style: Affordable, competitive

4. **Network Icon** 🌍 → `/public/images/icons/network.svg`
   - Globe or network symbol
   - Style: Global, connected

---

### **Testimonials** (`src/components/sections/Testimonials.tsx`)
**Current**: No customer photos
**Required Customer Photos** (80x80px, circular):
- `/public/images/customers/customer-1.jpg`
- `/public/images/customers/customer-2.jpg`
- `/public/images/customers/customer-3.jpg`
- `/public/images/customers/customer-4.jpg`
- `/public/images/customers/customer-5.jpg`
- `/public/images/customers/customer-6.jpg`

**Style**: Professional headshots, diverse representation, high quality

---

### **CTA Banner** (`src/components/sections/CTABanner.tsx`)
**Current**: Gradient background
**Required**: 
- **CTA Background Image**
  - Size: 1920x400px
  - Location: `/public/images/cta-banner.jpg`
  - Content: Travel scene, happy travelers, or destination
  - Style: Inspiring, professional, with text overlay space

---

## 🗺️ **About Page Assets**

### **About Hero** (`src/app/about/page.tsx`)
**Current**: SVG gradient placeholder
**Required**:
- **About Hero Image**
  - Size: 1920x600px
  - Location: `/public/images/about-hero.jpg`
  - Content: Professional travel agency team, office, or Kenya landscape
  - Style: Professional, welcoming

### **Company Story Section**
**Current**: Gradient placeholder
**Required**:
- **Office/Team Photo**
  - Size: 600x600px (square)
  - Location: `/public/images/office-photo.jpg`
  - Content: Travel agency office, team, or professional setting
  - Style: Professional, authentic

### **Location Map**
**Current**: Gradient placeholder
**Required**:
- **Eldoret Location Map**
  - Size: 600x600px
  - Location: `/public/images/eldoret-map.jpg`
  - Content: Map showing Eldoret location
  - Style: Clean, professional map design

---

## 🌍 **Services Page Assets**

### **Services Hero**
**Current**: SVG placeholder
**Required**:
- **Services Hero Image**
  - Size: 1920x600px
  - Location: `/public/images/services-hero.jpg`
  - Content: Travel services montage
  - Style: Professional, diverse services

### **Service Detail Images**
Each service needs a featured image (800x600px):
- `/public/images/service-details/flight-booking.jpg`
- `/public/images/service-details/hotel-reservation.jpg`
- `/public/images/service-details/visa-service.jpg`
- `/public/images/service-details/car-hire.jpg`
- `/public/images/service-details/tour-packages.jpg`
- `/public/images/service-details/travel-insurance.jpg`

---

## 🎪 **Tours Page Assets**

### **Tours Hero**
**Current**: SVG placeholder
**Required**:
- **Tours Hero Image**
  - Size: 1920x600px
  - Location: `/public/images/tours-hero.jpg`
  - Content: Safari adventure, Kenya wildlife, or tour experience
  - Style: Exciting, adventurous

### **Tour Package Images** (Future)
**Current**: No tour images (coming soon)
**Required for Future** (400x300px each):
- `/public/images/tours/maasai-mara.jpg`
- `/public/images/tours/amboseli.jpg`
- `/public/images/tours/lake-nakuru.jpg`
- `/public/images/tours/samburu.jpg`
- `/public/images/tours/diani-beach.jpg`
- `/public/images/tours/watamu.jpg`
- `/public/images/tours/lamu.jpg`
- `/public/images/tours/malindi.jpg`
- `/public/images/tours/mount-kenya.jpg`
- `/public/images/tours/aberdares.jpg`

---

## 📧 **Contact Page Assets**

### **Contact Hero**
**Current**: SVG placeholder
**Required**:
- **Contact Hero Image**
  - Size: 1920x600px
  - Location: `/public/images/contact-hero.jpg`
  - Content: Customer service, communication, or office
  - Style: Professional, approachable

---

## 🏢 **Team Section Assets** (Future)

### **Team Member Photos**
**Current**: No team photos (future feature)
**Required for Future** (200x200px, circular):
- `/public/images/team/ceo.jpg`
- `/public/images/team/manager.jpg`
- `/public/images/team/agent-1.jpg`
- `/public/images/team/agent-2.jpg`
- `/public/images/team/agent-3.jpg`

---

## 🎨 **Brand Identity Assets**

### **Logo Variations**
**Required** (SVG format preferred):
- `/public/images/logo.svg` - Main logo (color)
- `/public/images/logo-white.svg` - White version
- `/public/images/logo-black.svg` - Black version
- `/public/images/logo-icon.svg` - Icon only version
- `/public/images/favicon.ico` - 32x32px favicon
- `/public/images/favicon-16x16.png` - 16x16px
- `/public/images/apple-touch-icon.png` - 180x180px

### **Social Media Images**
**Required**:
- `/public/images/og-image.jpg` - 1200x630px (Open Graph)
- `/public/images/twitter-image.jpg` - 1200x600px (Twitter Card)

---

## 📱 **Mobile & Responsive Images**

### **Image Optimization Requirements**
- **Format**: Use WebP for photos, SVG for icons
- **Compression**: Optimize for web (under 200KB per image)
- **Alt Text**: Add descriptive alt attributes
- **Loading**: Implement lazy loading for better performance

### **Responsive Image Sets**
Create multiple sizes for each hero image:
- `image-1920.jpg` - 1920px width
- `image-1280.jpg` - 1280px width  
- `image-768.jpg` - 768px width
- `image-480.jpg` - 480px width

---

## 🎯 **Priority Implementation Order**

### **Phase 1: Essential Assets** (Required for Launch)
1. **Logo variations** - All formats and sizes
2. **Hero images** - Homepage, About, Services, Contact, Tours
3. **Service icons** - Replace all emoji icons
4. **Customer photos** - Testimonials section
5. **CTA banner** - Homepage bottom section

### **Phase 2: Enhancement Assets** (Post-Launch)
1. **Service background images** - Service cards
2. **Office/team photos** - About page
3. **Location map** - About page
4. **Service detail images** - Services page

### **Phase 3: Future Assets** (When Ready)
1. **Tour package images** - Tours page
2. **Team member photos** - Team section
3. **Additional marketing images** - Social media, blog

---

## 📁 **File Structure**

```
public/
├── images/
│   ├── icons/
│   │   ├── flight.svg
│   │   ├── hotel.svg
│   │   ├── visa.svg
│   │   ├── car.svg
│   │   ├── tour.svg
│   │   ├── insurance.svg
│   │   ├── experience.svg
│   │   ├── support.svg
│   │   ├── price.svg
│   │   └── network.svg
│   ├── customers/
│   │   ├── customer-1.jpg
│   │   ├── customer-2.jpg
│   │   └── ...
│   ├── services/
│   │   ├── flight-bookings.jpg
│   │   └── ...
│   ├── team/
│   │   ├── ceo.jpg
│   │   └── ...
│   ├── tours/
│   │   ├── maasai-mara.jpg
│   │   └── ...
│   ├── hero-banner.jpg
│   ├── about-hero.jpg
│   ├── services-hero.jpg
│   ├── tours-hero.jpg
│   ├── contact-hero.jpg
│   ├── cta-banner.jpg
│   ├── office-photo.jpg
│   ├── eldoret-map.jpg
│   ├── logo.svg
│   ├── logo-white.svg
│   ├── logo-black.svg
│   ├── logo-icon.svg
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── apple-touch-icon.png
│   ├── og-image.jpg
│   └── twitter-image.jpg
```

---

## 🎨 **Design Guidelines**

### **Color Scheme**
- **Primary**: #c61217 (Red)
- **Secondary**: #0f172a (Slate)
- **Accent**: #fbbf24 (Yellow)
- **Neutral**: #ffffff (White), #f8fafc (Light gray)

### **Typography**
- **Headings**: Inter font, bold
- **Body**: Inter font, regular
- **Accent**: Professional, clean, readable

### **Image Style**
- **Photography**: Professional, high-quality, authentic
- **Icons**: Clean, modern, consistent style
- **Colors**: Use brand colors in icons and overlays
- **Quality**: Minimum 72 DPI, optimized for web

---

## 🚀 **Implementation Checklist**

### **For Each Image**
- [ ] Create/obtain image in correct dimensions
- [ ] Optimize for web (compress, WebP format)
- [ ] Save in correct location
- [ ] Add alt text in code
- [ ] Test on different screen sizes
- [ ] Verify loading performance

### **After Implementation**
- [ ] Test all pages with new images
- [ ] Check responsive behavior
- [ ] Verify loading speed
- [ ] Test on mobile devices
- [ ] Update any broken image references

---

## 📞 **Next Steps**

1. **Review this guide** with your team
2. **Source or create** the essential assets
3. **Implement Phase 1 assets** first
4. **Test thoroughly** on all devices
5. **Launch with essential assets**
6. **Add enhancement assets** post-launch

This guide provides a complete roadmap for replacing all placeholders with professional, branded visual assets that will make your website look polished and trustworthy.
