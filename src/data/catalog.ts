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
      'A diverse portfolio of laboratory and medical consumables designed to support clinical diagnostics, research, and healthcare operations. The range includes wound care materials, histology consumables, liquid handling products, and sample preparation accessories, ensuring precision, safety, and efficiency across applications.',
    cataloguePdf: null,
    featured: [
      { name: 'Microscope Slides', description: 'High-quality slides with ground edges and optional frosted or color-coated finishes. Designed for accurate sample analysis in laboratory and diagnostic applications.', image: null },
      { name: 'Cover Glasses', description: 'Precision-manufactured cover glasses available in multiple thicknesses and sizes, ensuring clarity and protection for microscopic samples.', image: null },
      { name: 'Embedding Cassettes', description: 'Durable histology cassettes with labeled surfaces and secure lids, available in multiple designs for routine, biopsy, and processing applications.', image: null },
      { name: 'Serological Pipettes', description: 'Sterile, individually wrapped pipettes made from polystyrene, available in multiple volume capacities for accurate liquid handling.', image: null },
      { name: 'Pipette Pumps', description: 'Ergonomic pipette controllers designed for precise aspiration and dispensing, resistant to acids and alkalis.', image: null },
      { name: 'Homogenizer Beads', description: 'High-performance beads made of glass, ceramic, and steel for efficient sample disruption in homogenization processes.', image: null },
      { name: 'Gauze Swabs', description: '100% cotton swabs with high absorbency, used for wound care and medical cleaning applications.', image: null },
      { name: 'Non-Woven Swabs', description: 'Soft and highly absorbent swabs designed to wick fluids efficiently, suitable for wound management.', image: null },
      { name: 'Paraffin Gauze', description: 'Medicated gauze used in the treatment of burns, ulcers, and skin injuries, maintaining a moist healing environment.', image: null },
      { name: 'O.R. Towels', description: 'Lint-free disposable towels suitable for operating room environments, available in sterile and non-sterile formats.', image: null },
      { name: 'Trach Sponges', description: 'Specialized sponges designed for tracheostomy care with high absorbency and patient comfort.', image: null },
      { name: 'Absorbent Cotton Products', description: 'Medical-grade cotton materials designed for cleaning, dressing, and absorbing fluids in clinical settings.', image: null },
    ],
    otherItems: [
      'Tissue Cassette Storage Cabinets', 'Histology Cassette Variants (Routine, Biopsy, Processing)',
      'Color-Frosted Microscope Slides', 'Silane-Coated Slides', 'Soda-Lime Glass Slides',
      'Borosilicate Cover Glass', 'Pipette Stands', 'Sterile Liquid Handling Plastics',
      'Different Volume Pipettes (1mL to 50mL)', 'Disposable Laboratory Plastics',
      'Sample Preparation Consumables', 'Homogenizer Accessories',
      'Grinding Beads (Glass, Ceramic, Steel)', 'Laboratory Textile Consumables',
      'Sterile Gauze Variants', 'Non-Sterile Gauze Products', 'X-Ray Detectable Gauze',
      'Sterilized Medical Textiles (Steam / Gamma)', 'Different Ply and Mesh Gauze Variants',
      'Bulk Medical Consumables Packaging',
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
