import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import Main1 from './container/main1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Header />
      <Main1 />
      <Footer />
    </>
  </StrictMode>,
)
