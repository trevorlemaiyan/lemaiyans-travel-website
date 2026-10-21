export const siteConfig = {
  name: "Lemaiyans Travels Limited",
  brandName: "Lemaiyan's Travels",
  tagline: "The journey is ours, the destination is yours.",
  motto: "Aviation is not just our business; it is the core of our existence.",
  founded: 2014,
  phone: "0704772826",
  phoneTel: "+254704772826",
  email: "lemaiyans@gmail.com",
  poBox: "P.O. Box 2696-30100 Eldoret",
  address: "Nandi Arcade Building, First Floor, Oloo Street, Eldoret, Kenya",
  locationShort: "Based in Eldoret, Kenya · Serving clients worldwide",
  coordinates: {
    lat: 0.5153791768063767,
    lng: 35.27352667069618,
  },
  officeHours: "Monday – Friday: 8:00 AM – 5:30 PM | Saturday: 8:30 AM – 1:00 PM",
  accreditations: {
    iata: {
      title: "IATA Accredited Agent",
      type: "GoLite Accreditation",
    },
    kata: {
      title: "KATA Certified Member",
      name: "Kenya Association of Travel Agents",
      status: "Active Member",
    },
    tra: {
      title: "TRA Licensed Operator",
      class: "Class C (Travel Agency - Ticketing)",
      body: "Tourism Regulatory Authority of Kenya",
    },
    kra: {
      title: "KRA Tax Compliant",
      status: "Fully Compliant",
      body: "Kenya Revenue Authority",
    },
    agpo: {
      title: "AGPO Certified Enterprise",
      category: "Women-Owned Business",
      body: "The National Treasury of Kenya",
    },
    county: {
      title: "County Business Permit",
      body: "County Government of Uasin Gishu",
      status: "Licensed Operator",
    },
  },
  socials: {
    instagram: {
      name: "Instagram",
      handle: "@lemaiyans_travels",
      url: "https://www.instagram.com/lemaiyans_travels/",
    },
    facebook: {
      name: "Facebook",
      handle: "Lemaiyan's Travels",
      url: "https://web.facebook.com/profile.php?id=61590535782623",
    },
  },
  facebook: {
    name: "Lemaiyan's Travels",
    url: "https://web.facebook.com/profile.php?id=61590535782623",
  },
  instagram: {
    name: "Instagram",
    handle: "@lemaiyans_travels",
    url: "https://www.instagram.com/lemaiyans_travels/",
  },
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "",
} as const
