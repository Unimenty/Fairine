# Fairine Enterprise

Fairine Enterprise is a modern e-commerce platform dedicated to providing high-quality, family-safe, and sustainable cleaning solutions. From premium liquid soaps and shower gels to powerful floor cleaners, Fairine brings excellence and care into every home.

## ✨ Key Features

- **Interactive Product Catalog**: Browse a wide range of premium cleaning products with detailed specifications and crystal-clear imagery.
- **Silent Checkout Integration**: A seamless ordering experience powered by **EmailJS**. Customers can submit their orders directly from the cart drawer without being redirected, ensuring a smooth and professional user journey.
- **Modern UI/UX**: Built with a "Cream UI" aesthetic, featuring glassmorphism, smooth animations (Framer Motion), and a fully responsive design for mobile and desktop.
- **Dynamic Cart System**: Real-time cart management with instant subtotals and easy product adjustments.
- **Sustainable Focus**: Highlighting our commitment to eco-friendly packaging and family-safe formulations.

## 🛠️ Tech Stack

- **Frontend**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: React Context API
- **Icons**: [Lucide React](https://lucide.dev/)
- **Order Handling**: [EmailJS](https://www.emailjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Unimenty/Fairine.git
   cd Fairine
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## 📦 Deployment

Fairine is optimized for fast performance and can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

```bash
npm run build
```

## 📞 Contact

For inquiries or more information about our products:
- **Location**: Greater Accra, Ghana
- **Website**: [Fairine Enterprise](https://fairine.com) (Coming soon)

---
*Built with passion for a cleaner, safer home.*
