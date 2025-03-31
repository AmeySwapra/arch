import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CompanyProfilePage from './pages/CompanyProfilePage'
import ExpertPage from './pages/ExpertPage'
import AchivementPage from './pages/AchivementPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import EnquiryPage from './pages/EnquiryPage'
import ArchitecturalServicePage from './pages/ArchitecturalServicePage'
import InteriorDesignPage from './pages/InteriorDesignPage'
import SiteMapPage from './pages/SiteMapPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/company-profile' element={<CompanyProfilePage/>} />
          <Route path='/company-experts' element={<ExpertPage/>} />
          <Route path='/company-achivements' element={<AchivementPage/>} />
          <Route path='/projects' element={<ProjectPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/enquiry' element={<EnquiryPage/>} />
          <Route path='/architecture-service' element={<ArchitecturalServicePage/>} />
          <Route path='/interior-design' element={<InteriorDesignPage/>} />
          <Route path='/sitemap' element={<SiteMapPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App