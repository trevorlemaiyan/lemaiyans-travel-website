# Lemaiyan's Travels - Content Management Guide

This guide will help you easily manage and update content on your travel agency website without needing technical expertise.

## 📁 Image Management

### Directory Structure
```
public/images/
├── hero/              # Hero section images
├── services/          # Service-related images
├── tours/             # Tour package images
├── gallery/           # Gallery images
│   └── thumbnails/    # Gallery thumbnails
├── team/              # Team member photos
├── destinations/      # Destination photos
└── logos/             # Partner/client logos
```

### Image Guidelines
- **Format**: Use JPG for photos, PNG for graphics with transparency
- **Size**: Compress images to under 500KB for web performance
- **Dimensions**: 
  - Hero images: 1920x1080px
  - Tour images: 800x600px
  - Gallery images: 1200x800px
  - Thumbnails: 400x300px

## 🎯 Tour Packages Management

### Location: `src/data/tours.ts`

#### Adding a New Tour Package

```typescript
{
  id: 'unique-tour-id',
  title: 'Tour Package Name',
  description: 'Brief description of the tour',
  duration: '3 Days / 2 Nights',
  price: 'KES 45,000',
  originalPrice: 'KES 55,000', // Optional - for showing discounts
  image: '/images/tours/tour-image.jpg',
  gallery: [
    '/images/tours/tour-1.jpg',
    '/images/tours/tour-2.jpg',
    '/images/tours/tour-3.jpg'
  ],
  destination: 'Destination Name, Kenya',
  category: 'domestic', // 'domestic' | 'international' | 'adventure' | 'luxury' | 'budget'
  highlights: [
    'Key highlight 1',
    'Key highlight 2',
    'Key highlight 3'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Day 1 Title',
      description: 'Description of day 1 activities',
      activities: ['Activity 1', 'Activity 2', 'Activity 3']
    }
    // Add more days as needed
  ],
  includes: [
    'What is included 1',
    'What is included 2'
  ],
  excludes: [
    'What is excluded 1',
    'What is excluded 2'
  ],
  availability: {
    startDate: '2024-06-01',
    endDate: '2024-12-31',
    seats: 12
  },
  difficulty: 'easy', // 'easy' | 'moderate' | 'challenging'
  rating: 4.8,
  reviews: 127,
  featured: true, // Show on homepage
  active: true, // Show on tours page
  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-01-15T10:00:00Z'
}
```

#### Updating Tour Information
1. Open `src/data/tours.ts`
2. Find the tour you want to update
3. Modify the relevant fields
4. Update the `updatedAt` timestamp
5. Save the file

#### Deactivating a Tour
Set `active: false` to temporarily remove a tour from the website without deleting it.

## 📝 Blog Management

### Location: `src/app/blog/page.tsx`

#### Adding a New Blog Post

```typescript
{
  id: 'unique-blog-id',
  title: 'Blog Post Title',
  excerpt: 'Brief description of the post',
  content: '', // Full blog content (for future blog detail pages)
  author: {
    name: 'Author Name',
    avatar: '/images/team/author-avatar.jpg',
    bio: 'Author bio and expertise'
  },
  category: 'Safari', // 'Safari' | 'Beach' | 'Travel News' | etc.
  tags: ['tag1', 'tag2', 'tag3'],
  image: '/images/blog/blog-image.jpg',
  publishedAt: '2024-01-15',
  readTime: 8, // Reading time in minutes
  likes: 245,
  comments: 32,
  featured: true, // Show in featured section
  active: true
}
```

## 🖼️ Gallery Management

### Location: `src/app/gallery/page.tsx`

#### Adding New Gallery Images

```typescript
{
  id: 'unique-image-id',
  title: 'Image Title',
  description: 'Image description',
  category: 'Safari', // 'Safari' | 'Beach' | 'Adventure' | 'City' | 'Wildlife' | 'Culture'
  tags: ['tag1', 'tag2', 'tag3'],
  src: '/images/gallery/full-image.jpg',
  thumbnail: '/images/gallery/thumbnails/thumb-image.jpg',
  likes: 342,
  views: 1250,
  featured: true, // Show in featured section
  date: '2024-01-15',
  location: 'Location Name, Kenya'
}
```

## 🎨 Website Customization

### Colors and Branding
**Location**: `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        red: '#C61217', // Your brand color
        black: '#000000',
        white: '#FFFFFF',
      },
      slate: {
        // Custom slate colors
      }
    }
  }
}
```

### Contact Information
**Location**: `src/components/layout/Header.tsx`

Update the phone number and contact details in the header component.

### Footer Information
**Location**: `src/components/ui/Footer.tsx`

Update company address, phone numbers, email, and social media links.

## 🔄 Regular Updates Checklist

### Weekly Updates
- [ ] Add new tour packages
- [ ] Update tour availability and pricing
- [ ] Add new blog posts
- [ ] Update gallery with new images
- [ ] Check and update featured content

### Monthly Updates
- [ ] Review and remove outdated tours
- [ ] Update seasonal promotions
- [ ] Refresh homepage featured content
- [ ] Check all image links and optimize sizes

### Content Updates Without Code

#### Tour Packages
1. Open `src/data/tours.ts`
2. Copy an existing tour template
3. Update the information
4. Add new images to `/public/images/tours/`
5. Update image paths in the tour data

#### Blog Posts
1. Open `src/app/blog/page.tsx`
2. Add new post to the `blogPosts` array
3. Add author image to `/public/images/team/`
4. Add blog image to `/public/images/blog/`

#### Gallery Images
1. Open `src/app/gallery/page.tsx`
2. Add new image to the `galleryImages` array
3. Add full image to `/public/images/gallery/`
4. Add thumbnail to `/public/images/gallery/thumbnails/`

## 📱 SEO Best Practices

### Meta Tags
**Location**: `src/app/layout.tsx`

Update the following for better SEO:
- Page titles
- Meta descriptions
- Keywords
- OpenGraph data
- Twitter card data

### Image SEO
- Use descriptive file names (e.g., `maasai-mara-safari.jpg`)
- Add alt text descriptions
- Compress images for faster loading

## 🚀 Deployment

After making content changes:
1. Test the website locally: `npm run dev`
2. Build for production: `npm run build`
3. Deploy to your hosting platform

## 🆘 Troubleshooting

### Images Not Showing
1. Check file paths in the data files
2. Ensure images exist in the correct directories
3. Verify file names match exactly (case-sensitive)

### Tour Information Not Updating
1. Check for syntax errors in `src/data/tours.ts`
2. Ensure all required fields are filled
3. Verify the tour has `active: true`

### Animation Issues
Animations are handled by Framer Motion. If you experience issues:
1. Check browser console for errors
2. Ensure all components are properly imported
3. Verify TypeScript types are correct

## 📞 Support

For technical assistance:
1. Check this documentation first
2. Review the code comments in the relevant files
3. Test changes locally before deploying

## 📈 Analytics Integration

To add Google Analytics:
1. Update `src/app/layout.tsx` with your GA tracking code
2. Add environment variables for sensitive data
3. Test tracking implementation

---

**Note**: This website is built with modern web technologies including Next.js, TypeScript, and Tailwind CSS. All content is managed through simple data files that can be easily updated without technical knowledge.
