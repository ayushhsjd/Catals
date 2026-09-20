export type Niche = {
  id: string
  number: string
  slug: string
  name: string
  short: string
  description: string
  focus: string[]
  productCategories: string[]
  image: string
}

export const niches: Niche[] = [
  {
    id: 'ai-earning-productivity',
    number: '01',
    slug: 'ai-earning-productivity',
    name: 'AI Earning / Productivity',
    short: 'Practical AI tools, income ideas, and productivity systems.',
    description:
      'Practical AI knowledge, earning opportunities, workflows, automation concepts, and productivity systems for people building more leverage into their work.',
    focus: ['AI tools', 'Earning workflows', 'Automation', 'Productivity systems'],
    productCategories: ['AI Earning / Productivity'],
    image: '/niches/agencies.png',
  },
  {
    id: 'personal-finance',
    number: '02',
    slug: 'personal-finance',
    name: 'Personal Finance',
    short: 'Money management, financial literacy, and wealth-building basics.',
    description:
      'Clear financial knowledge, money management, investing education, and wealth-building concepts for making thoughtful long-term decisions.',
    focus: ['Money management', 'Financial literacy', 'Investing basics', 'Wealth building'],
    productCategories: ['Personal Finance'],
    image: '/niches/trading.png',
  },
  {
    id: 'career-freelancing',
    number: '03',
    slug: 'career-freelancing',
    name: 'Career / Freelancing',
    short: 'Skills, freelancing, remote work, and career direction.',
    description:
      'Practical resources for building valuable skills, finding meaningful work, freelancing with clarity, and creating a career with more independence.',
    focus: ['Career skills', 'Freelancing', 'Remote work', 'Professional growth'],
    productCategories: ['Career / Freelancing'],
    image: '/niches/ai.png',
  },
  {
    id: 'health-weight-loss',
    number: '04',
    slug: 'health-weight-loss',
    name: 'Health / Weight Loss',
    short: 'Sustainable habits, wellness, and healthier routines.',
    description:
      'Practical, responsible knowledge for building healthier routines, understanding wellness, and making sustainable progress toward personal health goals.',
    focus: ['Healthy routines', 'Nutrition basics', 'Movement', 'Sustainable habits'],
    productCategories: ['Health / Weight Loss'],
    image: '/niches/self-improvement.png',
  },
  {
    id: 'small-business-side-hustles',
    number: '05',
    slug: 'small-business-side-hustles',
    name: 'Small Business / Side Hustles',
    short: 'Simple ideas, systems, and resources for building income.',
    description:
      'Actionable knowledge for starting small, testing ideas, building useful offers, and creating sustainable side income without unnecessary complexity.',
    focus: ['Business ideas', 'Offer creation', 'Simple systems', 'Growth basics'],
    productCategories: ['Small Business / Side Hustles'],
    image: '/niches/finance.png',
  },
  {
    id: 'trading-investing-psychology',
    number: '06',
    slug: 'trading-investing-psychology',
    name: 'Trading / Investing Psychology',
    short: 'Market knowledge, risk awareness, and disciplined decision-making.',
    description:
      'Structured education around market thinking, investing principles, risk management, emotional discipline, and the psychology behind better financial decisions.',
    focus: ['Market structure', 'Risk management', 'Investing principles', 'Trading psychology'],
    productCategories: ['Trading / Investing Psychology'],
    image: '/niches/digital-earning.png',
  },
  {
    id: 'exam-prep-skill-learning',
    number: '07',
    slug: 'exam-prep-skill-learning',
    name: 'Exam Prep / Skill Learning',
    short: 'Focused learning systems for exams and valuable skills.',
    description: 'Clear learning resources, study systems, and skill-building frameworks for people committed to meaningful progress.',
    focus: ['Study systems', 'Exam preparation', 'Skill development', 'Learning habits'],
    productCategories: ['Exam Prep / Skill Learning'],
    image: '/niches/ai.png',
  },
  {
    id: 'parenting-child-education',
    number: '08',
    slug: 'parenting-child-education',
    name: 'Parenting / Child Education',
    short: 'Thoughtful guidance for parents and growing minds.',
    description: 'Practical, age-aware resources for supporting children, strengthening learning, and navigating parenting with patience and clarity.',
    focus: ['Parenting tools', 'Child learning', 'Communication', 'Family routines'],
    productCategories: ['Parenting / Child Education'],
    image: '/niches/self-improvement.png',
  },
  {
    id: 'relationships-communication',
    number: '09',
    slug: 'relationships-communication',
    name: 'Relationships / Communication',
    short: 'Better conversations, boundaries, and connection.',
    description: 'Useful frameworks for clearer communication, healthier relationships, emotional awareness, and more intentional connection.',
    focus: ['Communication', 'Boundaries', 'Emotional awareness', 'Connection'],
    productCategories: ['Relationships / Communication'],
    image: '/niches/finance.png',
  },
  {
    id: 'self-improvement-productivity',
    number: '10',
    slug: 'self-improvement-productivity',
    name: 'Self-Improvement / Productivity',
    short: 'Discipline, mindset, habits, and personal performance.',
    description: 'Practical systems for building discipline, improving focus, creating better habits, and becoming more capable over time.',
    focus: ['Discipline', 'Mindset', 'Habits', 'Personal performance'],
    productCategories: ['Self-Improvement / Productivity'],
    image: '/niches/trading.png',
  },
]

