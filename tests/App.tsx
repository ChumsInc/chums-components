import * as React from "react";

import ErrorBoundary from "../src/ErrorBoundary";
import Alert from "../src/Alert";
import {useState} from "react";
import Badge from "../src/Badge";
import FormColumn from "../src/FormColumn";
import Select from "../src/Select";
import {BootstrapFlexAlign} from "../src/types";
import FormCheck from "../src/FormCheck";
import InputGroup from "../src/InputGroup";
import PaginationTest from "./PaginationTest";
import AppTabs, {tab1} from "./AppTabs";

const App: React.FC = () => {
    const [count, setCount] = useState(1);
    const [align, setAlign] = useState<BootstrapFlexAlign>('baseline');
    const [checked, setChecked] = useState(true);
    const [currentTab, setCurrentTab] = useState(tab1.id);

    return (
        <div className="container">
            <AppTabs currentTabID={currentTab} onSelectTab={setCurrentTab}  />
            <div>CurrentTab: {currentTab}</div>
            <ErrorBoundary>
                <FormColumn label={
                    (<button className="btn btn-outline-secondary" onClick={() => setCount(count + 1)} >Again?</button>)
                } align={align}>
                    {count > 0 && (
                        <Alert color="success" title="Yay!" canDismiss onDismiss={() => setCount(0)} context="test/app">
                            Alert component is working.
                            {count > 1 && <Badge color="success">{count}</Badge>}
                        </Alert>
                    )}
                </FormColumn>
                <FormColumn label="Align" align={align}>
                    <InputGroup bsSize="sm">
                        <span className={`input-group-text bi-align-${align}`} />
                        <Select bsSize="sm" value={align}
                                onChange={(ev) => setAlign(ev.target.value as BootstrapFlexAlign)}>
                            <option value="start">start</option>
                            <option value="end">end</option>
                            <option value="center">center</option>
                            <option value="baseline">Baseline</option>
                            <option value="stretch">stretch</option>
                        </Select>
                    </InputGroup>
                </FormColumn>
                <FormColumn label="Checkbox & Radio test">
                    <FormCheck label={'checked'} checked={checked} onClick={() => setChecked(!checked)} type={'checkbox'} inline />
                    <FormCheck label={'start'} checked={align === 'start'} onClick={() => setAlign('start')} type={'radio'} inline />
                    <FormCheck label={'end'} checked={align === 'end'} onClick={() => setAlign('end')} type={'radio'} inline />
                    <FormCheck label={'center'} checked={align === 'center'} onClick={() => setAlign('center')} type={'radio'} inline />
                    <FormCheck label={'baseline'} checked={align === 'baseline'} onClick={() => setAlign('baseline')} type={'radio'} inline />
                    <FormCheck label={'stretch'} checked={align === 'stretch'} onClick={() => setAlign('stretch')} type={'radio'} inline />
                </FormColumn>
            </ErrorBoundary>
            <PaginationTest />
        </div>
    )
}
export default App;
