import React from 'react';

// Navigation
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Custom Components
import Notes from '../containers/Notes';
import Archieve from '../containers/Archieve';
import Bin from '../containers/Bin';
import Header from '../components/Bar/Header';
import SearchList from '../containers/SearchList';

const Navigation = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Notes />} />
          <Route exact path='/archieve' render={() => <Archieve />} />
          <Route exact path='/bin' render={() => <Bin />} />
          <Route exact path='/search' render={() => <SearchList />} />
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
