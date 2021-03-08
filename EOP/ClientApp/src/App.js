import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import TOCFullscreen from './pages/TOCFullscreen';
import OrgChartFullscreen from './pages/OrgChartFullscreen';
import TrainingFullscreen from './pages/TrainingFullscreen';
import NotificationFullscreen from './pages/NotificationFullscreen';
import './custom.css'


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/EOP' component={Home} />
                <Route path='/EOP/TOCFullscreen' component={TOCFullscreen} />
                <Route path='/EOP/OrgChartFullscreen' component={OrgChartFullscreen} />
                <Route path='/EOP/TrainingFullscreen' component={TrainingFullscreen} />
                <Route path='/EOP/NotificationFullscreen' component={NotificationFullscreen} />
            </Layout>
        );
    }
}
