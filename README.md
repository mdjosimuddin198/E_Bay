GitHub Repository Structure (Watch Store)
E_Bay/
├─src/
├─ app/
├─api/auth
│ ├─ layout.js
│ ├─ page.js
│ ├─ not-found.js
│ └─ products/
│ └─ page.js
└─ globals.css
├─Images  
├─ public/
│
├─ package.json
├─
├─ next.config.js
└─ README.md

README.md (Watch Store)

# Watch Store

## 🔗 Live Site

[View Live Site](https://e-bay-topaz.vercel.app)

## 📂 GitHub Repository

[GitHub Repository](https://github.com/mdjosimuddin198/E_Bay)

---

## 💡 Project Description

**Electronics Store** is a modern **Next.js** web application for showcasing and selling watches and other electronics item .  
Features include:

- Full **Dark Mode** support
- Custom 404 page
- Responsive design for mobile and desktop
- User authentication with **NextAuth.js**
- Product listing with details and images
- Clean Tailwind + DaisyUI design
  -user can add an products

---

## ⚙️ Setup & Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/watch-store.git


Navigate to the project folder:

cd watch-store


Install dependencies:

npm install


Create a .env.local file in the root directory and add the following environment variables:

NEXTAUTH_URL=https://e-bay-topaz.vercel.app
NEXTAUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
BACKEND_URL=https://your-backend-api.com


Run the development server:

npm run dev


Open http://localhost:3000
 to view the app.

🗺 Route Summary
Route	Description
/	Home Page
/products	Products listing page
/about	About Page (optional)
/contact	Contact Page (optional)
/404	Custom 404 Page
/api/auth/*	NextAuth.js API Routes
📦 Technologies Used

Next.js

Tailwind CSS

DaisyUI

React

Node.js & Express (Backend)

MongoDB (Database)
```
