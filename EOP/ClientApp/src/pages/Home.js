import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';
import TOCWidget from '../components/TOCWidget';
import "../css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Home() {

    const [isTOCWidgetFrozen, setisTOCWidgetFrozen] = useState(true);
    const [isTOCWidgetDraggable, setIsTOCWidgetDraggable] = useState(false);
    const [isTOCWidgetResizable, setIsTOCWidgetResizable] = useState(false);

    const handleTOCWidgetFreeze = () => {
        setisTOCWidgetFrozen(!isTOCWidgetFrozen);
        setIsTOCWidgetDraggable(!isTOCWidgetDraggable);
        setIsTOCWidgetResizable(!isTOCWidgetResizable);
    }

    const layout = [
        { i: 'a', x: 0, y: 0, w: 8, h: 14, minW: 8, isDraggable: isTOCWidgetDraggable, isResizable: isTOCWidgetResizable}
    ];

    return (
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
            <div key="a">
                <TOCWidget isStatic={isTOCWidgetFrozen} toggleStatic={handleTOCWidgetFreeze}/>
            </div>
        </GridLayout>
    );
}
