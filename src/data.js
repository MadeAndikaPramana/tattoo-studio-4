// Everything here is placeholder content for a demo template. Nothing is a
// real business: replace names, numbers, reviews and photos for a real client.
// Ratings, counts and claims are marked "sample" wherever they appear.

export const STUDIO = {
  name: 'Your Studio',
  location: 'Your City',
  address: '123 Example Street, Your City',
  hours: 'Open daily · 10:00 – 20:00',
  phone: '+00 000 000 000',
  instagram: '@yourstudio',
  // Deliberately no phone number: a demo must never open a chat with a real person.
  whatsapp: 'https://wa.me/',
}

export const NAV = [
  { label: 'Styles', href: '#styles' },
  { label: 'How we work', href: '#how' },
  { label: 'Stories', href: '#stories' },
  { label: 'Artists', href: '#artists' },
  { label: 'FAQ', href: '#faq' },
]

// Free-license Unsplash stock standing in for real work.
const D = (n) => `/images/demo-${n}.jpg`
export const MOSAIC_A = [D('blackgrey-sleeve'), D('figure-wrist'), D('vegvisir-forearm'), D('tiny-mountains')]
export const MOSAIC_B = [D('full-back'), D('traditional-sleeves'), D('wrist-script-leaf'), D('blackgrey-forearm')]
export const MOSAIC_C = [D('skull-sleeve'), D('blackgrey-forearm'), D('figure-wrist'), D('traditional-sleeves')]

export const WHY = [
  'Clear pricing and timing before you commit',
  'Clean, modern studio with high hygiene standards',
  'Artists who speak English and reply fast',
  'Quick turnaround for short stays',
]

export const STYLES = [
  { name: 'Fine line', img: D('figure-wrist'), gallery: [D('figure-wrist'), D('tiny-mountains'), D('wrist-script-leaf')], text: 'Delicate, precise linework. Small pieces, script and botanicals.' },
  { name: 'Black & grey', img: D('blackgrey-sleeve'), gallery: [D('blackgrey-sleeve'), D('blackgrey-forearm'), D('full-back')], text: 'Soft shading and depth, from portraits to full sleeves.' },
  { name: 'Traditional', img: D('traditional-sleeves'), gallery: [D('traditional-sleeves'), D('skull-sleeve')], text: 'Bold lines and classic imagery that age well.' },
  { name: 'Custom', img: D('vegvisir-forearm'), gallery: [D('vegvisir-forearm'), D('skull-sleeve'), D('full-back')], text: 'A one-off design drawn around your idea and your body.' },
  { name: 'Blackwork', img: D('skull-sleeve'), gallery: [D('skull-sleeve'), D('blackgrey-forearm')], text: 'Solid black, bold shapes and ornamental patterns.' },
  { name: 'Cover-ups', img: D('full-back'), gallery: [D('full-back'), D('blackgrey-sleeve')], text: 'Rework an old tattoo into something you are proud of.' },
]

export const TRUST = ['Clear pricing', 'Clean studio', 'Fast WhatsApp replies', 'English-speaking artists', 'Tourist-friendly', 'Custom designs']

export const STATS = [
  { value: 5, suffix: '+', label: 'Years open (sample)', icon: 'calendar' },
  { value: 4000, suffix: '+', label: 'Tattoos completed (sample)', icon: 'spark' },
  { value: 40, suffix: '+', label: 'Countries our clients come from (sample)', icon: 'globe' },
  { value: 1, suffix: 'h', label: 'Typical WhatsApp reply time (sample)', icon: 'clock' },
]

export const STEPS = [
  { title: 'Message us on WhatsApp', text: 'Share your idea or a reference. No perfect words needed.' },
  { title: 'Get clear details', text: 'Price range, timing and availability, before you commit.' },
  { title: 'Come in relaxed', text: 'We handle the rest, from stencil to aftercare.' },
]

export const STORIES = [
  { img: '/img/process-bw-artist.webp', title: 'The studio at work', text: 'Calm, focused sessions with one artist from start to finish.' },
  { img: '/img/process-blue-machine.webp', title: 'Clean lines', text: 'Every line is planned and checked before the needle moves.' },
  { img: '/img/process-colour-sleeve.webp', title: 'Big pieces, built session by session', text: 'Sleeves and backs are mapped out so the whole design flows.' },
  { img: '/img/artist-sketching.webp', title: 'Your idea, drawn with you', text: 'We sketch, adjust and only start when it feels right.' },
  { img: '/img/process-gloves-white.webp', title: 'Aftercare included', text: 'You leave with simple written instructions and our number.' },
]

export const REVIEWS = [
  { name: 'Guest A.', text: 'Best studio I have been to. Clear price up front, calm room, and a design I love.' },
  { name: 'Guest B.', text: 'Messaged on WhatsApp, got a reply in minutes and a slot the next day. Healed perfectly.' },
  { name: 'Guest C.', text: 'First tattoo and I was nervous. Patient, gentle and the whole team was lovely.' },
  { name: 'Guest D.', text: 'Turned my rough sketch into something better than I imagined.' },
  { name: 'Guest E.', text: 'Spotless studio and honest advice about size and placement. Will be back.' },
]

export const ARTISTS = [
  { name: 'Artist One', styles: 'Fine line · Script', langs: 'English · Bahasa' },
  { name: 'Artist Two', styles: 'Black & grey · Realism', langs: 'English' },
  { name: 'Artist Three', styles: 'Traditional · Colour', langs: 'English · Español' },
  { name: 'Artist Four', styles: 'Blackwork · Ornamental', langs: 'English · Bahasa' },
]

export const FAQ = [
  { q: 'Do you work with tourists on short stays?', a: 'Yes. Many of our clients are only here for a short time, so we plan sessions around your dates and explain healing before you travel on.' },
  { q: 'How much does a fine line tattoo cost?', a: 'Small fine line pieces start from a sample price of Rp 1.500.000, depending on size, detail and placement. You get a clear price by WhatsApp before you book.' },
  { q: 'How fast do you reply on WhatsApp?', a: 'Usually the same day, often within the hour during opening times. Tell us if your dates are tight.' },
  { q: 'Is the studio clean and safe?', a: 'Yes. Single-use needles and clean stations are standard, and we are happy to explain the process before you sit down.' },
  { q: 'Can I bring my own design?', a: 'Of course. Send it over and we will adjust size and placement so it works on skin.' },
]
