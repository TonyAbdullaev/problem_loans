import React from 'react';

import './App.css';
import {Header} from "./components/UI/Header";
import {NavigationBar} from "./components/UI/NavigationBar";
import {AppRouter} from "./Router/AppRouter";

const App = () => {
    return (
        <div>
            <AppRouter />
        </div>
    );
};

export default App;
