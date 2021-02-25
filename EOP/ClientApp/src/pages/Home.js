import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import TOCWidget from '../components/TOCWidget';
import "../css/styles.css";


export default function Home() {

    const layout = [
        { i: 'a', x: 0, y: 0, w: 6, h: 6}
    ];

    return (
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
            <div key="a">
                <TOCWidget />
            </div>
        </GridLayout>
    );
}
