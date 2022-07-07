import './App.css';
import Blog from './components/Blog';
import Header from './components/Header';
import BlogDetail from './components/BlogDetail';
import { Router, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Footer from './components/Footer';

export const customHistory = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <Router history={customHistory}>
        <Header />
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/BlogDetail/:info/" component={BlogDetail} />
        </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
