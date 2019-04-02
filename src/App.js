import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Navigon from './components/Navigon';
import ErrorPage from "./components/ErrorPage";

class App extends Component {

    render() {

        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route path="/:lang(en|lt)" component={Navigon} />
                        <Route path='*' component={ErrorPage} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App
