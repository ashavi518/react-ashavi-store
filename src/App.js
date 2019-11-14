import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar" 
import ProductList from "./Components/ProductList";
import Product  from "./Components/Product";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import Modal from "./Components/Modal";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
      return (
        <Router>
          <div>
           <Navbar/>
            
            <Switch>
                 <Route exact path="/" component={ProductList} />
                 <Route path="/cart" component={Cart} />
                 <Route path="/details" component={Details} />
                 <Route path="/product" component={Product} />
                  <Route component={Default} />
            </Switch>  
            <Modal />       
         </div>
        </Router>
      );
  }  


export default App;