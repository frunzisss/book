import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LogInPage from './components/pages/LogInPage';

const App = () => (<div className="ui container">
  <Route path="/" exact component = {HomePage} />
  <Route path="/login" exact component = {LogInPage} />
</div>
);

export default App;
