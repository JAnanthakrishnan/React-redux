import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import CoursesPage from './components/courses/CoursesPage';
import ManageCoursePage from './components/courses/ManageCoursePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            <Route path='/course/:slug' component={ManageCoursePage} />
            <Route path='/course' component={ManageCoursePage} />
            <Route component={PageNotFound} />
          </Switch>
          <ToastContainer autoClose={3000} hideProgressBar />
        </div>
      </Router>
    </div>
  );
}

export default App;
