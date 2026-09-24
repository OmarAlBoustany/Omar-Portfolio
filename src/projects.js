const portfolioPath = path => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const projectData = [
  {
    slug: 'argentum', title: 'ARGENTUM', category: 'Jewelry e-commerce', cover: '/argentum.png',
    tags: ['UI/UX', 'E-commerce'],
    description: 'A jewelry shopping experience with a strong visual focus. I designed the interface and purchasing journey for this freelance project.',
    screens: [
      { title: 'Home page', image: '/argentum.png' },
      { title: 'Shop and product listing', image: '/projects/argentum-shop.webp' },
      { title: 'Product details', image: '/projects/argentum-product.webp' }
    ]
  },
  {
    slug: 'acura', title: 'ACURA', category: 'Professional association portal', cover: '/projects/acura-home.webp',
    tags: ['UI/UX', 'Portal'],
    description: 'Selected interface screens from a professional association portal.',
    screens: [
      { title: 'Home page', image: '/projects/acura-home.webp' },
      { title: 'Publications', image: '/projects/acura-publications.webp' },
      { title: 'Events and news', image: '/projects/acura-events.webp' }
    ]
  },
  {
    slug: 'empower-her', title: 'EMPOWER HER', category: 'Website and dashboard', cover: '/projects/empower-home.webp',
    tags: ['UI/UX', 'Web'],
    description: 'A website concept with public-facing pages and an administration dashboard.',
    screens: [
      { title: 'Landing page', image: '/projects/empower-home.webp' },
      { title: 'Dashboard', image: '/projects/empower-dashboard.webp' },
      { title: 'Sign-in concept', image: '/empower-her.png' }
    ]
  },
  {
    slug: 'proswim', title: 'PROSWIM', category: 'Swimming gear shop', cover: '/projects/swimming-home.webp',
    tags: ['UI/UX', 'E-commerce'],
    description: 'An online shop for swimming equipment, designed during my time at Innovation Alchemy. The work covered the landing page, shop, product details, cart, and supporting pages.',
    screens: [
      { title: 'Home page', image: '/projects/swimming-home.webp' },
      { title: 'Swimmers', image: '/projects/swimming-athletes.webp' },
      { title: 'Login page', image: '/swimming.png' }
    ]
  },
  {
    slug: 'aurum-elixir', title: 'AURUM ELIXIR', category: 'Wellness product platform', cover: '/projects/aurum-home.webp',
    tags: ['UI/UX', 'E-commerce'],
    description: 'A wellness product platform with shopping, product information, and account screens.',
    screens: [
      { title: 'Home page', image: '/projects/aurum-home.webp' },
      { title: 'Product details', image: '/projects/aurum-product.webp' },
      { title: 'Login page', image: '/projects/aurum-login.webp' }
    ]
  },
  {
    slug: 'aurora', title: 'AURORA', category: 'Travel agency website', cover: '/projects/aurora-destinations.webp',
    tags: ['UI/UX', 'Travel'],
    description: 'A travel website with destination discovery, visa services, and account screens.',
    screens: [
      { title: 'Destinations', image: '/projects/aurora-destinations.webp' },
      { title: 'Visa services', image: '/projects/aurora-visa.webp' },
      { title: 'Login page', image: '/projects/aurora-login.webp' }
    ]
  },
  {
    slug: 'maassarani', title: 'MAASSARANI ELECTRONICS', category: 'Interface design', cover: '/maassarani.png',
    tags: ['UI Design', 'Web'],
    description: 'An e-commerce sign-in screen exploring a friendly visual style and straightforward account access.',
    screens: [{ title: 'Sign-in page', image: '/maassarani.png' }]
  }
];

export const projects = projectData.map(project => ({
  ...project,
  cover: portfolioPath(project.cover),
  screens: project.screens.map(screen => ({ ...screen, image: portfolioPath(screen.image) }))
}));
