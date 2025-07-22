# Posts Management App

A React application for managing posts with Redux Toolkit for state management and Tailwind CSS for styling.

## Features

- Fetch posts from JSONPlaceholder API
- Add new posts
- Responsive grid layout
- Loading and error states
- Modern UI with Tailwind CSS

## Prerequisites

- Node.js v20.10.0
- npm v10.2.3
- **For Docker setup (choose one):**
  - Docker Desktop for Windows/Mac
  - Docker Engine + Docker Compose (Linux)

## Setup Instructions
### Option 1:  Docker Setup (preferred)

**1. Using Docker Desktop (Windows/Mac)**
```bash
docker compose up --build
```
**2. Using Docker Engine (Linux/WSL2)**
```bash

sudo systemctl start docker

docker compose up --build
```

**3. Access the application**
   - Open your browser and navigate to `http://localhost:3000`

### Option 2:  Local Development Setup

**1. Clone the repository**
   ```bash
   git clone https://github.com/SonHoang2/entrance-test.git
   cd "Task 3"
   ```

**2. Install dependencies**
   ```bash
   npm install
   ```

**3. Start the development server**
   ```bash
   npm run dev
   ```

**4. Open your browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier


## Project Structure

```
src/
├── components/          # React components
│   ├── PostForm.jsx    # Form for adding new posts
│   ├── PostItem.jsx    # Individual post display
│   └── PostsList.jsx   # List of all posts
├── config/             # Configuration files
│   └── config.js       # API configuration
├── constants/          # Application constants
│   └── status.js       # Redux status constants
├── store/              # Redux store setup
│   ├── store.js        # Store configuration
│   └── postsSlice.js   # Posts slice with async thunks
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Tailwind CSS imports
```

## Technologies Used

- **React 19** - UI library
- **Redux Toolkit** - State management
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **Prettier** - Code formatting

## API

This application uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API for demonstration purposes.

- GET `/posts` - Fetch all posts
- POST `/posts` - Add a new post

## Notes

- The Docker setup includes Node.js 20 Alpine for a lightweight container
- The application is configured to run on port 3000
- Hot reload is enabled in development mode
- The app uses modern ES6+ features and JSX

## Author

Hi, I'm the creator and maintainer of this project. I'm passionate about software development and always eager to improve. If you find this project helpful, please consider giving it a star ⭐ – your support means a lot!

If you encounter any bugs or issues, feel free to report them via email. I appreciate your feedback!

📧 **Email:** naruto3285@gmail.com