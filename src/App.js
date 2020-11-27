import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { About } from './components/about'
import { Home } from './components/home'
import { Contact } from './components/contact'
import { Projects } from './components/projects'
import { Skills } from './components/skills'
import { MyNavbar } from './components/navbar'
import { Logo } from './components/logo'
import './App.css';

export const App = props => {
  return (
    <Router>
    <div className="App">
      <MyNavbar />
      <Logo />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
      </Switch>
    </div>
    </Router>
  );
}