export const solutions = [
  {
    title: 'Digital Products',
    description:
      'Premium, self-contained digital products designed to deliver a specific outcome from the moment they are opened.',
  },
  {
    title: 'Educational Resources',
    description:
      'Structured learning material that turns complex subjects into clear, practical, applicable knowledge.',
  },
  {
    title: 'Business Resources',
    description:
      'Frameworks, playbooks, and systems that help agencies and businesses grow with intention.',
  },
  {
    title: 'Trading Resources',
    description:
      'Market education and disciplined strategy resources focused on process over prediction.',
  },
  {
    title: 'AI Resources',
    description:
      'Practical AI workflows and automation concepts that create real leverage in daily work.',
  },
  {
    title: 'Self-Improvement Resources',
    description:
      'Mindset, discipline, and performance material built to compound over the long term.',
  },
  {
    title: 'Finance Resources',
    description:
      'Financial literacy and money-management knowledge explained without noise or hype.',
  },
  {
    title: 'Digital Earning Resources',
    description:
      'Skill-building and freelancing resources for people creating income in the digital economy.',
  },
]

export const whyCatals = [
  {
    title: 'Practical Knowledge',
    description: 'Everything we create is built to be used, not just read.',
  },
  {
    title: 'Clear Thinking',
    description: 'We simplify complexity so ideas become genuinely actionable.',
  },
  {
    title: 'Premium Digital Products',
    description: 'Considered design and substance in every product we ship.',
  },
  {
    title: 'Multiple Specialized Niches',
    description: 'Deep focus across six domains that matter for modern life and work.',
  },
  {
    title: 'Continuous Improvement',
    description: 'Products and resources that are refined over time, never abandoned.',
  },
  {
    title: 'Long-Term Vision',
    description: 'We build an ecosystem meant to last, not a moment meant to trend.',
  },
]

export type Product = {
  slug: string
  name: string
  nicheId: string
  cover: string
  positioning: string
  description: string
  learn: string[]
  features: string[]
  audience: string[]
  price: number
  faq: { q: string; a: string }[]
}

