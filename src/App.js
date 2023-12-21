
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import RestView from './Pages/RestView';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Header/>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/restaurentview/:id' element={<RestView/>}/>


</Routes>
<Footer/>

    </div>
  );
}

export default App;
