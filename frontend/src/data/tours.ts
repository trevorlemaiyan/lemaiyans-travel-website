export interface TourDestination {
  id: string
  name: string
  region: 'kenya' | 'worldwide'
  description: string
  image: string
  imageAlt: string
  credit: string
  photoUrl: string
}

// This is the project's current tour content source. The repository does not
// connect to a separate database; destination ideas here are not fixed packages.
export const tourDestinations: TourDestination[] = [
  {
    id: 'maasai-mara',
    name: 'Maasai Mara',
    region: 'kenya',
    description: 'Wildlife, open savannah, and time to take in the landscapes of the Mara.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Masai_Mara_Game_Reserve%2C_Kenya_%28Unsplash_aqKgV2jVKVM%29.jpg/1280px-Masai_Mara_Game_Reserve%2C_Kenya_%28Unsplash_aqKgV2jVKVM%29.jpg',
    imageAlt: 'Lions walking through grass in the Maasai Mara',
    credit: 'Harish Tikadia / Wikimedia Commons (CC0)',
    photoUrl: 'https://commons.wikimedia.org/wiki/File:Masai_Mara_Game_Reserve,_Kenya_(Unsplash_aqKgV2jVKVM).jpg',
  },
  {
    id: 'amboseli',
    name: 'Amboseli & the southern circuit',
    region: 'kenya',
    description: 'Wide horizons, elephant country, and views toward Mount Kilimanjaro.',
    image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Mount Kilimanjaro above the plains of Amboseli National Park',
    credit: 'Sergey Pesterev / Unsplash',
    photoUrl: 'https://unsplash.com/photos/mount-kilimanjaro-in-amboseli-national-park-DWXR-nAbxCk',
  },
  {
    id: 'kenya-coast',
    name: 'Kenya coast',
    region: 'kenya',
    description: 'Indian Ocean beaches, coastal towns, and time to slow the pace by the sea.',
    image: 'https://images.unsplash.com/photo-1691161510065-298039a5b51b?auto=format&fit=crop&w=2400&q=92',
    imageAlt: 'Sunset and palms at Diani Beach on the Kenyan coast',
    credit: 'Flo P / Unsplash',
    photoUrl: 'https://unsplash.com/photos/the-sun-is-setting-over-the-beach-with-palm-trees-Z-yATRnA0es',
  },
  {
    id: 'kyoto',
    name: 'Kyoto, Japan',
    region: 'worldwide',
    description: 'Temple paths, traditional streets, gardens, and Japanese food and culture.',
    image: 'https://images.unsplash.com/photo-1551106368-d9157e48a3ca?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Torii gates at Fushimi Inari Taisha in Kyoto, Japan',
    credit: 'Nic Y-C / Unsplash',
    photoUrl: 'https://unsplash.com/photos/kyoto-eRNWnwY63Cg',
  },
  {
    id: 'santorini',
    name: 'Santorini, Greece',
    region: 'worldwide',
    description: 'Island villages, Aegean views, and the architecture of the Greek islands.',
    image: 'https://images.unsplash.com/photo-1501700072703-15ee3d019f07?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'White hillside buildings overlooking the sea in Santorini, Greece',
    credit: 'Jason Zeis / Unsplash',
    photoUrl: 'https://unsplash.com/photos/santorini-greece-msrYP_9jLvQ',
  },
  {
    id: 'dubai',
    name: 'Dubai, United Arab Emirates',
    region: 'worldwide',
    description: 'Modern city landmarks, desert landscapes, and experiences shaped around your interests.',
    image: 'https://images.unsplash.com/photo-1745750434535-5943ef2fd31a?auto=format&fit=crop&w=2400&q=92',
    imageAlt: 'Burj Khalifa and the Dubai skyline',
    credit: 'Sirav Talwar / Unsplash',
    photoUrl: 'https://unsplash.com/photos/dubais-skyline-featuring-the-burj-khalifa-lMo2HjtoUpM',
  },
]
