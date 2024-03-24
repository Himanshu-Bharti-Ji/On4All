import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/Dashboard'
import Enquirires from './pages/Enquirires'
import BlogList from './pages/BlogList'
import BlogCategoryList from './pages/BlogCategoryList'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import ColorList from './pages/ColorList'
import CategoryList from './pages/CategoryList'
import BrandList from './pages/BrandList'
import ProductList from './pages/ProductList'
import AddBlog from './pages/AddBlog'
import AddBlogCategory from './pages/AddBlogCategory'
import AddColor from './pages/AddColor'
import AddCategory from './pages/AddCategory'
import AddBrand from './pages/AddBrand'
import AddProduct from './pages/AddProduct'
import AddCoupon from './pages/AddCoupon'
import CouponList from './pages/CouponList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='enquiries' element={<Enquirires />} />
          <Route path='blog-list' element={<BlogList />} />
          <Route path='blog-category-list' element={<BlogCategoryList />} />
          <Route path='orders' element={<Orders />} />
          <Route path='customers' element={<Customers />} />
          <Route path='color-list' element={<ColorList />} />
          <Route path='category-list' element={<CategoryList />} />
          <Route path='brand-list' element={<BrandList />} />
          <Route path='product-list' element={<ProductList />} />
          <Route path='add-blog' element={<AddBlog />} />
          <Route path='add-blog-category' element={<AddBlogCategory />} />
          <Route path='color' element={<AddColor />} />
          <Route path='category' element={<AddCategory />} />
          <Route path='category/:id' element={<AddCategory />} />
          <Route path='brand' element={<AddBrand />} />
          <Route path='brand/:id' element={<AddBrand />} />
          <Route path='product' element={<AddProduct />} />
          <Route path='add-coupon' element={<AddCoupon />} />
          <Route path='coupon-list' element={<CouponList />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
