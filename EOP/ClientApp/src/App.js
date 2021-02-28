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
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/gridComp' component={TestGridComp} />
                <Route path='/TOCFullscreen' component={TOCFullscreen} />
                <Route path='/OrgChartFullscreen' component={OrgChartFullscreen} />
            </Layout>
        );
    }
}
