import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import TOCWidget from '../components/TOCWidget';
import OrgWidget from '../components/OrgWidget';
import "../css/styles.css";

export default function Home() {

    const [isTOCWidgetStatic, setIsTOCWidgetStatic] = useState(true);
    const [isOrgWidgetStatic, setIsOrgWidgetStatic] = useState(true);

    const [layout, setLayout] = useState([
        { i: 'a', x: 0, y: 0, w: 8, h: 14, minW: 8, static: true },
        { i: 'b', x: 8, y: 0, w: 8, h: 14, minW: 8, static: true }
    ]);

    const handleOrgChartEnter = () => {
        document.body.style.overflow = "hidden";
        //obj[0].style.margin = "auto 17px auto 17px"; //size of the scrollbar in each browser
    }

    const handleOrgChartLeave = () => {
        document.body.style.overflow = "auto";
        //obj[0].style.margin = "auto";
    }

    function toggleWidgetStatic(layout, key) {
        console.log("set " + key + " to static");
        var newLayout = layout.map(l => {
            return { ...l, static: (l.i === key) ? !l.static : l.static }
        });

        switch (key) {
            case "a":
                setIsTOCWidgetStatic(!isTOCWidgetStatic);
                break;
            case "b":
                setIsOrgWidgetStatic(!isOrgWidgetStatic);
            default:
        }

        setLayout(newLayout);
    };

    function handleLayoutChange(layout) {
        console.log("layout change");
        setLayout(layout);
    };

    return (
        <GridLayout className="layout" layout={layout} cols={16} rowHeight={30} width={1600} onLayoutChange={handleLayoutChange}>
            <div key="a">
                <TOCWidget isStatic={isTOCWidgetStatic} toggleStatic={() => toggleWidgetStatic(layout,"a")}/>
            </div>
            <div key="b" onMouseEnter={handleOrgChartEnter} onMouseLeave={handleOrgChartLeave}>
                <OrgWidget isStatic={isOrgWidgetStatic} toggleStatic={() => toggleWidgetStatic(layout,"b")} />
            </div>
        </GridLayout>
    );
}
