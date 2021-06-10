import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';
import Diploma from './Pages/Diploma';
import Presentation from './Pages/Presentation';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import './page.scss';

const Page = () => (
  <div className="page-container">
    <nav className="nav">
      <Link to="/">
        Présentation
      </Link>
      <Link to="/diplomes">
        Diplômes
      </Link>
      <Link to="/realisations">
        Réalisations
      </Link>
      <Link to="/competences">
        Compétences
      </Link>
      <Link to="/contact">
        Contact
      </Link>
    </nav>
    <Switch>
      <Route exact path="/">
        <Presentation />
      </Route>
      <Route exact path="/diplomes">
        <Diploma />
      </Route>
      <Route exact path="/realisations">
        <Projects />
      </Route>
      <Route exact path="/competences">
        <Skills />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  </div>
);

export default Page;
