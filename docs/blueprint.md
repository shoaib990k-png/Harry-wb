# **App Name**: Strategic Architect

## Core Features:

- Dynamic Content Sections: Display hero, solutions, book, founder, and contact form areas, adapting content and layout dynamically for an optimal user experience across various device sizes.
- Solutions & Services Overview: Present key offerings (Hardware, Protocols, Strategy) through interactive cards and detailed tabbed content sections.
- Interactive Book Showcase: Showcase the founder's book with a 3D tilt animation on mouse movement, accompanied by relevant content and social proof.
- Founder Profile Display: Dedicated section and page for presenting the founder's biography, credentials, and achievements.
- Advanced Contact Form: Implement a multi-field contact form with real-time client-side validation using Zod, a progress bar, and robust submission handling to a backend.
- Strategic Insight Tool: A generative AI tool that processes user inputs from the contact form (Primary Focus, Challenge) to offer tailored content recommendations or preliminary strategic advice derived from the application's core knowledge base.
- Responsive Navigation System: Implement a clear and adaptive navigation bar with mobile hamburger menu functionality and dynamic styling based on scroll position.

## Style Guidelines:

- Primary accent color: A professional mid-tone blue (#2B6CB0) for interactive elements, CTAs, and links. (HSL: 207, 61%, 44%).
- Page background: A very light cool gray (#F8F9FB) providing a clean, bright canvas. (HSL: 216, 17%, 97%).
- Hero section background: A deep navy (#0F1624) specifically for the hero area, creating a strong contrast and impact. (HSL: 218, 44%, 10%).
- Text hierarchy colors: Headlines in dark navy (#1A1F2E), body text in a subdued gray (#4A5568), and muted elements in a lighter gray (#8A94A6), all ensuring contrast ratios of ≥4.5:1.
- Headings font: 'Inter' (sans-serif, 700 weight) for crisp, modern, and legible titles.
- Body font: 'Inter' (sans-serif, 400 weight) for clean and readable content.
- Monospace font: 'JetBrains Mono' for technical tags and labels. Note: currently only Google Fonts are supported.
- Fluid type scale using `clamp()` for responsive text sizing, with specified line heights (1.7 for body, 1.2 for headings) and letter spacing for headings and labels.
- Spinner component: Circular SVG spinner (sizes: sm/md/lg/xl) with a stroke animation, colored with the accent blue (#2B6CB0).
- Full responsiveness across all specified breakpoints (xs, sm, md, lg, xl, 2xl), with flexible grid layouts using CSS Grid `auto-fit/minmax`.
- Images configured with `width: 100%`, `height: auto`, and `object-fit: cover` to ensure responsiveness without fixed dimensions. Use `next/image` with `placeholder="blur"`.
- Consistent spacing and containment: `clamp(1rem, 5vw, 5rem)` for horizontal padding, `clamp(3rem, 8vw, 6rem)` for vertical section padding, and content limited by `max-width: 1200px`.
- Mobile layout adaptations: Navbar transforms into a hamburger menu below 768px, two-column layouts stack vertically, and cards adjust dynamically (full-width on mobile, 2-col on tablet, 3-col on desktop).
- Page load animation: Staggered entrance animations for hero section elements (opacity and Y-axis transform) using Framer Motion, with specified delays and ease functions.
- Scroll-triggered animations: Elements reveal upon entering view (15% visibility threshold), animated once with staggered children, utilizing Framer Motion's `useInView` hook.
- Interactive hover effects: All interactive elements (buttons, cards, links, pills) exhibit smooth transitions on hover (scale, translateY, color shifts, underline animations), with distinct styling for different component types.
- Dynamic elements: Implement CSS-driven marquee ticker with alternating directions, number counter animations for stats, and a subtle float animation for the book component, ensuring a lively interface.
- Skeleton loaders: Required on all data-driven and image sections with a shimmer animation, minimum show time of 300ms, and variants for text, headings, images, avatars, and cards, styled with #E2E8F0 background.