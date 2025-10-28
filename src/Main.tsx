import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // Import alterado para .tsx
import './index.css'

// Adicionada asserção 'as HTMLElement' para garantir que o elemento não é nulo
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)