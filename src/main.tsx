import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import MainSidebar from './components/MainSidebar/MainSidebar'
import ContentSidebar from './components/ContentSidebar/ContentSidebar'
import { InfoDataProvider } from './context/FetchingData'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InfoDataProvider>
      <BrowserRouter>
        <div className='container relative mx-auto p-6 pt-0 pb-0 flex justify-stretch flex-wrap'>
          <MainSidebar />
          <ContentSidebar />
        </div>
      </BrowserRouter>
    </InfoDataProvider>
  </StrictMode>,
)
