import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import Categories from './ListCategories';
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductDetails from './ProductDetails';
import CategoryDetails from './CategoryDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/products'>
                <Products />
              </Route>
              <Route path='/create-product'>
                <AddProduct />
              </Route>
              <Route path='/products/:id'>
                <ProductDetails />
              </Route>
              <Route path='/categories'>
                <Categories />
              </Route>
              <Route path='/create-category'>
                <AddCategory />
              </Route>
              <Route path='/fetch-category/:id'>
                <CategoryDetails />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>   
  );
}

export default App;
