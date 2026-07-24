import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import AboutPage from './pages/AboutPage'
import AppointmentPage from './pages/AppointmentPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import HomePage from './pages/HomePage'
import ImprintPage from './pages/ImprintPage'
import PrivacyPage from './pages/PrivacyPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ServicePage from './pages/ServicePage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="terminanfrage" element={<AppointmentPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service/:serviceId" element={<ServiceDetailPage />} />
          <Route path="unternehmen" element={<AboutPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="impressum" element={<ImprintPage />} />
          <Route path="datenschutz" element={<PrivacyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}
