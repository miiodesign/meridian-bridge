// `builds` names the tier each package extends; it is shown as “<tier>, plus:” above the list.
export const screeningPackages = [
  {
    id: 'essential',
    title: 'Comprehensive',
    price: '$270 USD',
    summary: 'A thorough foundation for understanding your overall health.',
    popular: false,
    checkIcon: '565d9.svg',
    builds: null,
    inclusions: [
      'Physical examination and health assessment',
      'Comprehensive blood and urine testing',
      'Liver, kidney and metabolic health',
      'Heart health, including ECG',
      'Ultrasound and basic diagnostic imaging',
      'Common health and age-specific screenings',
    ],
  },
  {
    id: 'comprehensive',
    title: 'Enhanced',
    price: '$600 – $1,000 USD',
    summary: 'A broader assessment with additional imaging and deeper screening.',
    popular: true,
    checkIcon: '565d9.svg',
    builds: 'Comprehensive',
    inclusions: [
      'Expanded bloodwork and health markers',
      'Additional imaging, including CT and ultrasound',
      'Deeper heart and cardiovascular assessment',
      'Cancer-related screening and tumour markers',
      'Thyroid, digestive and hormonal health',
      'Expanded male- or female-specific testing',
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced / Specialized',
    price: '$1,000+ USD',
    summary: 'More detailed investigations and specialized areas of focus.',
    popular: false,
    checkIcon: '69591.svg',
    builds: 'Enhanced',
    inclusions: [
      'Advanced heart and vascular testing',
      'Specialized organ and neurological screening',
      'More extensive blood and biomarker panels',
      'Advanced digestive health investigations',
      'Targeted specialist examinations',
      'Additional testing tailored to specific concerns',
    ],
  },
] as const

export type ScreeningPackage = typeof screeningPackages[number]
