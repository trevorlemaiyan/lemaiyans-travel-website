export interface TourPackage {
  id: string
  title: string
  description: string
  duration: string
  price: string
  originalPrice?: string
  image: string
  gallery: string[]
  destination: string
  category: 'domestic' | 'international' | 'adventure' | 'luxury' | 'budget'
  highlights: string[]
  itinerary: {
    day: number
    title: string
    description: string
    activities: string[]
  }[]
  includes: string[]
  excludes: string[]
  availability: {
    startDate: string
    endDate: string
    seats: number
  }
  difficulty: 'easy' | 'moderate' | 'challenging'
  rating: number
  reviews: number
  featured: boolean
  active: boolean
  createdAt: string
  updatedAt: string
}

export const tourPackages: TourPackage[] = [
  {
    id: 'maasai-mara-safari',
    title: 'Maasai Mara 3-Day Safari',
    description: 'Experience the incredible wildlife of Maasai Mara with our expert guides. Witness the Great Migration (seasonal) and the Big Five in their natural habitat.',
    duration: '3 Days / 2 Nights',
    price: 'KES 45,000',
    originalPrice: 'KES 55,000',
    image: '/images/tours/maasai-mara-hero.jpg',
    gallery: [
      '/images/tours/maasai-mara-1.jpg',
      '/images/tours/maasai-mara-2.jpg',
      '/images/tours/maasai-mara-3.jpg'
    ],
    destination: 'Maasai Mara, Kenya',
    category: 'domestic',
    highlights: [
      'Game drives with expert guides',
      'Accommodation in luxury tented camps',
      'All meals included',
      'Airport transfers from Nairobi',
      'Photography opportunities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Maasai Mara',
        description: 'Early morning departure from Nairobi with scenic drive to Maasai Mara.',
        activities: ['Pick up from Nairobi hotel', 'Scenic drive', 'Afternoon game drive', 'Check-in at camp']
      },
      {
        day: 2,
        title: 'Full Day Game Drive',
        description: 'Full day exploring the Maasai Mara with picnic lunch in the wilderness.',
        activities: ['Morning game drive', 'Picnic lunch', 'Afternoon game drive', 'Sunset viewing']
      },
      {
        day: 3,
        title: 'Final Game Drive & Return',
        description: 'Morning game drive and return to Nairobi.',
        activities: ['Morning game drive', 'Breakfast at camp', 'Drive back to Nairobi', 'Drop off at hotel']
      }
    ],
    includes: [
      'Transportation in 4x4 safari vehicle',
      'Accommodation in luxury tented camps',
      'All meals as specified',
      'Park entrance fees',
      'Professional guide/driver',
      'Game drives as specified'
    ],
    excludes: [
      'International airfare',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities',
      'Alcoholic beverages'
    ],
    availability: {
      startDate: '2024-06-01',
      endDate: '2024-12-31',
      seats: 12
    },
    difficulty: 'easy',
    rating: 4.8,
    reviews: 127,
    featured: true,
    active: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: 'dubai-shopping-extravaganza',
    title: 'Dubai Shopping & City Tour',
    description: 'Experience the glitz and glamour of Dubai with shopping tours, desert safari, and city exploration.',
    duration: '5 Days / 4 Nights',
    price: 'KES 120,000',
    image: '/images/tours/dubai-hero.jpg',
    gallery: [
      '/images/tours/dubai-1.jpg',
      '/images/tours/dubai-2.jpg',
      '/images/tours/dubai-3.jpg'
    ],
    destination: 'Dubai, UAE',
    category: 'international',
    highlights: [
      'Desert safari with BBQ dinner',
      'Burj Khalifa observation deck',
      'Dubai Mall shopping tour',
      'Dhow cruise dinner',
      'City tour with guide'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dubai',
        description: 'Airport pickup and hotel check-in with evening at leisure.',
        activities: ['Airport pickup', 'Hotel check-in', 'Evening at leisure']
      },
      {
        day: 2,
        title: 'City Tour & Burj Khalifa',
        description: 'Half-day city tour including Burj Khalifa observation deck.',
        activities: ['City tour', 'Burj Khalifa visit', 'Dubai Mall tour', 'Evening at leisure']
      },
      {
        day: 3,
        title: 'Desert Safari',
        description: 'Evening desert safari with dune bashing and BBQ dinner.',
        activities: ['Morning at leisure', 'Afternoon desert safari', 'BBQ dinner', 'Entertainment show']
      },
      {
        day: 4,
        title: 'Shopping & Dhow Cruise',
        description: 'Shopping tour and evening dhow cruise dinner.',
        activities: ['Gold Souk tour', 'Spice Souk visit', 'Dhow cruise dinner']
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Final shopping and airport transfer.',
        activities: ['Last-minute shopping', 'Airport transfer']
      }
    ],
    includes: [
      'Return flights from Nairobi',
      '4-star hotel accommodation',
      'Daily breakfast',
      'Desert safari with dinner',
      'City tour with guide',
      'Visa assistance'
    ],
    excludes: [
      'Travel insurance',
      'Lunch and dinner (except specified)',
      'Personal expenses',
      'Tips and gratuities',
      'Optional activities'
    ],
    availability: {
      startDate: '2024-02-01',
      endDate: '2024-11-30',
      seats: 20
    },
    difficulty: 'easy',
    rating: 4.6,
    reviews: 89,
    featured: true,
    active: true,
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z'
  },
  {
    id: 'coastal-beach-retreat',
    title: 'Diani Beach Paradise Getaway',
    description: 'Relax and unwind at the pristine beaches of Diani with water sports and cultural experiences.',
    duration: '4 Days / 3 Nights',
    price: 'KES 35,000',
    image: '/images/tours/diani-beach-hero.jpg',
    gallery: [
      '/images/tours/diani-1.jpg',
      '/images/tours/diani-2.jpg',
      '/images/tours/diani-3.jpg'
    ],
    destination: 'Diani Beach, Kenya',
    category: 'domestic',
    highlights: [
      'Beachfront resort accommodation',
      'Water sports activities',
      'Wasini Island tour',
      'Cultural village visit',
      'All meals inclusive'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival at Diani',
        description: 'Transfer from Ukunda airport to beach resort.',
        activities: ['Airport pickup', 'Resort check-in', 'Beach relaxation', 'Welcome dinner']
      },
      {
        day: 2,
        title: 'Water Sports Day',
        description: 'Full day of water sports and beach activities.',
        activities: ['Snorkeling', 'Jet skiing', 'Beach volleyball', 'Sunset cruise']
      },
      {
        day: 3,
        title: 'Wasini Island Tour',
        description: 'Day trip to Wasini Island for dolphin watching and snorkeling.',
        activities: ['Boat trip to Wasini', 'Dolphin watching', 'Snorkeling', 'Seafood lunch']
      },
      {
        day: 4,
        title: 'Departure',
        description: 'Final beach morning and transfer to airport.',
        activities: ['Morning beach time', 'Check-out', 'Airport transfer']
      }
    ],
    includes: [
      'Flights from Nairobi to Ukunda',
      'Beachfront resort accommodation',
      'All meals and drinks',
      'Water sports equipment',
      'Wasini Island tour',
      'Airport transfers'
    ],
    excludes: [
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities',
      'Optional excursions'
    ],
    availability: {
      startDate: '2024-06-01',
      endDate: '2024-12-31',
      seats: 15
    },
    difficulty: 'easy',
    rating: 4.7,
    reviews: 94,
    featured: false,
    active: true,
    createdAt: '2024-01-20T10:00:00Z',
    updatedAt: '2024-01-20T10:00:00Z'
  }
]

export const getFeaturedTours = () => tourPackages.filter(tour => tour.featured && tour.active)
export const getActiveTours = () => tourPackages.filter(tour => tour.active)
export const getTourByCategory = (category: TourPackage['category']) => 
  tourPackages.filter(tour => tour.category === category && tour.active)
export const getTourById = (id: string) => tourPackages.find(tour => tour.id === id)
