import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Earn from './routes/Earn';
import Featured from './routes/Featured';
import Contact from './routes/Contatc'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/earn' element={<Earn />} />
        <Route path='/featured' element={<Featured />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes> 
    </>
  );
}

export default App;
