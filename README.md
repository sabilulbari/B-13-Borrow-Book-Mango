# 📚 BookTime – Online Book Borrowing Platform

🔗 **Live Site:** https://b-13-borrow-book-mango.vercel.app/  
🔗 **GitHub Repo:** https://github.com/sabilulbari/B-13-Borrow-Book-Mango  

---

## ✨ Project Overview

**BookTime** is a modern digital library platform that transforms the traditional book borrowing experience into a seamless online system. Users can explore books, filter categories, and borrow titles with a smooth and secure interface.

Built with performance, simplicity, and elegance in mind — this platform blends the nostalgia of libraries with modern web technology.

---

## 🎯 Key Features

- 🔐 **Authentication System**
  - Email & Password Login/Register
  - Google Social Login (BetterAuth)
  - Protected Routes (Private Pages)

- 📚 **Book Management**
  - Browse all books
  - Search books by title
  - Filter by category (Story, Tech, Science)

- 📖 **Book Details Page**
  - Detailed information about each book
  - Borrow functionality with availability tracking

- 👤 **User Profile**
  - View user information
  - Update name & profile image

- 🎨 **Modern UI/UX**
  - Fully responsive (Mobile, Tablet, Desktop)
  - Smooth animations using:
    - Animate.css
    - React Spring
    - Swiper.js

- 🚀 **Performance Focused**
  - Built with Next.js
  - Optimized rendering & routing

---

## 🧩 Pages & Routes

| Route | Description |
|------|------------|
| `/` | Home Page (Banner, Featured Books, Extra Sections) |
| `/allBooks` | Browse & search all books |
| `/books/[id]` | Book details (Private Route) |
| `/login` | User login |
| `/register` | User registration |
| `/profile` | User profile (Private Route) |
| `/update-profile` | Update user info |

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React  
- **Styling:** Tailwind CSS, DaisyUI / HeroUI  
- **Authentication:** BetterAuth  
- **Database:** MongoDB  
- **Animation:** Animate.css, React Spring  
- **Slider:** Swiper.js  

---

## 📦 NPM Packages Used

```bash
next
react
tailwindcss
better-auth
swiper
animate.css
@react-spring/web
react-hook-form
react-icons