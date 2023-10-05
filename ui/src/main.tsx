import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeMode } from './components/ThemeMode.tsx';
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeMode>
      <CssBaseline />
      <App />
    </ThemeMode>
  </React.StrictMode>,
)
