import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Footer from "./components/Footer"
import ScrollTop from './components/ScrollTop';

function App() {
  
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail/>} />
    </Routes>
    <Footer />
    <ScrollTop />
    </>
  );
}

export default App;