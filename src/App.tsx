import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Category from './pages/Category'
import About from './pages/About'
import Contact from './pages/Contact'

/**
 * Top-level assembly: the shared Layout (Header + Footer) wraps all routes.
 * Original .dc.html links map to these paths.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<Category />} />
        <Route path="/products/:slug/:subSlug" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
