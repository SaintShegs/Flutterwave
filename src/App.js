import './App.css';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';
import BlogDetail from './components/BlogDetail';
import { Router, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Footeer2 from './components/Footeer2';

export const customHistory = createBrowserHistory()

function App() {
  return (
    <div className="App">
    {/* <Suspense fallback={<p>...Loading</p>}> */}

      <Router history={customHistory}>
        <Header />

        <Switch>
          <Route exact path="/" component={Blog} />

          <Route path="/BlogDetail/:info/" component={BlogDetail} />
        </Switch>



      <Footeer2/>
        {/* <Footer /> */}
      </Router>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