export const products: Product[] = [
  {
    slug: 'agency-growth-system',
    name: 'The Agency Growth System',
    nicheId: 'agencies',
    cover: '/products/agency-growth-system.png',
    positioning: 'A structured operating system for scaling a service business with clarity.',
    description:
      'A complete resource for agency owners who want a repeatable way to attract clients, deliver consistently, and grow without chaos. It replaces guesswork with a clear operating model.',
    learn: [
      'How to build a positioning that attracts the right clients',
      'A repeatable client-acquisition framework',
      'Systems for delivery, retention, and referrals',
      'How to structure pricing and offers with confidence',
    ],
    features: ['Operating playbooks', 'Offer & pricing frameworks', 'Client journey maps', 'Lifetime updates'],
    audience: ['Agency founders', 'Freelancers scaling into agencies', 'Service-business operators'],
    price: 89,
    faq: [
      { q: 'Is this a course or a resource pack?', a: 'It is a structured digital resource you can work through at your own pace and return to as a reference.' },
      { q: 'Do I get future updates?', a: 'Yes. Improvements and additions are included after purchase.' },
    ],
  },
  {
    slug: 'brand-positioning-playbook',
    name: 'Brand Positioning Playbook',
    nicheId: 'agencies',
    cover: '/products/brand-positioning-playbook.png',
    positioning: 'Define a brand position that is clear, distinct, and hard to copy.',
    description:
      'A focused playbook for building a brand position that customers remember. It walks through the thinking behind category, promise, and perception.',
    learn: [
      'How to find a defensible position in a crowded market',
      'The language that makes a brand memorable',
      'How to translate positioning into messaging',
      'A framework for consistent brand decisions',
    ],
    features: ['Positioning frameworks', 'Messaging templates', 'Worked examples', 'Lifetime updates'],
    audience: ['Founders', 'Marketers', 'Brand & creative teams'],
    price: 59,
    faq: [
      { q: 'Do I need a design background?', a: 'No. This focuses on strategy and language, not visual design.' },
    ],
  },
  {
    slug: 'market-structure-foundations',
    name: 'Market Structure Foundations',
    nicheId: 'trading',
    cover: '/products/market-structure-foundations.png',
    positioning: 'Understand how markets actually move before you ever place a trade.',
    description:
      'An educational resource that builds a clear mental model of market structure, liquidity, and price behavior — the foundation every disciplined approach is built on.',
    learn: [
      'How to read market structure with clarity',
      'The role of liquidity and participation',
      'How to think in probabilities, not certainties',
      'Building a personal framework for analysis',
    ],
    features: ['Structured lessons', 'Concept breakdowns', 'Reference diagrams', 'Lifetime updates'],
    audience: ['New traders', 'Self-directed learners', 'Anyone studying markets'],
    price: 79,
    faq: [
      { q: 'Is this financial advice?', a: 'No. This is educational material. It does not provide financial advice or signals.' },
    ],
  },
  {
    slug: 'risk-and-psychology',
    name: 'Risk & Trading Psychology',
    nicheId: 'trading',
    cover: '/products/risk-and-psychology.png',
    positioning: 'The discipline layer that separates consistency from luck.',
    description:
      'A resource dedicated to risk management and the psychology of decision-making under uncertainty — the part of trading most people neglect.',
    learn: [
      'How to size and manage risk with rules',
      'How to manage emotion and expectation',
      'Building a repeatable decision process',
      'How to review and improve over time',
    ],
    features: ['Risk frameworks', 'Journaling templates', 'Review systems', 'Lifetime updates'],
    audience: ['Developing traders', 'Discretionary decision-makers', 'Long-term learners'],
    price: 69,
    faq: [
      { q: 'Does this include signals?', a: 'No. It is focused entirely on risk and psychology as skills.' },
    ],
  },
  {
    slug: 'applied-ai-workflows',
    name: 'Applied AI Workflows',
    nicheId: 'ai',
    cover: '/products/applied-ai-workflows.png',
    positioning: 'Turn AI tools into real, repeatable leverage in your daily work.',
    description:
      'A practical resource for building AI workflows that save time and improve output — focused on concepts and systems that stay relevant as tools change.',
    learn: [
      'How to design workflows around AI tools',
      'Prompting patterns that produce reliable results',
      'How to automate repetitive knowledge work',
      'A framework for evaluating new AI tools',
    ],
    features: ['Workflow blueprints', 'Prompt patterns', 'Automation concepts', 'Lifetime updates'],
    audience: ['Knowledge workers', 'Founders & operators', 'Creators & freelancers'],
    price: 75,
    faq: [
      { q: 'Will this be outdated quickly?', a: 'It focuses on durable concepts and workflows, and is updated as the space evolves.' },
    ],
  },
  {
    slug: 'ai-productivity-system',
    name: 'The AI Productivity System',
    nicheId: 'ai',
    cover: '/products/ai-productivity-system.png',
    positioning: 'A calm, systemized way to work faster with AI as a partner.',
    description:
      'A resource for integrating AI into a personal productivity system without adding noise — designed to help you focus on high-value work.',
    learn: [
      'How to build an AI-assisted daily system',
      'Where AI helps and where it does not',
      'How to keep quality high while moving faster',
      'Sustainable habits for working with AI',
    ],
    features: ['System templates', 'Workflow examples', 'Habit frameworks', 'Lifetime updates'],
    audience: ['Professionals', 'Students', 'Anyone optimizing their work'],
    price: 55,
    faq: [
      { q: 'Do I need paid AI tools?', a: 'No. The concepts apply across free and paid tools.' },
    ],
  },
  {
    slug: 'discipline-blueprint',
    name: 'The Discipline Blueprint',
    nicheId: 'self-improvement',
    cover: '/products/discipline-blueprint.png',
    positioning: 'Build the discipline that makes everything else possible.',
    description:
      'A focused resource on building durable discipline through systems rather than motivation — the foundation of long-term performance.',
    learn: [
      'How to design an environment for discipline',
      'Building habits that survive bad days',
      'How to think about consistency realistically',
      'A simple review loop for continuous growth',
    ],
    features: ['Habit frameworks', 'Daily systems', 'Reflection prompts', 'Lifetime updates'],
    audience: ['Anyone rebuilding routine', 'Students & professionals', 'Long-term self-improvers'],
    price: 49,
    faq: [
      { q: 'Is this just motivation?', a: 'No. It is about systems and process, not hype.' },
    ],
  },
  {
    slug: 'mindset-and-focus',
    name: 'Mindset & Deep Focus',
    nicheId: 'self-improvement',
    cover: '/products/mindset-and-focus.png',
    positioning: 'Train attention and mindset for meaningful, focused work.',
    description:
      'A resource for developing the mindset and attention required to do deep, meaningful work in a distracted world.',
    learn: [
      'How to build sustained focus',
      'Managing distraction and mental noise',
      'A healthier relationship with progress',
      'Practices for clarity and calm',
    ],
    features: ['Focus practices', 'Mindset frameworks', 'Guided prompts', 'Lifetime updates'],
    audience: ['Creators', 'Students', 'Deep-work professionals'],
    price: 45,
    faq: [
      { q: 'How is this delivered?', a: 'As a structured digital resource you can revisit anytime.' },
    ],
  },
  {
    slug: 'financial-literacy-foundations',
    name: 'Financial Literacy Foundations',
    nicheId: 'finance',
    cover: '/products/financial-literacy-foundations.png',
    positioning: 'Understand money clearly — without jargon or hype.',
    description:
      'A foundational resource that explains personal finance concepts in plain language, from budgeting basics to how investing actually works.',
    learn: [
      'How to manage money with a simple system',
      'The core concepts behind investing',
      'How to think about risk and time',
      'Building financial literacy for the long term',
    ],
    features: ['Plain-language lessons', 'Money frameworks', 'Reference guides', 'Lifetime updates'],
    audience: ['Beginners', 'Students', 'Anyone building literacy'],
    price: 59,
    faq: [
      { q: 'Is this investment advice?', a: 'No. It is educational and does not recommend specific investments.' },
    ],
  },
  {
    slug: 'wealth-building-principles',
    name: 'Wealth-Building Principles',
    nicheId: 'finance',
    cover: '/products/wealth-building-principles.png',
    positioning: 'The durable principles behind building wealth over decades.',
    description:
      'A resource focused on the timeless principles of wealth building — saving, compounding, patience, and long-term thinking.',
    learn: [
      'The principles that compound over time',
      'How to think in decades, not days',
      'Common mistakes to avoid',
      'Building a personal long-term framework',
    ],
    features: ['Principle breakdowns', 'Long-term frameworks', 'Reflection prompts', 'Lifetime updates'],
    audience: ['Long-term thinkers', 'Early-career professionals', 'Anyone planning ahead'],
    price: 65,
    faq: [
      { q: 'Does this promise returns?', a: 'No. It teaches principles and does not promise financial outcomes.' },
    ],
  },
  {
    slug: 'freelancing-launchpad',
    name: 'The Freelancing Launchpad',
    nicheId: 'digital-earning',
    cover: '/products/freelancing-launchpad.png',
    positioning: 'Everything you need to start earning with a digital skill.',
    description:
      'A practical resource for launching a freelancing career — choosing a skill, finding clients, and delivering work that earns repeat business.',
    learn: [
      'How to choose and package a digital skill',
      'How to find and win your first clients',
      'How to price and communicate professionally',
      'Delivering work that leads to referrals',
    ],
    features: ['Getting-started roadmap', 'Outreach templates', 'Pricing frameworks', 'Lifetime updates'],
    audience: ['Aspiring freelancers', 'Students', 'Anyone starting online'],
    price: 69,
    faq: [
      { q: 'Do I need experience?', a: 'No. It is designed for people starting from the beginning.' },
    ],
  },
  {
    slug: 'digital-income-skills',
    name: 'Digital Income Skills',
    nicheId: 'digital-earning',
    cover: '/products/digital-income-skills.png',
    positioning: 'Build in-demand online skills that translate into income.',
    description:
      'A resource focused on the high-value digital skills that create income opportunities — and how to develop them deliberately.',
    learn: [
      'Which digital skills are worth developing',
      'How to build skills that clients pay for',
      'How to present skills as an offer',
      'Turning skills into consistent work',
    ],
    features: ['Skill roadmaps', 'Practice frameworks', 'Offer templates', 'Lifetime updates'],
    audience: ['Beginners', 'Career switchers', 'Side-income builders'],
    price: 55,
    faq: [
      { q: 'Is this a job guarantee?', a: 'No. It teaches skills and approaches; outcomes depend on your effort.' },
    ],
  },
]

export function getNiche(slug: string) {
  return niches.find((n) => n.slug === slug)
}

export function getNicheById(id: string) {
  return niches.find((n) => n.id === id)
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function productsByNiche(nicheId: string) {
  return products.filter((p) => p.nicheId === nicheId)
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Niches', href: '/niches' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]
