export const asset = (name: string) => `${import.meta.env.BASE_URL}meridian/${name}`
export const consultationUrl = 'https://calendly.com/gordon-meridianbridge/15min-consultation'
export const inquiryUrl = 'https://tally.so/r/7Rpe72'
export const siteUrl = 'https://meridianbridge.vercel.app/'

export const navigation = [
  ['Why China', 'why-china'],
  ['How it Works', 'how-it-works'],
  ['Pricing', 'pricing'],
  ["What's Included", 'screening'],
  ['Our Providers', 'providers'],
  ['About', 'about'],
  ['FAQ', 'faq'],
] as const

// Trip-cost figures are shown in each visitor's home currency.
export const countries = [
  {
    code: 'CA', name: 'Canada', currency: 'CAD', flightsFrom: 'Canada, estimated from YVR',
    screeningPackage: 'From $300 CAD', fee: '$500 CAD', flights: '~$800 – $1,200 CAD',
    accommodation: '$400 – $800 CAD', localCosts: '$150 – $450 CAD', alreadyGoingTotal: 'From $800 CAD',
  },
  {
    code: 'US', name: 'United States', currency: 'USD', flightsFrom: 'US, estimated from LAX',
    screeningPackage: 'From $270 USD', fee: '$400 USD', flights: '$700 – $1,100 USD',
    accommodation: '~$300 – $600 USD', localCosts: '~$100 – $300 USD', alreadyGoingTotal: 'From $670 USD',
  },
  {
    code: 'UK', name: 'United Kingdom', currency: 'GBP', flightsFrom: 'UK, estimated from LHR',
    screeningPackage: 'From £270', fee: '£300', flights: '~£550 – £800',
    accommodation: '~£225 – £450', localCosts: '~£75 – £225', alreadyGoingTotal: 'From £570',
  },
] as const

export type CountryCode = typeof countries[number]['code']

// Home-country options are listed in order and shown separated by “OR”.
export const comparisons = [
  {
    title: 'MRI *', icon: 'fa59d.svg', image: '3f753.png', imageAlt: 'An MRI scanner and patient table', imageWidth: 1500, imageHeight: 1000,
    china: {
      wait: ['Same day available'],
      cost: { CA: 'From ~$200 CAD', US: 'From ~$140 USD', UK: 'From £100' },
    },
    home: {
      CA: ['30 week wait', '$1,000 – $1,500 (single scan)'],
      US: ['National average is $1,325 USD, varies by scan area, insurance, and provider.'],
      UK: ['6+ weeks', 'From £500 (single scan)'],
    },
  },
  {
    title: 'CT Scan *', icon: 'fa59d.svg', image: 'ct-scan-suite.webp', imageAlt: 'A CT scanner and patient table in a warmly lit examination room', imageWidth: 1536, imageHeight: 1024,
    china: {
      wait: ['Same day available'],
      cost: { CA: 'From ~$150 CAD', US: 'From ~$100 USD', UK: 'From £80' },
    },
    home: {
      CA: ['9 week wait', '$500+ (single scan)'],
      US: ['Typically approximately $1,000 USD, varies by scan area, insurance, and provider.'],
      UK: ['6+ weeks', 'From £400 (single scan)'],
    },
  },
  {
    title: 'Complete Health Screening', icon: '2d269.svg', image: 'complete-health-screening.jpg', imageAlt: 'A sunlit healthcare room with a patient bed and comfortable seating', imageWidth: 1000, imageHeight: 600,
    china: {
      wait: ['Same week available', 'By appointment'],
      cost: { CA: 'From $350 CAD', US: 'From $270 USD', UK: 'From £200' },
    },
    home: {
      CA: ['Limited health screening for seniors. Not comprehensive.', '$2,000 – $5,000+ CAD'],
      US: ['About $4,000 USD for comparable packages.'],
      UK: ['Every 5 years if requested. Not comprehensive.', 'From £1,200+'],
    },
  },
] as const

export const processSteps = [
  ['01', 'Start with a conversation', 'Tell us what you are looking for during a free consultation or through our inquiry form.'],
  ['02', 'Receive tailored options', 'We identify suitable providers based on your needs and provide tailored package options.'],
  ['03', 'We coordinate the booking', 'We handle communication with the provider and appointment details.'],
  ['04', 'We prepare you for China', 'Practical guidance, payment preparation and on-trip support.'],
  ['05', 'Complete your health screening', 'We help with logistics and report translations.'],
] as const

export const screeningTests = [
  ['3a216.svg', 'Physical health assessment & body composition'],
  ['8ab5d.svg', 'Vision and eye examination'],
  ['ac093.svg', 'ECG and cardiovascular testing'],
  ['074ae.svg', 'X-ray, CT, MRI and ultrasound'],
  ['5d8b0.svg', 'Gastrointestinal screening'],
  ['d8181.svg', 'Tumour markers'],
  ['a7c4c.svg', 'Bone density'],
  ['e6860.svg', 'Female health specific tests'],
  ['6395f.svg', 'Thyroid, liver and kidney function'],
  ['3bb3d.svg', 'Blood testing, diabetes screening'],
] as const

export const providers = [
  ['94db4.png', 'Major academic hospitals', 'Clinically renowned institutions with broad diagnostic and specialist capabilities.'],
  ['a8e95.png', 'International & private hospitals', 'High-quality service and dedicated international patient departments.'],
  ['770de.png', 'Specialist diagnostic providers', 'Focused on comprehensive screening and diagnostic services with specific strengths.'],
] as const

export const expectations = [
  ['13c26.svg', 'Western-standard equipment', 'Modern MRI, CT, Ultrasound, and diagnostic systems, from the same brands used in Western systems.'],
  ['1c73b.svg', 'Dedicated international departments', 'Specialized in foreign-patient services, with VIP options available.'],
  ['ba4f6.svg', 'Experienced medical professionals', 'Top level doctors in their respective fields with decades of experience serving international patients.'],
  ['3ff93.svg', 'Streamlined patient journey', 'Registration, interpretation, imaging access and follow-up support.'],
] as const

export const questions = [
  {
    question: 'Can you help if I only want an MRI or specific test?',
    answer: 'You can ask about a specific scan or test as well as a full health screening. Tell us what you are looking for, and we can discuss suitable provider options and booking requirements. A qualified clinician should advise which tests are appropriate for you.',
  },
  {
    question: 'How do you choose which provider to recommend?',
    answer: 'We match your screening needs and travel plans with our network of hospitals and diagnostic providers in Guangdong. Relevant considerations include the services available, international-patient support, appointment availability, and pricing. We discuss the options with you before you decide.',
  },
  {
    question: 'Will the hospitals speak English?',
    answer: 'Language arrangements vary by hospital and department. Meridian Bridge offers English, Mandarin, and Cantonese coordination support. Before booking, we will discuss the provider’s language services and whether interpretation or translated reports need to be arranged.',
  },
  {
    question: 'How and when will I receive my results?',
    answer: 'Report timing, format, and language depend on the provider and the tests you choose. Confirm these arrangements before booking. We help coordinate report logistics so you can share the results with your own physician; we do not diagnose conditions or replace medical follow-up.',
  },
] as const
