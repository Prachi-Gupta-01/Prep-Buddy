#  PrepBuddy – AI Exam Notes Generator

PrepBuddy is a **MERN Stack AI-powered web application** that helps students quickly generate structured exam notes using Artificial Intelligence. It allows users to authenticate with Google, generate notes, download them as PDFs, and view their history of generated notes.

The goal of PrepBuddy is to **simplify exam preparation by automatically generating concise and well-structured study notes.**

---

##  Features

###  Google Authentication
- Secure login using Google OAuth
- User session management
- Protected API routes using authentication middleware

###  AI Notes Generation
- Generate exam-ready notes instantly
- AI-generated structured summaries
- Clean and easy-to-read format

###  Download Notes as PDF
- Export generated notes as PDF
- Printable and shareable study material

###  User Notes History
- View previously generated notes
- Stored securely in MongoDB
- Quick access anytime

###  Pricing Page & Stripe Integration
- Pricing plans for premium features
- Stripe payment gateway integration

###  Modern UI
- Responsive design
- Clean layout with Navbar, Sidebar, and Footer
- Smooth user experience

---

##  Tech Stack

### Frontend
- React.js
- Redux
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- Google OAuth

### AI Integration
- AI API for notes generation

### Payments
- Stripe

---

##  Project Structure

```
prepbuddy/
│
├── client/                 # React Frontend
│   ├── components
│   ├── pages
│   ├── redux
│   ├── utils
│   └── App.js
│
├── server/                 # Express Backend
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── models
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

##  Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/prepbuddy.git
cd prepbuddy
```

---

### 2. Install Dependencies

#### Install backend dependencies

```bash
cd server
npm install
```

#### Install frontend dependencies

```bash
cd client
npm install
```

---

### 3. Setup Environment Variables

Create a `.env` file inside the **server folder**.

Example:

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

JWT_SECRET=your_jwt_secret

AI_API_KEY=your_ai_api_key

STRIPE_SECRET_KEY=your_stripe_secret
```

---

### 4. Run the Application

Start backend server:

```bash
cd server
npm run dev
```

Start frontend server:

```bash
cd client
npm start
```

Application will run on:

```
Frontend: http://localhost:3000
Backend: http://localhost:5000
```

---




##  Future Improvements

- AI Flashcards Generator
- Quiz Generator
- Smart Study Planner
- Collaborative Notes
- Mobile App Version

---
