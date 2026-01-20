# Setapp Clone

This project is a clone of the Setapp landing page, built with React, Vite, and Tailwind CSS.

## 🚀 Project Overview

The main objective was to replicate the visual design of the Setapp homepage. The implementation focuses on creating a pixel-perfect (as close as possible given constraints) representation of the design for desktop screens.

### Features Implemented
The following sections have been developed:
- **Navbar**: Main navigation header.
- **Hero Section**: The primary landing area.
- **Featured Section**: Showcasing key applications or features.
- **Carousel Section**: Interactive slider component.
- **Social & Testimonials**: Social proof and user reviews.
- **Offer Section**: Displaying pricing or special offers.
- **Footer**: Comprehensive page footer.

## 🛠 Tech Stack
- **React**
- **Vite**
- **Tailwind CSS**
- **Zustand**

## ⚠️ Limitations & Challenges

During the development process, several challenges were encountered:

### 1. Design Constraints
- **Missing Components & Tokens**: The provided Figma file did not include a design system with reusable components or design tokens (colors, spacing, typography). This required manual extraction of values, which slows down development and can lead to minor inconsistencies.
- **Alignment**: Due to the lack of explicit grid systems or spacing tokens in the design inputs, some sections may not be perfectly aligned to the pixel.

### 2. Typography
- **Mac-Only Fonts**: The original design uses a font family specific to macOS. As I did not have access to this environment, the project uses a fallback font family. This may result in slight visual differences compared to the original design on macOS devices, however, mac users can still display the original font.

### 3. Responsiveness
- **Desktop Only**: The current build is **strictly optimized for a 1440px wide screen**.
- **Not Responsive**: At this stage, the layout is not responsive. It may break or look incorrect on mobile devices, tablets, or screens significantly smaller or larger than 1440px.

## 💻 Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YasserFat7alah/setapp-clone
   ```
2. Navigate to the project directory:
   ```bash
   cd setapp-clone
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the development server:

```bash
npm run dev
```

Open your browser and verify the view at the provided local URL (usually `http://localhost:5173/`).
