import ErrorBoundary from "../src/ErrorBoundary";
import FormColumn from "../src/FormColumn";
import Alert from "../src/Alert";
import Badge from "../src/Badge";
import InputGroup from "../src/InputGroup";
import Select from "../src/Select";
import {BootstrapFlexAlign} from "../src";
import FormCheck from "../src/FormCheck";
import PaginationTest from "./PaginationTest";
import * as React from "react";
import {useState} from "react";


const TablesTest = () => {
    const [count, setCount] = useState(1);
    const [align, setAlign] = useState<BootstrapFlexAlign>('baseline');
    const [checked, setChecked] = useState(true);

    return (
        <>
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
        </>
    )
}

export default TablesTest;
