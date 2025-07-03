# Dr. Serena Blake Psychology Website

A modern, responsive therapy website built for Dr. Serena Blake, a licensed clinical psychologist based in Los Angeles, CA. This project showcases a clean, professional design focused on mental health services with an emphasis on user experience and accessibility.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Images**: Next.js Image optimization

## Live Demo

- **Live Site**: [\[Your Vercel URL Here\]](https://serena-blake-psyd.vercel.app/)
- **Demo Video**: [Your Video URL Here]

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbhinavChandra7020/serena-blake-demo
   cd dr-serena-blake-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```


## Project Overview

This website was developed as part of an internship assignment for Grow My Therapy, demonstrating the ability to create beautiful, functional websites for mental health professionals. The site features a warm, welcoming design that builds trust and encourages potential clients to reach out for support.

## Key Features

### **Professional Design**
- Clean, modern aesthetic tailored for therapy practice
- Warm color palette (honeydew, teal, warm clay tones)
- Professional typography using Suranna and Raleway fonts
- Mobile-first responsive design

### 📱 **Fully Responsive**
- Optimized for desktop, tablet, and mobile devices
- Smooth transitions and hover effects
- Mobile-friendly navigation and contact forms

### **Interactive Components**
- **Hero Section**: Full-screen background with compelling call-to-action
- **Contact Form Modal**: Functional form with validation and success feedback
- **FAQ Accordion**: Interactive expandable questions and answers
- **Service Cards**: Engaging layouts with custom images


## Project Structure

```
├── components/
│   ├── Button.tsx              # Reusable CTA button component
│   ├── ContactForm.tsx         # Modal contact form with validation
│   ├── FAQ.tsx                 # Accordion-style FAQ section
│   ├── Fees.tsx                # Pricing information display
│   ├── Footer.tsx              # Site footer with contact info
│   ├── Header.tsx              # Site header with logo and title
│   ├── HeroSection.tsx         # Main hero section with CTA
│   ├── ImageQuote.tsx          # Inspirational quote with background
│   ├── Modal.tsx               # Success modal for form submissions
│   ├── Services.tsx            # Services showcase with images
│   ├── Session.tsx             # Office hours information
│   ├── TherapistProfile.tsx    # About section with bio and photo
│   └── Homepage.tsx            # Main page layout and structure
├── public/
│   ├── heroGif.gif            # Hero section background
│   ├── serena-blake.png       # Therapist headshot
│   ├── anxiety-therapy.png    # Service images
│   ├── relationship-consultation.png
│   ├── trauma-recovery.jpg
│   └── lowerImage.jpg         # Quote section background
└── README.md
```

## Therapist Information

**Dr. Serena Blake, PsyD (Clinical Psychologist)**

- **Location**: 1287 Maplewood Drive, Los Angeles, CA 90026
- **Phone**: (323) 555-0192
- **Email**: serena@blakepsychology.com
- **Experience**: 8 years of practice, 500+ sessions

### Office Hours
- **In-person**: Tuesday & Thursday, 10 AM – 6 PM
- **Virtual via Zoom**: Monday, Wednesday & Friday, 1 PM – 5 PM

### Session Fees
- **Individual Session**: $200
- **Couples Session**: $240

### Areas of Specialization
1. **Anxiety & Stress Management**
2. **Relationship Counseling** 
3. **Trauma Recovery**

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager


4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Design Inspiration

This project draws inspiration from modern therapy websites with a focus on:
- Clean, trustworthy design aesthetics
- Warm, welcoming color schemes
- Professional photography and imagery
- Clear information hierarchy
- Accessible, user-friendly interfaces

## Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-featured experience with hover effects
- **Tablet**: Adapted layouts for medium screens
- **Mobile**: Touch-friendly interface with optimized forms

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Screen reader friendly
- High contrast color combinations

## Future Enhancements

Potential improvements for a production version:
- [ ] Backend integration for form submissions
- [ ] Online booking system integration
- [ ] Blog/resources section
- [ ] Client portal access
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Performance monitoring

## Contact Form Features

- **Validation**: Real-time form validation with error messaging
- **Required Fields**: Name, phone, email, and consent checkbox
- **Optional Fields**: Message and preferred contact time
- **Success Feedback**: Modal confirmation upon successful submission
- **Mobile Optimized**: Touch-friendly inputs and layouts

## Performance Optimizations

- Next.js Image optimization for fast loading
- Lazy loading for non-critical images
- Tailwind CSS for minimal bundle size
- TypeScript for development efficiency
- Component-based architecture for maintainability

## Contributing

This project was created as an internship assignment. For questions or suggestions:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is created for educational purposes as part of an internship assignment for Grow My Therapy.