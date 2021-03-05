import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import { FetchData } from './pages/FetchData';
import { Counter } from './pages/Counter';
import { TestGridComp } from './components/TestGridComp';
import TOCFullscreen from './pages/TOCFullscreen';
import OrgChartFullscreen from './pages/OrgChartFullscreen';
import './custom.css'


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/EOP' component={Home} />
                <Route path='/EOP/gridComp' component={TestGridComp} />
                <Route path='/EOP/TOCFullscreen' component={TOCFullscreen} />
                <Route path='/EOP/OrgChartFullscreen' component={OrgChartFullscreen} />
            </Layout>
        );
    }
}
