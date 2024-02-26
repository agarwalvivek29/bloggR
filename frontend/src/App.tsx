import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login, Register } from './pages/AuthPages'
import { Wrapper } from './components/basics'
import { Suspense } from 'react'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'

function App() {

  return (
    <Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<div></div>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Wrapper>
  )
}

export default App