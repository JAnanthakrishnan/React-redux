import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import CoursesPage from './components/courses/CoursesPage';
import './App.css';

function App() {
  return (
    <div id='app'>
      <Router>
        <div className='container-fluid'>
          <Header />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/courses' component={CoursesPage} />
            <Route path='/about' component={AboutPage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
