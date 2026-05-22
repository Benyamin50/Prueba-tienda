import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Footer from './components/Footer'
import { UpdateFollower } from 'react-mouse-follower'
import ProductList from './components/ProductList'
import Navbar2 from './components/Navbar2'
import SingleProduct from './components/SingleProduct'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Home /><Footer /></>
  },
  {
    path: '/mens',
    element: <><Navbar2 /><ProductList category="men" /><Footer /></>
  },
  {
    path: '/womens',
    element: <><Navbar2 /><ProductList category="women" /><Footer /></>
  },
  {
    path: '/kids',
    element: <><Navbar2 /><ProductList category="kid" /><Footer /></>
  },
  {
    path: '/contact',
    element: <><Navbar2 /><Contact /><Footer /></>
  },
  {
    path: "/products/:productId",
    element: <><Navbar2 /><SingleProduct /><Footer /></>
  },
  {
    path: '/cart',
    element: <><Navbar2 /><Cart /><Footer /></>
  },

])

const App = () => {
  return (
    <main className='overflow-x-hidden min-h-screen w-full font-sans relative'>
      {/* Dark Background Layer */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
        }}
      />
      <div className='relative z-10'>
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "transparent",
            radius: 0,
            zIndex: 9999,
            followSpeed: 1.5,
            backgroundElement: (
              <div>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00c3ff"
                  strokeWidth="1.2"
                  style={{
                    filter: 'drop-shadow(0px 0px 4px rgba(0, 195, 255, 0.6)) drop-shadow(0px 2px 4px rgba(0,0,0,0.8))'
                  }}
                >
                  <path d="M12 2 L12 9" strokeLinecap="round" />
                  <path d="M12 15 L12 22" strokeLinecap="round" />
                  <path d="M2 12 L9 12" strokeLinecap="round" />
                  <path d="M15 12 L22 12" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="1.5" stroke="none" fill="#00c3ff" />
                </svg>
              </div>
            )
          }}
        >
          <RouterProvider router={router} />
        </UpdateFollower>
      </div>
    </main>
  )
}

export default App
