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
        image: '/images/general-consumables/respiratory-series/Simple Oxygen Mask.jpg',
        cataloguePdf: null,
        featured: [
          { name: 'Simple Oxygen Mask', description: 'Clear medical-grade oxygen mask with adjustable nose clip, anti-crush tubing and elastic strap. Supplied with a 2.1m oxygen tube; latex-free and DEHP-free versions available. Sizes XS–XL, packed in a PE bag.', image: '/images/general-consumables/respiratory-series/Simple Oxygen Mask.jpg' },
          { name: 'Nebulizer Mask', description: 'Clear medical-grade PVC nebulizer mask with adjustable nose clip, standard connector and 2.1m oxygen tube. Nebulizer jar available in 6cc or 15cc; latex-free and DEHP-free versions available. Sizes XS–XL, packed in a PE bag.', image: '/images/general-consumables/respiratory-series/Nebulizer Mask.avif' },
          { name: 'Nasal Oxygen Cannula', description: 'Medical-grade PVC nasal oxygen cannula available with soft, standard or flared tips, in green or transparent. Supplied with a 2.1m or 1.5m oxygen tube. Sizes XS–XL, packed in a PE bag.', image: '/images/general-consumables/respiratory-series/Nasal Oxygen Cannula.jpg' },
          { name: 'Oxygen Mask With Reservoir Bag', description: 'Medical-grade PVC non-rebreathing oxygen mask with reservoir bag (with or without check valve) for high-concentration oxygen delivery. Features an adjustable nose clip, anti-crush tube and elastic strap, with a 2m/2.1m oxygen tube; DEHP-free available. Reservoir volumes of 500ml, 750ml or 1000ml, for adult and children sizes.', image: '/images/general-consumables/respiratory-series/Oxygen Mask With Reservoir Bag.avif' },
          { name: 'Silicone Manual Resuscitator', description: 'Natural-colour silicone manual resuscitator, autoclavable to 134°C to help prevent cross-infection. Latex-free, medical-grade silicone construction with a built-in 60cm H2O pressure relief valve and an all-in-one intake valve for direct connection to an oxygen reservoir bag; guaranteed for 5 years or 20 autoclave cycles. Optional airway, mouth opener and custom labelling; built-in 30mm exhale port for PEEP, inlet valve or manometer. Adult, pediatric and infant sizes, packed in a PP box, PE bag or paper box.', image: '/images/general-consumables/respiratory-series/Silicone Manual Resuscitator.webp' },
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
          'Syringes, needles, infusion sets and IV accessories for injections, sampling and infusion therapy.',
        image: '/images/general-consumables/hypodermic-series/Disposable Syringe.webp',
        cataloguePdf: null,
        featured: [
          { name: 'Disposable Syringe', description: 'Medical-grade PVC syringe available in two-part and three-part constructions, with or without needle. Luer lock or luer slip tip, in sizes from 1ml up to 100ml (1, 2, 3, 5, 10, 20, 50, 60 and 100ml). Supplied in white, transparent, blue and other colours.', image: '/images/general-consumables/hypodermic-series/Disposable Syringe.webp' },
          { name: 'Tuberculin Syringe', description: 'Medical-grade PVC three-part tuberculin syringe (barrel, plunger and needle, or supplied without needle) in 0.5ml and 1ml sizes with a 40/100ul scale. Available in white, transparent, blue and other colours, individually packed in a PE polybag or blister pack.', image: '/images/general-consumables/hypodermic-series/Tuberculin Syringe.jpg' },
          { name: 'Insulin Syringe', description: 'Insulin syringe in 0.3ml, 0.5ml and 1ml sizes with a 40/100u scale. Medical PP barrel and plunger with a latex or latex-free piston, fitted with a 29G or 30G needle and a fixed or removable cap. Individually packed in a PE polybag or blister pack.', image: '/images/general-consumables/hypodermic-series/Insulin Syringe.jpg' },
          { name: 'Disposable Spinal Needle', description: 'Spinal needle available with a pencil point or Quincke tip in a 90mm length. Guide needle available on request.', image: '/images/general-consumables/hypodermic-series/Disposable Spinal Needle.jpg' },
          { name: 'Epidural Needle', description: 'Stainless steel epidural needle in sizes #12–#18 (18G–15G), lengths 65–150mm, with a transparent PP hub that is colour coded for size identification. Packed in an individual blister bag, 1000pcs per carton (42 x 27 x 52cm).', image: '/images/general-consumables/hypodermic-series/Epidural Needle.jpg' },
          { name: 'Scalp Vein Set', description: 'Scalp vein set available in single wing and double wing designs with luer lock or luer slip connection, including a variant for blood collection.', image: '/images/general-consumables/hypodermic-series/Scalp Vein Set.jpg' },
          { name: 'Tourniquet', description: 'Tourniquet with an ABS button and a terylene and elastic rubber belt, in adult (45 x 2.5cm) and children (38 x 2.5cm) sizes with a stretch length of 80–90cm. Available in blue, pink, yellow, purple, green, orange, red and other colours. Packed 1pc per PP bag, 50pcs per inner carton and 600pcs per carton (57 x 38 x 37cm).', image: '/images/general-consumables/hypodermic-series/Tourniquet.jpg' },
          { name: 'Disposable Infusion Pump', description: 'Single-use infusion pump for clinical analgesic therapy, used to relieve or ease pain. Driven by the tension of its silicone tube and current-limited through capillary pores, delivering a safe, effective and uniform drug flow.', image: '/images/general-consumables/hypodermic-series/Disposable Infusion Pump.avif' },
        ],
        otherItems: [
          'Disposable Needle', 'Disposable Safety Needle', 'Disposable Infusion Set',
          'Disposable Dark Infusion Set', 'Disposable Burette Infusion Set',
          'Disposable Blood Transfusion Set', 'Dental Needle', 'Dental Syringe',
          'TPE Tourniquet', 'Latex Tube', 'Three Way Stopcock', 'Heparin Cap',
          'Combi Stopper', 'Screw Cap', 'Extension Tube',
          'Extension Line With Positive Pressure Needle Free Connector',
        ],
      },
      {
        slug: 'medical-catheters',
        title: 'Medical Catheters',
        description:
          'Foley and urethral catheters, endotracheal and tracheostomy tubes, laryngeal masks, and suction, feeding and drainage tubes.',
        image: null,
        cataloguePdf: null,
        featured: [
          { name: '2-Way Latex Foley Catheter', description: 'Natural latex, silicone-coated Foley catheter with a plastic or rubber valve and colour coding for size identification. Fr6–Fr10 pediatric (270mm, 3cc/5cc balloon), Fr12–Fr22 standard (400mm, 5cc/10cc/30cc balloon) and Fr24–Fr26 standard (400mm, 10cc/30cc balloon). Packed in an individual blister bag, 10pcs per box and 500pcs per carton (52 x 43 x 47.5cm).', image: null },
          { name: '3-Way Latex Foley Catheter', description: 'Natural latex, silicone-coated three-way Foley catheter with a plastic or rubber valve, used for urine catheterisation, injection and irrigation. 400mm length in sizes Fr16–Fr26 with a 30cc balloon, packed in a blister bag.', image: null },
          { name: '2-Way All Silicone Foley Catheter', description: 'Medical-grade 100% silicone Foley catheter, available with or without an X-ray line. Fr6–Fr10 pediatric (310mm, 3cc/5cc balloon) and Fr12–Fr26 standard (400mm, 5cc/10cc/30cc balloon). Packed in an individual blister bag, 10pcs per box and 500pcs per carton (52 x 43 x 47.5cm).', image: null },
          { name: 'All Silicone Foley Catheter With Temperature Sensor', description: 'Medical-grade 100% silicone Foley catheter with an integrated bladder temperature sensor, available with or without an X-ray line. Measures 25°C–44°C to ±0.1°C and is compatible with most monitors; a temperature extension cable is available. 400mm length, balloon capacities of 3ml, 5ml, 10ml, 15ml and 30ml, colour-coded sizes Fr8–Fr24, packed in an individual blister bag. Do not pull the temperature measurement cord forcefully during use.', image: null },
          { name: 'Super Lubricating Foley Catheter', description: 'Natural latex Foley catheter with a hydrophilic coating for easy insertion and reduced irritation of the urethral mucous membrane. Available with a plastic or rubber valve, in red or yellow latex, sizes Fr12–Fr30, packed in a blister bag.', image: null },
          { name: 'T-Drainage Tube', description: 'Natural latex, silicone-coated T-tube for drainage following gallbladder surgery, with a connector section of larger diameter than the rest of the tube. Sizes Fr10–Fr26, packed in an individual blister bag.', image: null },
          { name: 'Oral / Nasal Endotracheal Tube With Cuff', description: 'Non-toxic PVC endotracheal tube, transparent, soft and smooth, with an X-ray opaque line running the length of the tube and an optional Murphy eye. Available with a high-volume low-pressure cuff or a standard low-pressure cuff for short-term intubation; DEHP-free available. Sizes 2.0mm–10.0mm, packed in an individual blister bag (rectangular or moon shape).', image: null },
          { name: 'Reinforced Endotracheal Tube', description: 'Reinforced oral or nasal endotracheal tube in non-toxic PVC, available with or without cuff and with an optional Murphy eye, with an X-ray opaque line throughout the tube. High-volume low-pressure and standard low-pressure cuffs available; DEHP-free available. Sizes 3.0mm–10.0mm, packed in an individual blister bag (rectangular or moon shape).', image: null },
          { name: 'Suction Plus Endotracheal Tube', description: 'Medical-grade PVC endotracheal tube with an evacuation lumen for subglottic suctioning, with a spiral wire embedded in the tube for effective resistance to kinking. High-volume low-pressure or low-profile cuff; DEHP-free available. Internal diameters of 6.0, 6.5, 7.0, 7.5, 8.0, 8.5 and 9.0mm, packed in an individual blister bag.', image: null },
          { name: 'Endotracheal Tube Holder', description: 'Holder designed for fast, secure fixation of an endotracheal tube after insertion, keeping the tube in place without taping the patient\'s face. Accommodates multiple ET tubes, includes a bite block that protects the teeth and gums while keeping the tube open, and allows in-use suctioning of the oropharynx. Sizes 6mm–13mm, packed in a hard blister bag.', image: null },
        ],
        otherItems: [
          '2-Way Female Foley Catheter', '2-Way Tiemann Foley Catheter', 'Urethral Catheter',
          'Malecot Catheter', 'Penrose Drainage Tube', '3-Way All Silicone Foley Catheter',
          'Silicone Condom Catheter', 'Latex Condom Catheter',
          'Oral / Nasal Endotracheal Tube Without Cuff',
          'Nasal Preformed Tracheal Tube (With / Without Cuff)',
          'Oral Preformed Tracheal Tube (With / Without Cuff)',
          'Reinforced Suction Plus Endotracheal Tube',
          'Tracheostomy Tube (With / Without Cuff)', 'Endotracheal Tube Introducer (Bougie)',
          'Intubating Stylet', 'Belt For ET Tube', 'Nasopharyngeal Airway', 'Guedel Airway',
          'Guedel Airway (Berman Type)', 'Disposable Silicone Laryngeal Mask',
          'Disposable PVC Laryngeal Mask', 'Disposable Reinforced PVC Laryngeal Mask',
          'Reusable Silicone Laryngeal Mask', 'Reinforced Silicone Laryngeal Mask',
          'Multi-function Laryngeal Mask', 'Suction Catheter', 'Suction Catheter Kit',
          'Closed Suction Catheter', 'Extractor Mucus', 'PVC Stomach Tube',
          '100% Silicone Stomach Tube', 'Feeding Tube', 'Ryle\'s Tube', 'Duodenal Tube',
          'Rectal Tube', 'Nelaton Catheter', 'Umbilical Catheter', 'Silicone Thoracic Tube',
          'Thoracic Drainage Catheter', 'Yankauer Suction Connecting Tube',
        ],
      },
      {
        slug: 'urine-bag',
        title: 'Urine Bag',
        description:
          'Urine drainage and collection bags, leg bags and ICU urine meters for catheter care.',
        image: null,
        cataloguePdf: null,
        featured: [],
        otherItems: [
          'Economic Urine Bag', 'Urine Bag With Pull-Push Valve',
          'Luxury Urine Bag With Pull-Push Valve', 'Urine Bag With Screw Valve',
          'Luxury Urine Bag With Screw Valve', 'Urine Bag With T Valve',
          'Luxury Urine Bag With T Valve', 'Sterile Oval-Shaped Luxury Urine Bag',
          'Sterile Pear-Shaped Luxury Urine Bag', 'Sterile Apple-Shaped Luxury Urine Bag',
          'Sterile Square-Shaped Luxury Urine Bag', 'Urine Meter (ICU)',
          'Disposable Pediatric Urine Bag', 'Urine Leg Bag', 'Sterile Gravity Feeding Bag',
        ],
      },
      {
        slug: 'cotton-series',
        title: 'Cotton Series',
        description:
          'Gauze swabs and rolls, sponges, O.R. towels and absorbent cotton products for wound care and surgical use.',
        image: null,
        cataloguePdf: null,
        featured: [
          { name: 'Sterile Gauze Swabs', description: 'Machine-folded 100% cotton swabs, soft and adherent, with superior absorbency for blood and exudate. Sizes 2x2", 3x3", 4x4", 6x6" and 8x4"; 8, 12, 16 and 24 ply; folded or unfolded, with or without X-ray thread. Mesh options 40s / 12x8, 19x10, 19x15, 24x20, 26x18 and 30x20. Packed 1, 2, 5 or 10pcs per sterile pack.', image: null },
          { name: 'Gauze Roll', description: '100% cotton gauze roll, degreased and bleached to ensure superior purity and absorbency, with no fluorescence. Sizes 36"x100Y, 36"x100m, 90cm x 500m, 90cm x 1000m, 120cm x 500m and 120cm x 1000m; 2, 4, 8, 12 and 16 ply. Mesh options 40s / 12x8, 19x10, 19x15, 24x20, 26x18 and 30x20, with or without X-ray thread.', image: null },
          { name: 'O.R. Towel', description: 'Disposable operating room towel in absorbent cotton fibre, pre-washed for a virtually lint-free product and fan folded for easy handling. Available in blue, white and green, with custom colour-coding on request, and supplied pre-sterilised by steam or gamma, or non-sterile. Sizes 17"x26", 18"x33" and others.', image: null },
          { name: 'Lap Sponge', description: 'Laparotomy sponge for absorbing blood and exudate and cleaning wounds in the operating room, helping protect the wound from contamination. Sizes 30x30cm, 45x45cm, 10x45cm, 4"x18", 12x12" and 18x18"; 2, 4, 8, 12 and 16 ply. Available with a blue loop, iron or plastic ring and X-ray thread. Steam or gamma sterilised, in paper blister packing.', image: null },
          { name: 'Non-Woven Swabs', description: 'Non-woven swabs made from a 70% polyethylene and 30% terylene blend, designed to wick fluids away and disperse them evenly. Sizes 2"x2", 3"x3", 4"x4" and 6"x6"; 2 and 4 ply; weights of 20–40g/㎡. Packed 100pcs per bag, non-sterile.', image: null },
          { name: 'Paraffin Gauze', description: 'Sterile cotton and vaseline paraffin gauze for treating burns, ulcers, skin loss wounds, abrasions, skin grafts and a range of traumatic injuries. Sizes 7.5x10cm, 10x10cm and 10x40cm, packed 1pc per pouch, 10 pouches per box.', image: null },
          { name: 'Absorbent Cotton Roll', description: '100% cotton roll, degreased and bleached, suitable for beauty use, wound cleaning, alcohol sterilisation and cleaning medical instruments. Available in 50g, 100g, 200g, 450g, 500g and 1000g weights.', image: null },
          { name: 'Cotton Ball', description: 'Cotton ball made from 100% natural cotton that has been cleaned, purified and bleached, used for wound cleaning. Weights of 0.3g, 0.5g, 1.0g, 2.0g, 3.0g, 4.0g and 5.0g, supplied sterile or non-sterile in sealed poly bag packing.', image: null },
          { name: 'Cotton Swabs', description: 'Single-tipped cotton swab for medical use, with a PP or PS stick that can be broken off. Stick diameter 2.5–4.0mm and length 75–400mm; cotton tip diameter 4–15mm and length 15–50mm.', image: null },
        ],
        otherItems: [
          'Non-Sterile Gauze Swabs', 'Trach Sponges', 'Zig-Zag Cotton With Break',
          'Gauze Ball', 'Dental Cotton Roll',
        ],
      },
      {
        slug: 'surgery-examination',
        title: 'Surgery Examination',
        description:
          'Examination and surgical gloves, blades and scalpels, lancets, specula and single-use examination accessories.',
        image: null,
        cataloguePdf: null,
        featured: [
          { name: 'Nitrile Examination Gloves', description: 'Powder-free nitrile examination glove weighing 3–5g, in sizes S, M, L, XL and XXL. Packed 100pcs per box, non-sterile.', image: null },
          { name: 'Latex Examination Gloves', description: 'Latex examination glove weighing 4.5–6g, available powdered or powder-free, in sizes S, M, L, XL and XXL. Packed 100pcs per box, non-sterile.', image: null },
          { name: 'Surgical Gloves', description: 'Sterile natural latex surgical glove, available powdered or powder-free, in sizes 6, 6.5, 7, 7.5, 8, 8.5 and 9. Packed 1 pair per bag, 50 bags per box.', image: null },
          { name: 'Disposable Surgical Blade', description: 'Carbon steel or stainless steel surgical blade, gamma sterilised, in sizes 10#, 10A#, 11#, 12#, 15#, 20#, 21#, 22#, 23# and 24#. Packed 1pc per aluminium foil bag, 100 or 200pcs per box, 5000pcs per carton.', image: null },
          { name: 'Disposable Scalpel', description: 'Gamma-sterilised single-use scalpel with a carbon steel or stainless steel blade and a plastic handle, in sizes 10#–36#. Packed 1pc per aluminium foil bag, 10 bags per box, 500pcs per carton.', image: null },
          { name: 'Blood Lancet', description: 'Gamma-sterilised stainless steel blood lancet measuring 40mm x 5.5mm. Packed 1pc per individual wrapper, 200pcs per box, 100 boxes per carton.', image: null },
          { name: 'Vaginal Speculum', description: 'Single-use sterile vaginal speculum with smooth, rounded ends for patient comfort and a transparent finish for excellent visibility and examination accuracy. Available in side screw, middle screw, French and American types, in sizes XS, S, M and L, individually packed.', image: null },
          { name: 'Wooden Tongue Depressor', description: 'Wooden tongue depressor in adult (150 x 18 x 1.6mm) and child (140 x 14 x 1.6mm) sizes. Sterile version supplied in a single medical paper wrapper, 1pc per bag and 100 bags per box; non-sterile packed 100pcs per box.', image: null },
          { name: 'Cervical Scraper', description: 'Wooden cervical spatula for conventional smears, including scraping and collection of cervical cells. Available with a round tip or a tongue-shaped tip, sized 180 x 18 x 1.6mm, non-sterilised or sterilised by ethylene oxide. Single-faced transparent and double-faced paper packing available.', image: null },
          { name: 'Umbilical Cord Clamp', description: 'Sterile PP or ABS umbilical cord clamp for use during childbirth. 5cm size, available with or without a cutter, in customisable colours. Packed 1pc per bag.', image: null },
        ],
        otherItems: [
          'Vinyl Gloves', 'PE Gloves', 'Stitch Cutter Blade', 'Skin Graft Blade',
          'Safety Surgical Scalpel', 'Stainless Surgical Blade',
          'Plastic Handle Lancet (Twist Top)', 'Safety Lancet', 'Lancet Device',
          'Disposable Medical Razor (Single-Sided Blade)',
          'Disposable Medical Razor (Double-Sided Blade)', 'Ear Probe Cover',
          'Surgical Brush', 'Cervical Brush', 'ID Bracelet',
        ],
      },
      {
        slug: 'wound-care',
        title: 'Wound Care',
        description:
          'Bandages, surgical tapes, plasters and skin preps, and advanced dressings for everyday and specialist wound management.',
        image: null,
        cataloguePdf: null,
        featured: [
          { name: 'Gauze Bandage', description: 'Bandage roll made from 100% cotton yarn, degreased and bleached under high temperature and pressure for superior absorbency. Sizes 2"–6" x 6Y and 2"–6" x 10m, wrapped in white paper per roll and blue kraft per dozen (12 rolls).', image: null },
          { name: 'High Elastic Bandage', description: 'High elastic bandage in cotton, polyester and rubber string, in bleached or natural colour, weighing 70–105g/㎡. Widths of 2", 3", 4", 5" and 6" and lengths of 4m, 4.5m, 5m and 6m, sterile or non-sterile. Packed 1 roll per poly bag, 12 rolls per bag.', image: null },
          { name: 'Plaster of Paris Bandage', description: 'White cotton bandage impregnated with plaster, weighing 390–410g/㎡. Widths of 2", 3", 4", 5" and 6" and lengths of 2.7m, 3m, 4m, 4.5m, 5m and 6m, sterile or non-sterile. Packed 1 roll per poly bag, 12 rolls per bag.', image: null },
          { name: 'Zinc Oxide Tape', description: 'Zinc oxide adhesive tape with hot-melt or acrylic glue, in white or skin colour. Sizes 1.25cm, 2.5cm, 5cm, 7.5cm and 10cm x 5m, supplied in a plastic can, with a plastic cutter or in simple packing.', image: null },
          { name: 'Wound Adhesive Plaster', description: 'Adhesive wound plaster with a cotton pad, available with or without medication, in cotton, PE, PU, PVC, mesh, cartoon-print and spunlace backings. Sizes include Φ22mm, Φ25mm, 40x10mm, 38x38mm, 60x19mm, 72x19mm, 76x19mm, 76x38mm and 14x50mm. Packed 50 or 100pcs per box, 100 boxes per carton.', image: null },
          { name: 'Non-Woven Wound Dressing', description: 'Sterile non-woven dressing with a highly absorbent non-adhesive pad that causes no allergic or mechanical irritation and can be removed without pain. Sizes 6x7cm, 6x8cm, 6x9cm, 10x10cm, 10x15cm, 10x20cm, 10x25cm and 10x30cm, with or without a waterproof backing, using hot-melt or acrylic glue. Individually packed.', image: null },
          { name: 'Transparent Film Dressing', description: 'Sterile polyurethane film dressing that is soft, waterproof and breathable, with a highly absorbent non-adhesive pad. Available with right-angle or rounded corners, in sizes 6x7cm, 6x8cm, 6x9cm, 10x10cm, 10x15cm, 10x20cm, 10x25cm and 10x30cm, using hot-melt or acrylic glue. Individually packed.', image: null },
          { name: 'Hydrocolloid Dressing', description: 'Sterile hydrocolloid dressing in which the CMC converts to a gel on contact with wound exudate to accelerate healing. Semi-transparent for easy observation of the wound healing process, available in bordered and thin versions, in sizes 5x5cm, 10x10cm, 15x15cm, 20x20cm, 25x25cm and 10x30cm. Individually packed.', image: null },
          { name: 'Silicone Foam Dressing', description: 'Sterile silicone foam dressing with strong absorption capacity that draws wound exudate vertically to reduce the risk of maceration around the wound. Gentle on the skin and painless to remove, leaving no residue and without damaging new epithelial cells. Available bordered or unbordered, in sizes 5x5cm, 10x10cm, 15x15cm, 20x20cm, 25x25cm and 10x30cm. Individually packed.', image: null },
          { name: 'Alginate Dressing With Silver', description: 'Sterile calcium alginate dressing with an ionic silver complex that releases silver ions in the presence of wound exudate. As exudate is absorbed the dressing forms a soft, cohesive gel that conforms closely to the wound surface, maintaining an optimal moist wound-healing environment. Sizes 5x5cm, 10x10cm, 15x15cm, 20x20cm, 25x25cm, 2x30cm and 2x40cm. Individually packed.', image: null },
        ],
        otherItems: [
          'Non-Woven Self-Adhesive Bandage', 'Cotton Self-Adhesive Bandage',
          'Elastic Crepe Bandage', 'Elastic Plain Bandage', 'PBT Bandage', 'Cotton Bandage',
          'Tubular Net Bandage', 'Fiberglass Bandage', 'Triangular Bandage', 'Tubular Bandage',
          'Undercasting Bandage', 'Adhesive Sport Tape', 'Non-Woven Surgical Tape',
          'PE Surgical Tape', 'Silk Tape', 'Capsicum Plaster', 'Alcohol Prep Pad',
          'Povidone-Iodine Prep Pad', 'Sting Relief', 'Povidone-Iodine Swabstick',
          'Alcohol Swabstick', 'Wet Wipes', 'I.V. Dressing', 'Hydrocolloid Blister Plaster',
          'Hydrocolloid Acne Plaster', 'Silicone Scar Sheet', 'Foam Dressing',
          'Alginate Dressing', 'Wound Skin Closure', 'Non-Woven Dressing Roll',
          'PU Film Dressing Roll',
        ],
      },
      {
        slug: 'dressing-set',
        title: 'Dressing Set',
        description:
          'Pre-assembled procedure and dressing packs, surgical drapes and dental bibs.',
        image: null,
        cataloguePdf: null,
        featured: [
          { name: 'Dressing Pack', description: 'Pre-assembled dressing pack available in several configurations. A typical pack contains a medical wrapping cloth, latex gloves, gauze sponges in 7x8cm and 10x12cm (including 4-ply), 0.5g cotton balls, medical iodine cotton balls, plastic forceps and a square tray. Other configurations substitute gauze swabs, non-woven swabs, cotton tips, a waterproof drape, surgical drape, hand towel, limpet bag or plastic tray. Contact us for the contents list of each pack.', image: null },
          { name: 'Tracheostomy Dressing Pack', description: 'Pre-assembled tracheostomy dressing pack containing a waterproof drape, 10 non-woven 4-ply swabs (7.5x7.5cm), 3 pipe cleaners, 2 plastic forceps, a plastic tray and an adhesive disposable yellow bag (21x32cm with a 10cm tie).', image: null },
          { name: 'Dental Dressing Pack', description: 'Pre-assembled dental dressing pack containing a dental tweezer, curved needle, mirror and tray, 2 cotton balls, and a dental bib with tie or a waterproof drape.', image: null },
          { name: 'Fenestrated Drape', description: 'Sterile fenestrated drape in non-woven fabric with a PE film and a pre-cut hole, waterproof on one side and absorbent on the other, for general medical and operating room use. Sizes 40x60cm, 50x75cm, 75x75cm, 75x90cm, 100x150cm, 110x190cm and 150x200cm, individually packed.', image: null },
          { name: 'Surgical Drape', description: 'Sterile blue surgical drape in non-woven PP/SMS with PE film, or paper with PE film. Sizes 40x60cm, 50x75cm, 75x75cm, 75x90cm, 100x150cm, 110x190cm and 150x200cm, individually packed.', image: null },
          { name: 'Dental Bib', description: 'Dental bib made from wood pulp paper with a PE film backing, available in blue, yellow, white and other colours. Sizes 33x46cm, 33x66cm and 40x45cm, sterile or non-sterile. Packed 125pcs per PE bag, 4 bags per carton.', image: null },
        ],
        otherItems: [
          'C-Section Pack', 'Delivery Pack', 'ENT Surgical Pack',
          'Knee Arthroscopy Surgical Pack', 'Universal Surgical Pack',
          'Surgical Urology Hole Pack', 'Surgical Cystoscopy Pack',
          'Surgical Radial Angiography Pack', 'Surgical Dental Implant Pack',
          'Surgical Fenestrated Pack', 'Surgical Spinal Pack', 'Surgical Hip Pack',
          'Surgical Ophthalmology Pack',
        ],
      },
      {
        slug: 'first-aid-products',
        title: 'First Aid Products',
        description:
          'First aid boxes and kits, supplied with customisable contents, sizing and branding.',
        image: '/images/general-consumables/first-aid-products/First Aid Box.jpg',
        cataloguePdf: null,
        featured: [
          { name: 'First Aid Box', description: 'First aid box supplied in a 12" aluminium alloy case (30.5 x 17 x 19cm). Contents include a thermometer, bandage scissors, plastic tweezers, cotton wool balls and iodine cotton tip applicators, sterile gauze swabs, PBT elastic bandages, a burn dressing, medical tape, a buckle tourniquet, a dust mask, alcohol prep pads, antiseptic cleansing wipes, adhesive bandages in plain, knuckle, fingertip and elbow/knee shapes, a triangular bandage, safety pins, a CPR face shield with one-way valve, sterile latex gloves, first aid burn cream, an instant cold pack and a first aid instruction sheet. Size, colour and logo can be customised — embossing, debossing, rubber patch, screen printing, hot stamping, zipper puller, woven or wash label. Full contents list with sizes and quantities available on request.', image: '/images/general-consumables/first-aid-products/First Aid Box.jpg' },
          { name: 'First Aid Kit (Standard)', description: 'First aid kit containing gauze pads, adhesive bandages, cotton swabs, scissors, tweezers, a triangular bandage, alcohol prep pads, povidone-iodine prep pads, a PBT elastic bandage, a tourniquet, safety pins, medical tape and a first aid manual. Full contents list with sizes and quantities available on request.', image: null },
          { name: 'First Aid Kit (Custom Build)', description: 'First aid kit built to requirement, with customisable size and colour. Logo can be applied by embossing, debossing, rubber patch, screen printing, hot stamping, zipper puller, woven label or wash label, with a variety of logo treatments available. Contents list available on request.', image: null },
        ],
        otherItems: [],
      },
      {
        slug: 'hospital-uniform',
        title: 'Hospital Uniform',
        description:
          'Face masks and shields, caps and gowns, shoe covers, protective wear and disposable bed linen for clinical staff and patients.',
        image: null,
        cataloguePdf: null,
        featured: [
          { name: 'Medical Face Mask', description: 'Three-ply medical face mask in non-woven and meltblown fabric (20g/m² + 25g/m² + 20g/m²), available in earloop or tie type, with dust and powder filtration efficiency over 98%. Size 17.5 x 9.5cm, in white, black, green, blue and other colours. Packed 50pcs per bag with 1 bag per box, or 1pc per bag with 50 bags per box; non-sterile, with sterile available on the tie type.', image: null },
          { name: 'N95 Mask', description: 'Four-ply N95 mask with dust and powder filtration efficiency over 99%: a 38g/m² PP spunbond outer layer, two 20g/m² N95-grade meltblown high filtration layers and a 250g/m² needle-punched non-woven inner layer. Size 14 x 12.5cm in white, available with or without a valve. Packed 10 or 20pcs per box, sterile or non-sterile.', image: null },
          { name: 'KN95 Mask', description: 'Five-ply KN95 mask in non-woven fabric, meltblown fabric and hot air cotton (50 + 25 + 25 + 35 + 25g/m²), with dust and powder filtration efficiency over 98%. Size 17 x 11cm, in white, black, green, blue and other colours, available with or without a valve. Packed 10 or 20pcs per box, sterile or non-sterile.', image: null },
          { name: 'Face Shield', description: 'PET and sponge face shield with a double-sided anti-fog coating and an elastic band. Size 32 x 22cm, 0.3mm thick, transparent. Packed 1pc per bag, non-sterile.', image: null },
          { name: 'Surgical Gown', description: 'Non-woven SMS surgical gown with a neck block and four waist belts, in standard or reinforced type with a fabric or elastic cuff. Sizes S to XXL, weights 30–60g/㎡, in white, black, green, blue and other colours. Available with ultrasonic wireless heat-sealed or machine-sewn seams. Packed 1pc per bag, sterile or non-sterile.', image: null },
          { name: 'Isolation Gown', description: 'Non-woven PP, SMS or PP+PE isolation gown with full sleeves and ties at the back of the neck and waist, with an elastic or fabric cuff and an optional waterproof finish. Sizes S to XXL, weights 16–60g/㎡, in white, black, green, blue and other colours. Packed 10pcs per bag, sterile or non-sterile.', image: null },
          { name: 'Lab Coat', description: 'Lab coat in PP, SMS, polyester or cotton for hospital and laboratory use, with full or half sleeves. Sizes S to XXL, weights 16–60g/㎡, in white, blue and other colours. Packed 1 or 10pcs per bag, non-sterile.', image: null },
          { name: 'Non-Woven Shoe Cover', description: 'Non-woven PP or SMS shoe cover with a comfortable elastic opening, in standard or anti-skid type. Sizes 36x15cm, 41x15cm and 40x16cm, weights 20–50g/㎡, thicknesses of 0.02, 0.025, 0.028 and 0.035mm to order, in blue or green. Packed 100pcs per poly bag, 5000pcs per carton.', image: null },
          { name: 'Non-Woven Bed Sheet', description: 'Disposable bed sheet in PP, PP+PE or SMS for hospital and laboratory use. Sizes 90x190cm, 100x200cm, 120x200cm and 140x240cm, weights 20–60g/㎡, in white, black, green, blue and other colours. Packed 10pcs per bag, non-sterile.', image: null },
          { name: 'Diaper', description: 'Disposable diaper in non-woven fabric, PE film and fluff pulp for hospital and home use, with 3g, 5g or 8g SAP. Child sizes 390x280mm (S), 450x320mm (M) and 490x320mm (L); adult sizes 800x650mm (M), 900x750mm (L) and 960x800mm (XL). White, packed 10pcs per bag, non-sterile.', image: null },
        ],
        otherItems: [
          'Face Mask With Shield', 'Nurse Clip Cap', 'Round Nurse Cap', 'Doctor Cap',
          'Surgical Hood', 'Beard Cover', 'Overall Gown', 'CPE Gown',
          'Disposable Scrub Coat', 'PE Apron', 'PE Shoe Cover', 'CPE Shoe Cover',
          'Non-Woven Pillow Cover', 'PE Sleeve', 'Underpad',
        ],
      },
      {
        slug: 'plastic-container',
        title: 'Plastic Container',
        description:
          'Sharps containers, specimen and urine containers, medicine cups, pill boxes, bed pans and urinals.',
        image: null,
        cataloguePdf: null,
        featured: [
          { name: 'Sharps Container', description: 'Rigid sharps container for the safe disposal of needles, blades and other sharps waste. Available in twenty capacities from 0.3L to 23L — 0.3, 0.7, 0.8, 1, 1.5, 2, 2.7, 2.8, 3, 3.6, 4, 4.6, 5, 6, 6.2, 7, 8, 10, 15 and 23L — with more than one body style offered at the 1L, 2L, 4.6L and 6L sizes.', image: null },
          { name: 'Paper Sharps Container', description: 'Paper-bodied sharps container available in 3L, 5L, 7L, 10L and 15L capacities.', image: null },
          { name: 'Medicine Cup', description: '30ml medicine cup available in 1g, 1.4g and 1.8g weights. Packed 100pcs per bag.', image: null },
          { name: 'Pill Box', description: 'PP pill box available with 2, 4, 7 or 28 compartments, with two different 7-compartment designs.', image: null },
          { name: 'Urine Container', description: 'PP or PS urine container in 20ml, 30ml, 40ml, 60ml, 100ml and 120ml capacities. Individually packed, sterile or non-sterile.', image: null },
          { name: 'Stool Container', description: 'PP or PS stool container supplied with a spoon, in 5ml, 10ml, 20ml, 30ml, 40ml, 60ml, 100ml and 120ml capacities. Individually packed, sterile or non-sterile.', image: null },
          { name: 'Urine Cup', description: 'PP urine cup in 10ml, 15ml, 30ml, 40ml and 50ml capacities.', image: null },
          { name: 'Urinal', description: 'PE urinal in 750ml and 1000ml capacities, in male and female types. Packed 1pc per bag, non-sterile.', image: null },
          { name: 'Kidney Pan', description: 'PP or PE kidney pan in 500ml, 750ml and 1000ml capacities, in yellow, blue, white and other colours. Packed 50pcs per bag, non-sterile.', image: null },
          { name: 'Bed Pan', description: 'PP or PE bed pan with a 3000ml capacity, measuring 34 x 26 x 9cm, in yellow, blue, white and other colours. Packed 1pc per bag, non-sterile.', image: null },
        ],
        otherItems: [
          'Pill Crusher', 'Bed Pan With Handle',
        ],
      },
      {
        slug: 'home-care',
        title: 'Home Care',
        description:
          'Thermometers, blood pressure monitors, hot and cold therapy packs and mobility aids for home-based care.',
        image: null,
        cataloguePdf: null,
        featured: [
          { name: 'Digital Thermometer', description: 'Digital clinical thermometer with an LCD display, available with a soft or hard tip and with or without a waterproof body. Measures 32°C–42°C (89.6°F–107.6°F) to ±0.1°C, with a 10-second or 60-second response time. Colour can be customised; individually packed.', image: null },
          { name: 'Forehead Infrared Thermometer', description: 'Non-contact forehead infrared thermometer with an LCD display, measuring 32°C–42°C (89.6°F–107.6°F) to ±0.1°C with a 0.5-second response time. Available in a compact body or a 96 x 43 x 149mm body; colour can be customised. Individually packed.', image: null },
          { name: 'Ear Infrared Thermometer', description: 'Ear infrared thermometer with an LCD display, measuring 32°C–42°C (89.6°F–107.6°F) to ±0.1°C with a 0.5-second response time. Body size 96 x 43 x 149mm; colour can be customised. Individually packed.', image: null },
          { name: 'Digital Blood Pressure Monitor', description: 'Automatic digital blood pressure monitor with a large, clear 50 x 58mm (2.9 inch) LCD display and one-touch operation. Includes a WHO classification indicator, irregular heartbeat detection, 2 x 120 reading memory, date and time display and automatic shut-off. Mains adaptor available as an option.', image: null },
          { name: 'Aneroid Manual Sphygmomanometer', description: 'Aneroid manual sphygmomanometer supplied as a set comprising the arm bag, gasbag, hose, thimble and gauge, in blue, black and other colours. Packed 1 set per zipper bag, 1 bag per box. Logo printing available on the packaging, stethoscope and arm bag.', image: null },
          { name: 'Hot / Cold Pack', description: 'Reusable hot and cold therapy pack available in three sizes: 23 x 13cm (200g or 250g), 38 x 14cm (500g) and 11 x 11cm (80g).', image: null },
          { name: 'Ice Bag', description: 'Waterproof ice bag for the relief of pain and swelling, in 6", 9" and 11" sizes. Available in a single colour or mixed colours.', image: null },
          { name: 'Instant Ice Bag', description: 'Single-use instant ice bag measuring 24 x 12cm and weighing 280g.', image: null },
        ],
        otherItems: [
          'Wheel Chair',
        ],
      },
      {
        slug: 'sterilization-packing',
        title: 'Sterilization Packing',
        description:
          'Sterilization pouches and reels and autoclave indicator tape for packing and processing medical instruments.',
        image: null,
        cataloguePdf: null,
        featured: [
          { name: 'Sterilization Pouch', description: 'Sterilization pouch available in self-sealing or heat-sealing type, as a flat or gusseted pouch.', image: null },
          { name: 'Sterilization Reel', description: 'Sterilization reel available in self-sealing or heat-sealing type, as a flat or gusseted reel.', image: null },
          { name: 'Autoclave Indicator Tape', description: 'Indicator tape used to show the result of sterilization on packaging such as sterilization wrappers and paper bags. Indicates at 20 minutes at 120°C or 5 minutes at 134°C. Sizes 12mm, 19mm and 25mm x 50m, packed 1 roll per PE bag.', image: null },
        ],
        otherItems: [],
      },
      {
        slug: 'others',
        title: 'Others',
        description:
          'Additional general consumables not covered by the categories above.',
        image: null,
        cataloguePdf: null,
        featured: [
          { name: 'Ampoule Bottles', description: 'Neutral borosilicate glass ampoule for liquid medicine, in capacities from 1ml to 40ml. Available transparent or dark brown, with customisable logo printing.', image: null },
          { name: 'Saliva Ejector', description: 'Soft, pliable saliva ejector that contours to each patient\'s mouth and holds its shape. PVC tube with chrome-plated copper interior wiring, sized 150 x 6.5mm. Packed 100pcs per bag, 20 bags per carton.', image: null },
        ],
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
      { name: 'PNEUMOSAC® Safety Isolation Bag', description: 'A single-use sterile in-bag morcellation device designed for safe tissue containment during laparoscopic procedures. Features a non-twist design and multiple channels for enhanced usability.', image: '/images/medical-surgery/Safety Isolation Bag.png' },
      { name: 'Tissue Retrieval Endo Bags', description: 'Disposable endoscopic bags available in multiple capacities for safe retrieval of tissue specimens during minimally invasive surgeries.', image: '/images/medical-surgery/Tissue Retrieval Endo Bags.jpg' },
      { name: 'LIMAS Morcellator System', description: 'A laparoscopic morcellation system designed for efficient tissue extraction, used in combination with safety isolation bags for controlled procedures.', image: '/images/medical-surgery/LIMAS Morcellator System.jpg' },
      { name: 'Motor Drive Unit (LMD01)', description: 'Core power unit of the morcellator system that drives the cutting mechanism, ensuring consistent performance during surgical procedures.', image: '/images/medical-surgery/Motor Drive Unit.jpg' },
      { name: 'Reusable Handle (LMH05)', description: 'Ergonomically designed reusable handle providing control and precision during morcellation procedures.', image: '/images/medical-surgery/Reusable Handle.png' },
      { name: 'Foot Switch (LMD03)', description: 'Foot-operated control switch allowing surgeons to manage device operation hands-free during procedures.', image: '/images/medical-surgery/Foot Switch.jpg' },
      { name: 'Rotor Cable (LMC04)', description: 'High-performance cable connecting the motor unit to the cutting system, ensuring reliable power transmission.', image: '/images/medical-surgery/Rotor Cable.jpg' },
      { name: 'Power Cord (LMD02)', description: 'Standard power connection cable designed for safe and stable electrical supply to the motor drive unit.', image: '/images/medical-surgery/Power Cord.webp' },
      { name: 'Cutter Tubes', description: 'Precision-engineered cutting tubes available in multiple diameters for efficient tissue morcellation in laparoscopic surgeries.', image: '/images/medical-surgery/Cutter Tubes.jpg' },
      { name: 'Washers', description: 'Supporting components designed for use with cutter tubes to ensure secure fitting and optimal device performance.', image: '/images/medical-surgery/Washers.jpg' },
      { name: 'Handle Head Cap', description: 'Protective and functional component used in the morcellator handle assembly for secure operation.', image: '/images/medical-surgery/Handle Head Cap.jpg' },
      { name: 'Morcellation Bags (Multi-Capacity)', description: 'Sterile bags available in various capacities for safe containment and extraction of tissue during surgical procedures.', image: '/images/medical-surgery/Morcellation Bags.jpg' },
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
