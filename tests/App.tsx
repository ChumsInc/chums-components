import {useState} from "react";
import AppTabs, {tab1, tab2} from "./AppTabs";
import TablesTest from "./TablesTest";
import NavTest from "./NavTest";

export default function App() {
    const [currentTab, setCurrentTab] = useState(tab1.id);
    return (
        <div className="container">
            <AppTabs currentTabID={currentTab} onSelectTab={setCurrentTab}/>
            <div>CurrentTab: {currentTab}</div>
            {currentTab === tab1.id && (<TablesTest/>)}
            {currentTab === tab2.id && (<NavTest/>)}
        </div>
    )
}
