import type {
  Category,
  CategoryDetail,
  ContactInfo,
  Spec,
  SubCategory,
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
    icon: '🦷',
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

// Category detail data, keyed by slug --------------------------------------
// Real product data is available for the two categories below. Categories
// without a detail entry fall back to a title/description-only view.

export const categoryDetails: Record<string, CategoryDetail> = {
  'laboratory-equipment': {
    slug: 'laboratory-equipment',
    title: 'Laboratory Equipment & Life Science',
    description:
      'A comprehensive range of laboratory instruments and life science tools designed for research, diagnostics, and testing applications across various scientific domains.',
    cataloguePdf: null,
    featured: [
      { name: 'Centrifuge', description: 'High-performance centrifuge designed for efficient sample separation. Suitable for a wide range of laboratory and research applications.', image: '/images/lab-equipment/centrifuge.webp' },
      { name: 'Compact Incubator', description: 'Space-efficient incubator designed for controlled temperature environments. Suitable for cell culture and microbiological studies.', image: '/images/lab-equipment/Compact_Incubator_Natural_Convection_2500x.webp' },
      { name: 'CO2 Incubator', description: 'Maintains optimal conditions for cell growth with controlled CO₂ levels, humidity, and temperature. Widely used in cell culture applications.', image: '/images/lab-equipment/CO2_incubator.webp' },
      { name: 'Water Baths', description: 'Provides precise temperature control for sample incubation and heating. Commonly used in microbiology and biochemical applications.', image: '/images/lab-equipment/water_bath.webp' },
      { name: 'Manual Pipette', description: 'Ergonomically designed pipette with a wide volume range and high accuracy. Fully autoclavable and resistant to chemical corrosion, making it ideal for laboratory applications.', image: '/images/lab-equipment/manual_pippette.webp' },
      { name: 'Electronic Pipette', description: 'Advanced pipetting solution offering precise liquid handling with reduced manual effort. Designed for consistent performance in high-throughput laboratory environments.', image: '/images/lab-equipment/electronic_pippette.jpg' },
      { name: 'Magnetic Hotplate Stirrer', description: 'Combines heating and stirring functions for uniform mixing of solutions. Ideal for chemical and biological laboratory processes.', image: '/images/lab-equipment/magnetic_hotplate_stirrer.jpg' },
      { name: 'Overhead Stirrer', description: 'Powerful stirring device designed for high-viscosity samples. Ensures stable and consistent mixing in laboratory environments.', image: '/images/lab-equipment/Overhead_Stirrer.webp' },
      { name: 'Microvolume Spectrophotometer', description: 'Enables accurate measurement of nucleic acids and proteins using minimal sample volumes. Ideal for molecular biology workflows.', image: '/images/lab-equipment/Microvolume_Spectrophotometer.webp' },
      { name: 'Fluorometer', description: 'Sensitive detection instrument for fluorescence-based assays. Used in DNA, RNA, and protein quantification.', image: '/images/lab-equipment/Fluorometer.webp' },
      { name: 'Microplate Reader', description: 'Versatile system for detecting biological, chemical, and physical events in microplate formats. Suitable for high-throughput screening.', image: '/images/lab-equipment/Microplate_Reader.webp' },
      { name: 'PCR System', description: 'Thermal cycler designed for DNA amplification with precise temperature control. Essential for molecular biology and genetic research.', image: '/images/lab-equipment/PCR_System.webp' },
    ],
    otherItems: [
      'Magnetic Stirrer', 'Vortex Mixer', 'Shaker', 'Rocker', 'Rotary Evaporator',
      'Diaphragm Vacuum Pump', 'Recirculating Chiller', 'Benchtop Heater', 'Pipette Controller',
      'Pipette Stand', 'Homogenizer', 'Extraction And Purification System',
      'NGS Library Preparation Workstation', 'Temperature Verification System',
      'Integrated Gene Detection System', 'Mobile Lab (Lab-In-A-Box)', 'Portable Cell Counter',
      'Osmometer', 'Osmometer Calibration Standard', 'Slide Dryer', 'Tissue Flotation Bath',
      'Paraffin Wax Dispenser', 'UV Microscope Slide Printer',
    ],
  },
  'general-consumables': {
    slug: 'general-consumables',
    title: 'General Consumables',
    description:
      'A broad range of everyday hospital and clinical consumables — spanning respiratory, hypodermic and catheter products, wound care and dressings, protective wear, containers and sterilization supplies — organised below by category.',
    cataloguePdf: null,
    // General Consumables is organised into sub-categories (see below) rather
    // than a flat product list, so there's nothing to show at this level.
    featured: [],
    otherItems: [],
    // Real per-category product lists are pending — each renders the
    // existing "coming soon" placeholder until featured/otherItems are filled in.
    subCategories: [
      {
        slug: 'respiratory-series',
        title: 'Respiratory Series',
        description:
          'Oxygen masks, nebulizers, suction catheters and airway management consumables for respiratory care.',
        image: null,
        cataloguePdf: null,
        featured: [
          { name: 'Simple Oxygen Mask', description: 'Clear medical-grade oxygen mask with adjustable nose clip, anti-crush tubing and elastic strap. Supplied with a 2.1m oxygen tube; latex-free and DEHP-free versions available. Sizes XS–XL, packed in a PE bag.', image: null },
          { name: 'Nebulizer Mask', description: 'Clear medical-grade PVC nebulizer mask with adjustable nose clip, standard connector and 2.1m oxygen tube. Nebulizer jar available in 6cc or 15cc; latex-free and DEHP-free versions available. Sizes XS–XL, packed in a PE bag.', image: null },
          { name: 'Nasal Oxygen Cannula', description: 'Medical-grade PVC nasal oxygen cannula available with soft, standard or flared tips, in green or transparent. Supplied with a 2.1m or 1.5m oxygen tube. Sizes XS–XL, packed in a PE bag.', image: null },
          { name: 'Oxygen Mask With Reservoir Bag', description: 'Medical-grade PVC non-rebreathing oxygen mask with reservoir bag (with or without check valve) for high-concentration oxygen delivery. Features an adjustable nose clip, anti-crush tube and elastic strap, with a 2m/2.1m oxygen tube; DEHP-free available. Reservoir volumes of 500ml, 750ml or 1000ml, for adult and children sizes.', image: null },
          { name: 'Silicone Manual Resuscitator', description: 'Natural-colour silicone manual resuscitator, autoclavable to 134°C to help prevent cross-infection. Latex-free, medical-grade silicone construction with a built-in 60cm H2O pressure relief valve and an all-in-one intake valve for direct connection to an oxygen reservoir bag; guaranteed for 5 years or 20 autoclave cycles. Optional airway, mouth opener and custom labelling; built-in 30mm exhale port for PEEP, inlet valve or manometer. Adult, pediatric and infant sizes, packed in a PP box, PE bag or paper box.', image: null },
        ],
        otherItems: [
          'Adjustable Venturi Mask', 'Tracheostomy Mask', 'Aero Chamber With Mask', 'CPR Mask', 'CPAP Mask',
          'Peak Flow Meter', 'Anesthesia Breathing Circuit', 'Nebulizer Mask Kit', 'O2+CO2 Nasal Cannula',
          'SEBS Manual Resuscitator', 'PVC Manual Resuscitator', 'PVC Anesthesia Mask', 'Silicone Anesthesia Mask',
          'Three Balls Spirometer', 'Humidifier Bottle',
        ],
      },
      {
        slug: 'hypodermic-series',
        title: 'Hypodermic Series',
        description:
          'Syringes, needles and infusion sets for injections, sampling and IV therapy.',
        image: null,
        cataloguePdf: null,
        featured: [],
        otherItems: [],
      },
      {
        slug: 'medical-catheters',
        title: 'Medical Catheters',
        description:
          'Urinary, IV and specialty catheters for a range of clinical procedures.',
        image: null,
        cataloguePdf: null,
        featured: [],
        otherItems: [],
      },
      {
        slug: 'urine-bag',
        title: 'Urine Bag',
        description:
          'Drainage and collection bags for urinary catheter care.',
        image: null,
        cataloguePdf: null,
        featured: [],
        otherItems: [],
      },
      {
        slug: 'cotton-series',
        title: 'Cotton Series',
        description:
          'Absorbent cotton wool, rolls and balls for general clinical and wound care use.',
        image: null,
        cataloguePdf: null,
        featured: [],
        otherItems: [],
      },
      {
        slug: 'surgery-examination',
        title: 'Surgery Examination',
        description:
          'Gloves, drapes and examination consumables for surgical and diagnostic procedures.',
        image: null,
        cataloguePdf: null,
        featured: [],
        otherItems: [],
      },
      {
        slug: 'wound-care',
        title: 'Wound Care',
        description:
          'Gauze, bandages and dressings for everyday wound management.',
        image: null,
        cataloguePdf: null,
        featured: [],
        otherItems: [],
      },
      {
        slug: 'dressing-set',
        title: 'Dressing Set',
        description:
          'Pre-assembled sterile dressing kits for wound care procedures.',
        image: null,
        cataloguePdf: null,
        featured: [],
        otherItems: [],
      },
      {
        slug: 'first-aid-products',
        title: 'First Aid Products',
        description:
          'First aid kits and everyday emergency-care consumables.',
        image: null,
        cataloguePdf: null,
        featured: [],
        otherItems: [],
      },
      {
        slug: 'hospital-uniform',
        title: 'Hospital Uniform',
        description:
          'Scrubs, gowns and protective clothing for clinical staff.',
        image: null,
        cataloguePdf: null,
        featured: [],
        otherItems: [],
      },
      {
        slug: 'plastic-container',
        title: 'Plastic Container',
        description:
          'Specimen containers, sharps bins and general clinical storage containers.',
        image: null,
        cataloguePdf: null,
        featured: [],
        otherItems: [],
      },
      {
        slug: 'home-care',
        title: 'Home Care',
        description:
          'Everyday consumables for home-based patient care.',
        image: null,
        cataloguePdf: null,
        featured: [],
        otherItems: [],
      },
      {
        slug: 'sterilization-packing',
        title: 'Sterilization Packing',
        description:
          'Pouches, wrap and indicators for sterilizing and packing medical instruments.',
        image: null,
        cataloguePdf: null,
        featured: [],
        otherItems: [],
      },
      {
        slug: 'others',
        title: 'Others',
        description:
          'Additional general consumables not covered by the categories above.',
        image: null,
        cataloguePdf: null,
        featured: [],
        otherItems: [],
      },
    ],
  },
  'medical-surgery': {
    slug: 'medical-surgery',
    title: 'Medical Surgery',
    description:
      'Advanced surgical devices and accessories designed for laparoscopic procedures, including morcellation systems, tissue retrieval solutions, and supporting components that ensure safety, precision, and efficiency in modern operating environments.',
    cataloguePdf: null,
    featured: [
      { name: 'PNEUMOSAC® Safety Isolation Bag', description: 'A single-use sterile in-bag morcellation device designed for safe tissue containment during laparoscopic procedures. Features a non-twist design and multiple channels for enhanced usability.', image: null },
      { name: 'Tissue Retrieval Endo Bags', description: 'Disposable endoscopic bags available in multiple capacities for safe retrieval of tissue specimens during minimally invasive surgeries.', image: null },
      { name: 'LIMAS Morcellator System', description: 'A laparoscopic morcellation system designed for efficient tissue extraction, used in combination with safety isolation bags for controlled procedures.', image: null },
      { name: 'Motor Drive Unit (LMD01)', description: 'Core power unit of the morcellator system that drives the cutting mechanism, ensuring consistent performance during surgical procedures.', image: null },
      { name: 'Reusable Handle (LMH05)', description: 'Ergonomically designed reusable handle providing control and precision during morcellation procedures.', image: null },
      { name: 'Foot Switch (LMD03)', description: 'Foot-operated control switch allowing surgeons to manage device operation hands-free during procedures.', image: null },
      { name: 'Rotor Cable (LMC04)', description: 'High-performance cable connecting the motor unit to the cutting system, ensuring reliable power transmission.', image: null },
      { name: 'Power Cord (LMD02)', description: 'Standard power connection cable designed for safe and stable electrical supply to the motor drive unit.', image: null },
      { name: 'Cutter Tubes', description: 'Precision-engineered cutting tubes available in multiple diameters for efficient tissue morcellation in laparoscopic surgeries.', image: null },
      { name: 'Washers', description: 'Supporting components designed for use with cutter tubes to ensure secure fitting and optimal device performance.', image: null },
      { name: 'Handle Head Cap', description: 'Protective and functional component used in the morcellator handle assembly for secure operation.', image: null },
      { name: 'Morcellation Bags (Multi-Capacity)', description: 'Sterile bags available in various capacities for safe containment and extraction of tissue during surgical procedures.', image: null },
    ],
    otherItems: [
      'PNEUMOSAC® 1800 ml', 'PNEUMOSAC® 2500 ml', 'PNEUMOSAC® 3200 ml', 'PNEUMOSAC® 4200 ml',
      'PNEUMOSAC® 5000 ml', 'Endo Bags 200 ml', 'Endo Bags 300 ml', 'Endo Bags 650 ml',
      'Endo Bags 900 ml', 'Cutter Tube 10 mm', 'Cutter Tube 12 mm', 'Cutter Tube 15 mm',
      'Cutter Tube 18 mm', 'Washer 10 mm', 'Washer 15 mm', 'Washer 18 mm',
    ],
  },
}

/**
 * Returns the detail record for a slug. Categories without real product data
 * yet fall back to a title/description-only record (empty product lists) built
 * from the top-level category entry.
 */
export const getCategoryDetail = (slug: string | undefined): CategoryDetail => {
  if (slug && categoryDetails[slug]) return categoryDetails[slug]
  const c = getCategoryBySlug(slug)
  return {
    slug: c.slug,
    title: c.title,
    description: c.description,
    cataloguePdf: null,
    featured: [],
    otherItems: [],
  }
}

/**
 * Returns a specific sub-category within a category detail record, or
 * `undefined` when the category has no sub-categories or the slug doesn't
 * match one of them — callers should treat `undefined` as "show the hub".
 */
export const getSubCategoryBySlug = (
  detail: CategoryDetail,
  subSlug: string | undefined,
): SubCategory | undefined => detail.subCategories?.find((s) => s.slug === subSlug)

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
