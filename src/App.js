import React, { Component } from 'react';
import Home from './components/pages/Users';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Comments from './components/pages/Comments';
import Posts from './components/pages/Posts';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/posts/:id" component={Posts} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/comments/:id" component={Comments} />
          <Route component={NotFound} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    );
  }

  
}

function NotFound() {
  return (
    <div className="App">
      <h1>Page Does Not Exist</h1>
    </div>
  )
}

export default App;
