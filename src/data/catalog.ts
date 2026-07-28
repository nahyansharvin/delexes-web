import type {
  Category,
  CategoryDetail,
  ContactInfo,
  Spec,
  ValueProp,
} from '../types'

// All content below is lifted verbatim from the original design's renderVals()
// blocks. Placeholder / "to be confirmed" copy is illustrative and preserved.

export const categories: Category[] = [
  {
    n: '01',
    slug: 'laboratory-equipment',
    icon: '🔬',
    accent: '#2563EB',
    title: 'Laboratory Equipment & Life Science',
    short:
      'Analysers, centrifuges, microscopes, PCR systems and life-science consumables for clinical and research labs.',
    description:
      'Analysers, centrifuges, microscopes, PCR systems and full life-science consumable ranges for clinical and research laboratories.',
  },
  {
    n: '02',
    slug: 'medical-surgery',
    icon: '🩺',
    accent: '#C10D13',
    title: 'Medical Surgery',
    short:
      'Surgical instruments, electrosurgical units, drapes, procedure packs and theatre accessories.',
    description:
      'Surgical instruments, electrosurgical units, drapes, procedure packs and theatre accessories for operating environments.',
  },
  {
    n: '03',
    slug: 'general-consumables',
    icon: '🧴',
    accent: '#3B8E64',
    title: 'General Consumables',
    short:
      'Gloves, syringes, dressings, catheters, IV sets and everyday clinical consumables in volume.',
    description:
      'Gloves, syringes, dressings, catheters, IV sets and everyday clinical consumables supplied in volume to facilities of all sizes.',
  },
  {
    n: '04',
    slug: 'implants',
    icon: '🦴',
    accent: '#7C3AED',
    title: 'Implants',
    short:
      'Orthopaedic, spinal, dental and trauma implant systems and fixation hardware.',
    description:
      'Orthopaedic, spinal, dental and trauma implant systems and fixation hardware from leading specialist manufacturers.',
  },
]

export const getCategoryBySlug = (slug: string | undefined): Category =>
  categories.find((c) => c.slug === slug) ?? categories[0]

// Home page ------------------------------------------------------------------

export const whoWeSupply: string[] = [
  'Hospitals & clinics',
  'Government & NGO tenders',
  'Pharmacies & retailers',
  'Distributors & resellers',
  'Individual practitioners',
]

export const whyProps: ValueProp[] = [
  {
    k: '01',
    t: 'Genuine, documented equipment',
    d: 'Sourced from established manufacturers and supplied with documentation and warranty support.',
  },
  {
    k: '02',
    t: 'Specialty depth, end to end',
    d: 'From diagnostics and surgery to podiatry, orthotics and custom-made devices.',
  },
  {
    k: '03',
    t: 'Built for African healthcare',
    d: 'Based in Ghana, supplying clinics, hospitals and institutions across the region.',
  },
  {
    k: '04',
    t: 'Procurement & tender ready',
    d: 'Quotations, documentation and bulk supply for institutional buyers.',
  },
]

// About page -----------------------------------------------------------------

export const aboutValues: ValueProp[] = [
  {
    k: '01',
    t: 'Quality first',
    d: 'Genuine equipment from established manufacturers, supplied with documentation.',
  },
  {
    k: '02',
    t: 'Reliable supply',
    d: 'Dependable sourcing and delivery for clinics, hospitals and tenders.',
  },
  {
    k: '03',
    t: 'Specialist depth',
    d: 'Particular strength in podiatry, orthotics and custom devices.',
  },
  {
    k: '04',
    t: 'Ongoing support',
    d: 'Warranty support and after-sales service buyers can count on.',
  },
]

export const aboutDoings: { t: string; d: string }[] = [
  {
    t: 'Laboratory Equipment & Life Science',
    d: 'Analysers, centrifuges, microscopes, PCR systems and life-science consumables for clinical and research laboratories.',
  },
  {
    t: 'Medical Surgery',
    d: 'Surgical instruments, electrosurgical units, drapes, procedure packs and theatre accessories for operating environments.',
  },
  {
    t: 'General Consumables',
    d: 'Gloves, syringes, dressings, catheters, IV sets and everyday clinical consumables supplied in volume.',
  },
  {
    t: 'Implants',
    d: 'Orthopaedic, spinal, dental and trauma implant systems and fixation hardware from specialist manufacturers.',
  },
]

