import './App.css'
import About from './components/about'
import Students from './components/students'
import Home from './components/home'
import {BrowserRouter,Routes,Link,Route} from 'react-router-dom'



function App() {


  return (
  <main>
    <div className='text-center'>
    <h1>Hello World</h1>
    </div>
    <BrowserRouter>
    <ul className='list'>
      <li><Link to={'/'}> home page</Link> </li>
      <li><Link  to={'/sobre'}> about </Link></li>
      <li><Link to={'/students'}>students</Link></li>
    </ul>
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
