/**
 * Lemaiyans Travels Limited - Tour Packages Catalog
 * 
 * NOTE: Tours are currently dormant / hidden across the website as requested.
 * When tour operations launch, import and enable these packages in the UI.
 */

export interface TourPackage {
  id: string
  title: string
  duration: string
  destination: string
  category: 'safari' | 'beach' | 'adventure' | 'cultural' | 'international'
  description: string
  highlights: string[]
  inclusions: string[]
  image: string
  featured?: boolean
  status: 'upcoming' | 'active' | 'draft'
}

export const tourPackages: TourPackage[] = [
  {
    id: 'maasai-mara-safari',
    title: 'Maasai Mara Wildlife Safari',
    duration: '3 Days / 2 Nights',
    destination: 'Maasai Mara National Reserve, Kenya',
    category: 'safari',
    description: 'Premier big-game safari experience with guided game drives across the Mara plains, observing the Big Five and seasonal Great Migration.',
    highlights: [
      'Comprehensive 4x4 safari land cruiser game drives with seasoned guides',
      'Full-board accommodation at vetted tented safari camps',
      'Park conservation fees and passenger ground transfers included',
      'Sunset photographic drives across the Mara ecosystem'
    ],
    inclusions: ['Accommodation', 'Meals', 'Game drives', 'Transfers', 'Park fees'],
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=90',
    featured: true,
    status: 'upcoming',
  },
  {
    id: 'diani-beach-coastal-getaway',
    title: 'Diani Coastal Beach Holiday',
    duration: '4 Days / 3 Nights',
    destination: 'Diani Beach, South Coast, Kenya',
    category: 'beach',
    description: 'Relaxing coastal retreat along the white sands of Diani with beachfront resort lodging, water recreation, and airport transfers.',
    highlights: [
      'Beachfront resort accommodation with daily breakfast & dinner',
      'Ukunda or Mombasa Moi International Airport return transfers',
      'Optional dhow sailing and coral reef snorkeling excursions',
      'Customizable for couples, families, and executive relaxation'
    ],
    inclusions: ['Flight ticketing assistance', 'Resort stay', 'Airport transfers', 'Half-board dining'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=90',
    featured: true,
    status: 'upcoming',
  },
  {
    id: 'amboseli-kilimanjaro-safari',
    title: 'Amboseli Elephant Sanctuary & Kilimanjaro',
    duration: '3 Days / 2 Nights',
    destination: 'Amboseli National Park, Kenya',
    category: 'safari',
    description: 'Encounter iconic free-ranging elephant herds set against the dramatic backdrop of Mount Kilimanjaro.',
    highlights: [
      'Iconic views of Mount Kilimanjaro from Amboseli observation hill',
      'High-density elephant herd tracking with certified field naturalists',
      'Full-board lodge accommodation with pool and wilderness viewing deck',
      'Seamless transfers from Nairobi or regional airports'
    ],
    inclusions: ['Accommodation', 'Park entry fees', 'Chauffeur guide', 'Meals'],
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2000&q=90',
    featured: false,
    status: 'upcoming',
  },
  {
    id: 'dubai-international-holiday',
    title: 'Dubai City & Desert Experience',
    duration: '5 Days / 4 Nights',
    destination: 'Dubai, United Arab Emirates',
    category: 'international',
    description: 'Complete international holiday package featuring Burj Khalifa, desert dune safari, marina cruise, and fast-track visa processing.',
    highlights: [
      'Direct airline ticketing coordination (Emirates / Kenya Airways)',
      'UAE tourist visa application processing and biometric preparation',
      '4-Star hotel lodging with daily breakfast in central Dubai',
      'Desert 4x4 safari with traditional BBQ dinner under the desert sky'
    ],
    inclusions: ['Hotel booking', 'Visa processing', 'Tours & excursions', 'Airport transfers'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=90',
    featured: true,
    status: 'upcoming',
  }
]
