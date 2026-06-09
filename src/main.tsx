import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/main.scss'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <p>Hello Worlds</p>
  </BrowserRouter>,
)
