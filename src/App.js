import 'bootstrap/dist/css/bootstrap.min.css'
import Showcase from './components/Showcase'

import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='About' element={<About />} />
        <Route path='Showcase' element={<Showcase />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Portfolio' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