// Contact page ---------------------------------------------------------------

export const contacts: ContactInfo[] = [
  { ic: 'ADR', label: 'ADDRESS', value: 'Accra, Ghana (to be confirmed)' },
  { ic: 'TEL', label: 'PHONE', value: '+233 00 000 0000' },
  { ic: '@', label: 'EMAIL', value: 'info@delexesmedical.com' },
  { ic: 'HRS', label: 'HOURS', value: 'Mon–Fri, 9:00–17:00 (TBC)' },
]

export const contactCategoryOptions: string[] = [
  'Laboratory Equipment & Life Science',
  'Medical Surgery',
  'General Consumables',
  'Implants',
  'Other / not sure',
]

// Category detail (illustrative — lab example) -------------------------------

export const labCategoryDetail: CategoryDetail = {
  slug: 'laboratory-equipment',
  title: 'Laboratory Equipment & Life Science',
  description:
    'Analysers, centrifuges, microscopes, PCR systems and full life-science consumable ranges for clinical and research laboratories.',
  cataloguePdf: null,
  featured: [
    { name: 'Haematology Analyser', description: 'Automated 5-part differential blood cell counter for high-throughput labs.', image: null },
    { name: 'Benchtop Centrifuge', description: 'Variable-speed centrifuge for serum, plasma and cell separation.', image: null },
    { name: 'Binocular Microscope', description: 'Compound microscope with LED illumination, 40×–1000× magnification.', image: null },
    { name: 'Real-Time PCR System', description: 'Thermal cycler with fluorescence detection for molecular diagnostics.', image: null },
    { name: 'Chemistry Analyser', description: 'Fully automated clinical chemistry system for routine biochemistry panels.', image: null },
    { name: 'ELISA Microplate Reader', description: 'Absorbance reader for immunoassay and enzyme-linked assays.', image: null },
    { name: 'Refrigerated Incubator', description: 'Stable temperature incubator for bacterial culture and reagent storage.', image: null },
    { name: 'Autoclave Steriliser', description: 'Bench-top steam steriliser for laboratory media and instruments.', image: null },
    { name: 'Coagulation Analyser', description: 'Semi-automated clot detection for PT, APTT and fibrinogen testing.', image: null },
    { name: 'Urine Analyser', description: 'Reflectance photometer for 10–14 parameter urine strip analysis.', image: null },
    { name: 'Vortex Mixer', description: 'Touch-mode vortex mixer for tube homogenisation in sample preparation.', image: null },
    { name: 'Micropipette Set', description: 'Adjustable single-channel pipettes: 0.5–10 µL through 100–1000 µL.', image: null },
  ],
  otherItems: [
    'Lab Water Bath', 'Dry Block Heater', 'Tissue Embedding Console', 'Histology Microtome',
    'Cell Counter', 'Slide Stainer', 'Gel Electrophoresis Unit', 'Spectrophotometer',
    'pH Meter', 'Colony Counter', 'Fume Hood', 'Biological Safety Cabinet',
    'Freeze Dryer', 'Liquid Nitrogen Tank', 'Ultrasonic Cleaner', 'Analytical Balance',
    'Plate Washer', 'Humidity Chamber', 'Cryostat', 'Tissue Processor',
  ],
}

// Product detail (illustrative example) --------------------------------------

export const productExample = {
  category: 'Laboratory Equipment & Life Science',
  categorySlug: 'laboratory-equipment',
  name: 'Portable Ultrasound Scanner',
  intro:
    'A compact, battery-powered ultrasound system designed for bedside, clinic and field use. Example description — final copy and specifications will follow the supplied product data.',
  thumbs: ['view 2', 'view 3', 'view 4', 'detail'] as string[],
  specs: [
    { k: 'Display', v: 'To be confirmed' },
    { k: 'Probe types', v: 'To be confirmed' },
    { k: 'Power', v: 'Battery / mains (TBC)' },
    { k: 'Weight', v: 'To be confirmed' },
    { k: 'Connectivity', v: 'To be confirmed' },
    { k: 'Warranty', v: 'Manufacturer warranty (TBC)' },
  ] as Spec[],
  related: [
    '12-Lead ECG Machine',
    'Patient Vital Signs Monitor',
    'EEG Monitoring System',
    'Diagnostic Examination Set',
  ] as string[],
}
