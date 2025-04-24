import './App.css'
import About from './components/about'
import Students from './components/students'
import Home from './components/home'
import {BrowserRouter,Routes,Link,Route} from 'react-router-dom'




function App() {


  return (

  <main>
   
    <div className='text-center'>
    <h1>list student</h1>
    </div>
    <BrowserRouter>
    <div className='navbar'>
    <ul className='list'>
      <li className='ancora'><Link to={'/'}> home page</Link> </li>
      <li className='ancora'><Link  to={'/sobre'}> about </Link></li>
      <li className='ancora'><Link to={'/students'}>students</Link></li>
    </ul>
    </div>
   
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/sobre' element={<About></About>}></Route>
      <Route path='/students' element={<Students></Students>}></Route>
     </Routes>

    </BrowserRouter>
    
    <div class="left-light"></div>
    <div class="right-light"></div>
    
  
  </main>
   
  )
}

export default App
