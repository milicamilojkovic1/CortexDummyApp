import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './state/GlobalState';
import { Home } from './components/Home';
import { AddProduct } from './components/AddProduct';
import { EditProduct } from './components/EditProduct';
import { ViewProduct } from './components/ViewProduct';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddProduct} exact />
          <Route path="/edit/:id" component={EditProduct} exact />
          <Route path="/view/:id" component={ViewProduct} exact />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
