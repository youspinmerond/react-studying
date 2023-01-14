import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Registration from './pages/Registration'
import Articles from './pages/Articles'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reg' element={<Registration/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
