import React from 'react'
// import ItemCount from './components/ItemCount'
import ItemList from './components/ItemList/ItemList'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import Contacto from './components/Contacto/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


import FirebaseComponent from './components/FirebaseComponent/FirebaseComponent';
import {  DataContext } from './components/Context/CartContext';









const App = () => {
  return (
    <div>
      <DataContext.Provider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemList/> }/>
            <Route path='/productos/:categoryId' element={ <ItemList/> }/>
            <Route path='/productos/:categoryId/:otroParam' element={ <ItemList/> }/>
            <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
            <Route path='/contacto' element={<Contacto/>}/>
            {/* <Route path='/cart' element={<Cart/>}/> */}
            <Route path='/firebase' element={<FirebaseComponent/>}/>
            
            <Route path="*" element={ <Navigate to=" / "/>}/>
           
            
          </Routes>

          
        </BrowserRouter>
      </DataContext.Provider>
       
      
     
    </div>
  )
}

export default App
