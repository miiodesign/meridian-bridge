export const screeningPackages = [
  {
    id: 'essential',
    title: 'Essential Screening',
    price: '$300 USD',
    summary: 'A practical starting point for a broader view of your general health.',
    popular: false,
    checkIcon: '565d9.svg',
    inclusions: [
      'Physical assessment',
      'Blood testing',
      'Basic imaging (e.g. ultrasound)',
      'Common screening items',
    ],
    description: 'Often chosen by younger adults, first-time screeners or anyone taking a proactive step for their health.',
  },
  {
    id: 'comprehensive',
    title: 'Comprehensive Screening',
    price: '$600 – $1,000 USD',
    summary: 'A more extensive view across multiple areas of health.',
    popular: true,
    checkIcon: '565d9.svg',
    inclusions: [
      'Expanded blood testing',
      'Multiple imaging tests (e.g. CT, MRI)',
      'Cardiovascular and metabolic health',
      'Tumour marker panels',
      'Gastrointestinal screening',
      'Male or female specific tests',
    ],
    description: 'Often considered by people in mid-life and beyond, or anyone looking for a thorough preventive screening experience.',
  },
  {
    id: 'advanced',
    title: 'Advanced / Specialized',
    price: '$1,000+ USD',
    summary: 'Comprehensive screening plus additional areas of focus.',
    popular: false,
    checkIcon: '69591.svg',
    inclusions: [
      'MRI and advanced imaging',
      'Deeper cardiovascular testing',
      'Specialized organ screening',
      'Additional tumour markers',
      'Consultations (provider-dependent)',
    ],
    description: 'Suitable for those who want more detailed diagnostics or have specific areas of concern.',
  },
] as const

export type ScreeningPackage = typeof screeningPackages[number]
