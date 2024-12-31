Portfolio Tracker

Portfolio Tracker is a web application designed to help users manage and track their professional projects and skills. This tool is ideal for students, professionals, and freelancers who want to showcase their work and growth over time.

Features

Project Management: Add, edit, and delete project entries with detailed descriptions and timelines.

Skill Tracking: Monitor your skill development over time.

Analytics: Visualize your progress with charts and summaries.

Responsive Design: Optimized for both desktop and mobile use.

Tech Stack

Frontend: React (v18.3.1), Tailwind CSS

Backend: Supabase (via @supabase/supabase-js v2.39.7)

Build Tool: Vite

Date Utilities: date-fns (v3.3.1)

Installation

Prerequisites

Node.js (>= 16.0.0)

npm (>= 8.0.0)

Steps

Clone the repository:

git clone https://github.com/your-username/portfolio-tracker.git

Navigate to the project directory:

cd portfolio-tracker

Install dependencies:

npm install

Start the development server:

npm run dev

Open your browser and navigate to http://localhost:3000.

Scripts

npm run dev: Starts the development server.

npm run build: Builds the application for production.

npm run preview: Serves the production build locally.

npm run lint: Lints the codebase using ESLint.

Folder Structure

portfolio-tracker/
├── public/           # Static assets
├── src/              # Application source code
│   ├── components/   # Reusable UI components
│   ├── pages/        # Application pages
│   ├── styles/       # Tailwind CSS styles
│   └── utils/        # Utility functions
├── .eslintrc.js      # ESLint configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json     # TypeScript configuration
└── vite.config.js    # Vite configuration

Dependencies

Main Dependencies

@supabase/supabase-js (v2.39.7): Backend service for authentication and data management.

lucide-react: Icon library for modern UI design.

react (v18.3.1): JavaScript library for building user interfaces.

date-fns (v3.3.1): Date utility library for JavaScript.

Development Dependencies

@vitejs/plugin-react: React plugin for Vite.

Tailwind CSS (v3.4.1): Utility-first CSS framework.

TypeScript (v5.5.3): Typed JavaScript for large-scale applications.

ESLint (v9.9.1): Linting tool for identifying and reporting code issues.

Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch:

git checkout -b feature-name

Commit your changes:

git commit -m "Add new feature"

Push to the branch:

git push origin feature-name

Submit a pull request.

License

This project is licensed under the MIT License.

Contact

For any inquiries, please reach out to [your-email@example.com].

