import './App.css';
import Header from './components/Header';
import Location from './components/Location';
import { Switch, Route } from 'react-router-dom';
import Favorites from './components/Favorites';
import IPdataContextProvider from './contexts/IPdata';
import Locations from './components/Locations';


const App = () => {
  return (
    <div>
      <Header />
      <IPdataContextProvider>
        <Switch>
          <Route path='/favorites' component={Favorites}/>
          <Route path='/locations' component={Locations}/>
          <Route path='/' exact component={Location}/>
        </Switch>
      </IPdataContextProvider>
    </div>
  );
}

export default App;
