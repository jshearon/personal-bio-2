import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { About } from './components/about'
import { Home } from './components/home'
import { Contact } from './components/contact'
import { Projects } from './components/projects'
import { Skills } from './components/skills'
import { MyNavbar } from './components/navbar'
import { Logo } from './components/logo'
import { LogoProvider } from './components/logoProvider'
import './App.scss';

export const App = props => {
  return (
    <Router>
    <div className="App">
      <MyNavbar className="navbarText" />
      <LogoProvider>
        <Logo />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/" component={Home} />
        </Switch>
      </LogoProvider>
    </div>
    </Router>
  );
}
