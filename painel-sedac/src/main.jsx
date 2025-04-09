import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { ThemeProvider } from './components/ThemeProvider' // ⬅️ Certo!

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* ⬅️ ENVOLVE O APP AQUI */}
      <App />
    </ThemeProvider>
  </StrictMode>,
)
