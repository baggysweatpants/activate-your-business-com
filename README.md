# Activate Your Business - Business Website

<div align="center">
  <img src="static/favicon.svg" alt="Activate Your Business" width="80" height="80">
  
  [![Built with SvelteKit](https://img.shields.io/badge/Built%20with-SvelteKit-FF3E00?style=flat-square&logo=svelte)](https://kit.svelte.dev/)
  [![Powered by Directus](https://img.shields.io/badge/CMS-Directus-6644FF?style=flat-square)](https://directus.io/)
  [![Deployed on AWS](https://img.shields.io/badge/Deployed%20on-AWS-FF9900?style=flat-square&logo=amazon-aws)](https://aws.amazon.com/)
  [![Styled with Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
</div>

## 🚀 About This Project

A modern, dynamic business website built with SvelteKit and powered by Directus CMS. Features a component-based architecture with reusable blocks, integrated contact forms with AWS SES email delivery, and a responsive design optimized for business conversions.

## ✨ Key Features

- **🎯 Component-Based Architecture** - Modular blocks for easy content management
- **📧 Integrated Contact Forms** - AWS SES-powered email delivery system
- **🎨 Modern Design** - Responsive UI with Tailwind CSS
- **⚡ Fast Performance** - Built with SvelteKit for optimal loading speeds
- **🔧 Headless CMS** - Directus integration for content management
- **🛡️ Form Protection** - Honeypot spam protection included
- **📱 Mobile Optimized** - Fully responsive across all devices

## 🏗️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **SvelteKit** | Frontend Framework | ^2.16.0 |
| **Directus SDK** | Headless CMS | ^20.0.0 |
| **Tailwind CSS** | Styling Framework | ^4.0.0 |
| **AWS SES** | Email Service | ^3.844.0 |
| **TypeScript** | Type Safety | ^5.0.0 |
| **Vite** | Build Tool | ^6.2.6 |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd activate-your-business-com
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   # Directus Configuration
   PUBLIC_DIRECTUS_URL=https://your-directus-instance.com
   DIRECTUS_TOKEN=your-directus-token

   # AWS SES Configuration
   AMZ_REGION=eu-central-1
   AMZ_ACCESS_KEY_ID=your-access-key
   AMZ_SECRET_ACCESS_KEY=your-secret-key
   AMZ_SENDER_EMAIL=noreply@yourdomain.com
   AMZ_RECIPIENT_EMAIL=info@yourdomain.com
   AMZ_CC_EMAIL=leads@yourdomain.com
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view the site.

## 📁 Project Structure

```
src/
├── app.css                   # Global styles
├── app.html                  # App shell
├── helper/
│   ├── content-api/
│   │   └── getPage.ts       # Directus page fetching
│   └── directusClient.ts    # Directus client configuration
├── lib/
│   ├── components/
│   │   ├── blocks/          # Content blocks
│   │   │   ├── CardGroup.svelte
│   │   │   ├── CarouselBlock.svelte
│   │   │   ├── CtaBlock.svelte
│   │   │   ├── FaqBlock.svelte
│   │   │   ├── Hero.svelte
│   │   │   └── Modal.svelte
│   │   ├── elements/        # UI elements
│   │   │   ├── CloseButton.svelte
│   │   │   ├── CtaButton.svelte
│   │   │   └── Form.svelte
│   │   └── layout/          # Layout components
│   │       ├── Footer.svelte
│   │       └── Header.svelte
│   └── state/
│       └── modalState.svelte.ts  # Modal state management
└── routes/
    ├── +error.svelte        # Error page
    ├── +layout.svelte       # Layout wrapper
    ├── +page.server.ts      # Server-side data loading
    ├── +page.svelte         # Main page
    └── api/
        └── sendmail/
            └── +server.ts   # Email API endpoint
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm check` | Run type checking |
| `pnpm check:watch` | Run type checking in watch mode |
| `pnpm lint` | Run linting |
| `pnpm format` | Format code with Prettier |

## 🎨 Component Architecture

The project uses a modular block-based architecture:

### Content Blocks
- **Hero Block** - Main hero section with CTA
- **Card Group** - Feature cards and service listings  
- **Carousel Block** - Image/content carousel
- **FAQ Block** - Expandable FAQ section
- **CTA Block** - Call-to-action sections

### Page Structure
Pages are dynamically rendered based on Directus content blocks, with fallback components for missing content.

## 📧 Email Integration

The contact form uses AWS SES for reliable email delivery:

- **Spam Protection** - Honeypot field implementation
- **Form Validation** - Client and server-side validation
- **Email Templates** - HTML and plain text versions
- **Error Handling** - Graceful fallbacks and user feedback

## 🚀 Deployment

### AWS Amplify (Recommended)

The project is configured for AWS Amplify deployment:

1. **Build Configuration**
   ```bash
   pnpm build
   ```

2. **Deploy to Amplify**
   - Connect your repository to AWS Amplify
   - Configure environment variables
   - Deploy automatically on push

### Manual Deployment

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Deploy the `build` directory** to your hosting provider

## 🔐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PUBLIC_DIRECTUS_URL` | ✅ | Directus instance URL |
| `DIRECTUS_TOKEN` | ✅ | Directus API token |
| `AMZ_REGION` | ✅ | AWS region for SES |
| `AMZ_ACCESS_KEY_ID` | ✅ | AWS access key |
| `AMZ_SECRET_ACCESS_KEY` | ✅ | AWS secret key |
| `AMZ_SENDER_EMAIL` | ✅ | From email address |
| `AMZ_RECIPIENT_EMAIL` | ✅ | To email address |
| `AMZ_CC_EMAIL` | ✅ | CC email address |

## 🛠️ Development Guidelines

### Code Style
- **TypeScript** - Strict type checking enabled
- **ESLint** - Consistent code formatting
- **Prettier** - Automatic code formatting
- **Tailwind CSS** - Utility-first styling approach

### Component Development
1. Follow existing component patterns
2. Use TypeScript for type safety
3. Implement proper error handling
4. Add fallback components for missing content

### Git Workflow
- Use descriptive commit messages
- Keep commits focused and atomic
- Test before committing changes

## 📚 Documentation

- [SvelteKit Documentation](https://kit.svelte.dev/)
- [Directus Documentation](https://docs.directus.io/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [AWS SES Documentation](https://docs.aws.amazon.com/ses/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.

---

<div align="center">
  <p>Built with ❤️ using SvelteKit and modern web technologies</p>
</div>