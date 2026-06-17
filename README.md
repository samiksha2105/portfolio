Samiksha Portfolio Website
Project Overview
This project is a personal portfolio website developed using React.js and Vite. The portfolio showcases my professional profile, technical skills, projects, resume, and contact information. The website is designed to be responsive, user-friendly, and optimized for performance across different devices.

Features
Responsive design for Desktop, Tablet, and Mobile devices
Professional Navigation Bar
About Me Section
Skills Section
Projects Section
Resume Download Functionality
Contact Section with GitHub and LinkedIn Links
Smooth Scrolling Navigation
Bootstrap-based Modern User Interface
Lazy Loading for Components and Images
Optimized Production Build
Technologies Used
Frontend Technologies
React.js
Vite
Bootstrap 5
HTML5
CSS3
JavaScript (ES6)
Development Tools
Visual Studio Code
Git
GitHub
Vercel
Project Structure
PortfolioWebsite/

├── public/
│   └── Resume.pdf
│
├── src/
│   ├── assets/
│   │   └── Profile.jpeg
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md

Development Process
Step 1: Create React Project
npm create vite@latest portfolio-website -- --template react
Step 2: Install Dependencies
npm install
npm install bootstrap
Step 3: Configure Bootstrap
Import Bootstrap in main.jsx:

import "bootstrap/dist/css/bootstrap.min.css";
Step 4: Create Components
Created reusable React components:

Navbar
About
Skills
Projects
Contact
Resume
Step 5: Implement Responsive Design
Used Bootstrap Grid System:

Container
Row
Col
Ensured responsiveness across:

Desktop Devices
Tablets
Mobile Devices
Step 6: Performance Optimization
Implemented lazy loading for React components:

import { lazy, Suspense } from "react";

const About = lazy(() => import("./components/About"));
Implemented lazy loading for images:

<img src={profile} loading="lazy" alt="Profile" />
Step 7: Generate Production Build
Generated optimized production build:

npm run build
Output Folder:

dist/
Step 8: Local Build Verification
Previewed the production build locally:

npm run preview
Verified:

Navigation Functionality
Resume Download
Responsive Layout
Project Cards
Contact Links
Deployment Process
Git Initialization
git init
git add .
git commit -m "Initial Portfolio Website"
GitHub Repository
Repository URL:

https://github.com/samiksha2105/portfolio.git

Uploaded source code using:

git remote add origin <repository-url>
git branch -M main
git push -u origin main
Vercel Deployment
The portfolio website was deployed using Vercel.

Deployment Steps
Uploaded the source code to GitHub.

Connected the GitHub repository to Vercel.

Vercel automatically detected the Vite framework.

Configured the build settings:

Build Command: npm run build
Output Directory: dist
Successfully deployed the application.

Verified all functionalities after deployment.

Tested responsiveness and browser compatibility.

Live Website
portfolio-8lihsunp8-samikshas-projects-ac0a3ebe.vercel.app

SSL and Security
Vercel automatically provided:

HTTPS Support
SSL Certificate
Secure Deployment URL
Challenges Faced and Solutions
1. Lazy Loading Errors
Issue
Duplicate component imports caused build failures.

Solution
Removed normal imports and implemented React.lazy() with Suspense.

2. Image Rendering Issues
Issue
Profile image was not displaying correctly.

Solution
Used the correct image import path and applied proper CSS styling using object-fit.

3. JSX Key Warning
Issue
React displayed the warning:

Each child in a list should have a unique "key" prop.
Solution
{projects.map((project, index) => (
  <div key={index}>
4. Resume Download Issue
Issue
Resume file was not downloading properly.

Solution
Placed Resume.pdf inside the public folder and used:

<a
                  href="public\40617_6a1698be.pdf"
                  download
                  className="resume-btn"
>
Testing
Functional Testing
Verified:

Navigation Links
Resume Download
Project Section
Contact Information
Social Media Links
Cross-Browser Testing
Tested successfully on:

Google Chrome
Microsoft Edge
Mozilla Firefox
Responsive Testing
Verified on:

Mobile Devices
Tablets
Laptops
Desktop Screens
Future Enhancements
Add Dark Mode
Add Project Screenshots
Integrate Email Service
Add Animations
Add Blog Section
Author
Sayali Pawar

Email: samikshashinde779@gmail.com

GitHub: https://github.com/samiksha2105

LinkedIn: https://linkedin.com/in/samiksha-shinde21

Conclusion
The React Portfolio Website was successfully designed, developed, optimized, tested, and deployed using Vercel. The application provides a responsive and user-friendly platform to showcase projects, technical skills, resume, and contact information while maintaining performance, accessibility, and professional design standards.
