import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import TOCWidget from '../components/TOCWidget';
import OrgWidget from '../components/OrgWidget';
import TrainingWidget from '../components/TrainingWidget';
import NotificationWidget from '../components/NotificationWidget';
import "../css/styles.css";

export default function Home() {

    const [isTOCWidgetStatic, setIsTOCWidgetStatic] = useState(true);
    const [isOrgWidgetStatic, setIsOrgWidgetStatic] = useState(true);
    const [isTrainingWidgetStatic, setIsTrainingWidgetStatic] = useState(true);
    const [isNotificationWidgetStatic, setIsNotificationWidgetStatic] = useState(true);

    const [layout, setLayout] = useState([
        { i: 'a', x: 0, y: 9, w: 8, h: 14, minW: 8, static: true },
        { i: 'b', x: 8, y: 9, w: 8, h: 14, minW: 8, static: true },
        { i: 'c', x: 0, y: 0, w: 16, h: 9, minW: 8, static: true },
        { i: 'd', x: 8, y: 23, w: 8, h: 14, minW: 8, static: true }
    ]);

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
                break;
            case "c":
                setIsNotificationWidgetStatic(!isNotificationWidgetStatic);
                break;
            case "d":
                setIsTrainingWidgetStatic(!isTrainingWidgetStatic);
            default:
                break;
        }

        setLayout(newLayout);
    };

    function handleLayoutChange(layout) {
        setLayout(layout);
    };

    return (
        <GridLayout className="layout" layout={layout} cols={16} rowHeight={30} width={1600} onLayoutChange={handleLayoutChange}>
            <div key="a">
                <TOCWidget isStatic={isTOCWidgetStatic} toggleStatic={() => toggleWidgetStatic(layout, "a")} />
            </div>
            <div key="b">
                <OrgWidget isStatic={isOrgWidgetStatic} toggleStatic={() => toggleWidgetStatic(layout, "b")} />
            </div>
            <div key="c">
                <NotificationWidget isStatic={isNotificationWidgetStatic} toggleStatic={() => toggleWidgetStatic(layout, "c")} />
            </div>
            <div key="d">
                <TrainingWidget isStatic={isTrainingWidgetStatic} toggleStatic={() => toggleWidgetStatic(layout, "d")} />
            </div>
        </GridLayout>
    );
}
