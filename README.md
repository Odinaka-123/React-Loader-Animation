# React Loader Animation

<img width="1920" height="867" alt="image" src="https://github.com/user-attachments/assets/d2a35636-12dc-4af7-aef3-a7eaf426a697" />
<img width="959" height="440" alt="image" src="https://github.com/user-attachments/assets/24b0ea0f-b45b-4d7e-a2b3-d0a7b9c33cf1" />

It demonstrates:

- A **custom loader animation** with a percentage counter and dynamic text.
- A **rubbery, gooey custom cursor** that follows the mouse with lag and stretches based on speed.
- **Light / Dark mode toggle** with smooth color transitions.
- **Clash Display font** for headings.
- GitHub profile integration in both loader and main content.

---

## Getting Started

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/odinaka-123/react-loader-animation.git
cd react-loader-animation
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Run the development server:

bash
Copy code
npm run dev
# or
yarn dev
Open http://localhost:3000 with your browser to see the result.

Features
Loader Animation

Counts from 0% to 100%.

Text changes dynamically as the loader progresses (e.g., "Hello", "And", "Welcome").

Curtain animation at the end.

Custom Cursor

Gooey, rubbery effect with smooth lag.

Stretches and rotates based on movement speed.

Changes color when hovering interactive elements like buttons, links, inputs, or images.

Theme Toggle

Switch between light and dark modes.

Smooth transition for background and text colors.

Responsive Design

Works on desktop and hides the custom cursor on mobile.

GitHub Integration

GitHub icon and username displayed on loader and main page.

Folder Structure
arduino
Copy code
react-loader-animation/
│
├─ public/
│   └─ fonts/ClashDisplay-Semibold.woff2
│
├─ src/
│   ├─ app/
│   │   ├─ layout.jsx
│   │   └─ page.jsx
│   ├─ components/
│   │   ├─ Loader.jsx
│   │   ├─ CustomCursor.jsx
│   │   └─ ThemeToggle.jsx
│   └─ globals.css
│
├─ package.json
├─ postcss.config.js
└─ tailwind.config.js (if used)
Customization
Fonts: Replace /public/fonts/ClashDisplay-Semibold.woff2 with your own font.

Cursor: Adjust circleSize or speed in CustomCursor.jsx for faster/slower lag.

Loader Text: Modify the progress thresholds and text in Loader.jsx.

Colors: Modify CSS variables in globals.css for light/dark themes.

Learn More
Next.js Documentation - learn about Next.js features and API.

React - learn about React fundamentals.

Tailwind CSS - learn how styling works.

You can check out the Next.js GitHub repository — your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


