import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components'

import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navigation from './Navigation';
import Projects from './Projects';

import './App.css'

const StyledAbout = styled(About)`
height: 150px;
background-color:aquamarine;
`

function App() {
    return (
        <Router>
            <div>Welcome to React-router!</div>
            <Navigation />
            <Switch>
                <Route path='/about'>
                    <StyledAbout name='Fadil' />
                </Route>
                <Route path='/projects'>
                    <Projects />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>


            {/*  <About />
            <Projects />
            <Contact /> */}

        </Router>
    );
}

export default App;