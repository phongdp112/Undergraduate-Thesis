import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SnackbarProvider } from 'notistack'; // Import SnackbarProvider

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <SnackbarProvider maxSnack={3} autoHideDuration={2000}
        anchorOrigin={
          {
            vertical:'top',
            horizontal:'right'
          }
        }
        >  {/* Cung cấp Snackbar cho toàn bộ ứng dụng */}

    <App />
    </SnackbarProvider>

  </StrictMode>,
)
