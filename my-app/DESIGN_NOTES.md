# Design Implementation Notes

## Design Matching the Screenshots

This implementation has been designed to match the Kalinga University website screenshots provided.

### Color Scheme
- **Top Bar**: Black background (`#000000`) with white text
- **Main Navigation**: Dark blue (`#0d3b66`) with white text
- **Primary Red**: `#c92a27` for buttons and highlights
- **Breadcrumb Links**: Dark blue (`#0d3b66`) hover to red (`#c92a27`)

### Typography
- **Hero Headings**: STIX Two Math font (serif)
- **Body Text**: Plus Jakarta Sans / Inter
- **Font Sizes**: Responsive with mobile-first approach

### Layout Components

#### 1. Header Structure
```
┌─────────────────────────────────────┐
│  Top Bar (Black)                    │
│  - Contact info, quick links, social│
├─────────────────────────────────────┤
│  Main Navigation (Dark Blue)        │
│  - Logo, Menu Items, Search, Button │
└─────────────────────────────────────┘
```

#### 2. Hero Section (Homepage)
- Full-width background image
- Gradient overlay (left to right, black fade)
- Large heading in STIX Two Math font
- Red CTA button with white border
- Left-aligned content

#### 3. Inner Pages (e.g., About Us)
- Hero image with title overlay
- Blue semi-transparent box with page title
- Breadcrumb navigation below header
- Content area with standard typography

### Key Features Implemented

✅ **Sticky Header**: Fixed position header that stays at top while scrolling
✅ **Mega Menu**: Desktop hover dropdown with organized sections
✅ **Mobile Menu**: Responsive hamburger menu with smooth animations
✅ **Breadcrumb**: Auto-generated navigation based on URL path
✅ **Color-coded CTA**: Red "Admissions" button stands out in navigation
✅ **Responsive Design**: Mobile-first approach with breakpoints at 768px, 1024px

### Header Specifications

**Total Height**:
- Desktop: ~114px (Top bar: 32px + Main nav: 82px)
- Mobile: ~108px (Top bar: 32px + Main nav: 76px)

**Top Bar Height**: ~32px
**Main Navigation Height**: ~82px (desktop), ~76px (mobile)

### Navigation Items Order
1. About Us (with mega menu)
2. Academics (with mega menu)
3. Students (with mega menu)
4. Research (with mega menu)
5. Placements (with mega menu)
6. News & Events
7. **Admissions** (red button)

### Top Bar Quick Links
Desktop displays:
- Phone number
- Email
- Campus Wifi
- International
- NIRF
- NAAC
- NBA
- ERP Login
- Contact Us
- Social media icons

Mobile displays (condensed):
- Phone icon
- Email (tablet+)
- Social media icons

### Responsive Breakpoints

```css
/* Mobile: Default (< 768px) */
- Hamburger menu
- Stacked layout
- Smaller typography

/* Tablet: 768px - 1024px */
- Partial navigation visible
- Optimized spacing

/* Desktop: > 1024px */
- Full mega menu
- All top bar items visible
- Optimal spacing
```

### Image Requirements

Users should replace placeholder images with:

1. **`/public/logo.png`**: Kalinga University logo (transparent background recommended)
2. **`/public/hero-bg.jpg`**: Homepage hero background (campus aerial view)
3. **`/public/about-bg.jpg`**: About page hero background (campus building view)

Recommended image dimensions:
- Logo: 200x200px (PNG with transparency)
- Hero backgrounds: 1920x1080px (landscape, high quality)

### Accessibility Features

- Semantic HTML5 elements
- ARIA labels for icon buttons
- Keyboard navigation support
- Color contrast ratios meet WCAG 2.1 AA standards
- Focus indicators on interactive elements

### Performance Optimizations

- CSS animations (hardware accelerated)
- Minimal state management
- Component-based architecture
- Tailwind JIT for minimal CSS bundle
- Next.js Image optimization ready

### Browser Support

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Notes for Customization

1. **Changing Colors**: Update hex values in component files
   - Primary Blue: `#0d3b66`
   - Primary Red: `#c92a27`
   
2. **Adding Menu Items**: Edit `navItems` array in `Header.jsx`

3. **Modifying Top Bar**: Edit top bar section in `Header.jsx`

4. **Custom Breadcrumbs**: Pass `customBreadcrumbs` prop to `Breadcrumb` component

### Known Design Decisions

1. **Top Bar Icons**: Simplified on mobile to save space
2. **Search Button**: Placeholder (functionality to be implemented)
3. **Mega Menu**: Hover-based on desktop, click-based on mobile
4. **Breadcrumb**: Hidden on homepage, auto-generated elsewhere

### Future Enhancements

- Search functionality implementation
- User authentication dropdown
- Language selector
- Newsletter signup in footer
- Sticky "Apply Now" floating button on scroll

