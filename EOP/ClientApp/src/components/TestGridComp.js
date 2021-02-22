import GridLayout from 'react-grid-layout';
import React, { Component } from 'react';
import "../css/styles.css";

export class TestGridComp extends Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        const layout = [
            { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
            { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
            { i: 'c', x: 1, y: 2, w: 1, h: 2 }
        ];
        return (
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                <div style={{backgroundColor: 'blue'}} key="a">a</div>
                <div style={{ backgroundColor: 'black' }} key="b">b</div>
                <div style={{ backgroundColor: 'red' }} key="c">c</div>
            </GridLayout>
        )
    }
}