import React from 'react';
import './App.scss';

import {Route, Switch} from 'react-router-dom';
import TheNavigation from './components/TheNavigation';
import TheHome from "./views/TheHome";
import TheTunes from "./views/TheTunes";
import TheAbout from "./views/TheAbout";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TheNavigation/>
            </header>
            <main className="content">
                <Switch>
                    <Route path="/" component={TheHome} exact></Route>
                    <Route path="/tunes" component={TheTunes}></Route>
                    <Route path="/about" component={TheAbout}></Route>
                </Switch>
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default App;
