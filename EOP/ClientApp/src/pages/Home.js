import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';
import TOCWidget from '../components/TOCWidget';
import OrgWidget from '../components/OrgWidget';
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

    const [isOrgWidgetFrozen, setisOrgWidgetFrozen] = useState(true);
    const [isOrgWidgetDraggable, setIsOrgWidgetDraggable] = useState(false);
    const [isOrgWidgetResizable, setIsOrgWidgetResizable] = useState(false);

    const handleOrgWidgetFreeze = () => {
        setisOrgWidgetFrozen(!isOrgWidgetFrozen);
        setIsOrgWidgetDraggable(!isOrgWidgetDraggable);
        setIsOrgWidgetResizable(!isOrgWidgetResizable);
    }

    const handleOrgChartEnter = () => {
        var obj = document.getElementsByTagName('body');
        obj[0].style.overflow = "hidden";
        obj[0].style.margin = "auto 17px auto auto"; //size of the scrollbar in each browser
    }

    const handleOrgChartLeave = () => {
        var obj = document.getElementsByTagName('body');
        obj[0].style.overflow = "auto";
        obj[0].style.margin = "auto";
    }

    const layout = [
        { i: 'a', x: 0, y: 0, w: 8, h: 14, minW: 8, isDraggable: isTOCWidgetDraggable, isResizable: isTOCWidgetResizable },
        { i: 'b', x: 0, y: 1, w: 8, h: 10, isDraggable: isOrgWidgetDraggable, isResizable: isOrgWidgetResizable }
    ];

    return (
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
            <div key="a">
                <TOCWidget isStatic={isTOCWidgetFrozen} toggleStatic={handleTOCWidgetFreeze}/>
            </div>
            <div key="b" onMouseEnter={handleOrgChartEnter} onMouseLeave={handleOrgChartLeave}>
                <OrgWidget isStatic={isOrgWidgetFrozen} toggleStatic={handleOrgWidgetFreeze} />
            </div>
        </GridLayout>
    );
}
