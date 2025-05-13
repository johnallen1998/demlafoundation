
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add smooth scrolling behavior
document.documentElement.style.scrollBehavior = 'smooth';

createRoot(document.getElementById("root")!).render(<App />);
