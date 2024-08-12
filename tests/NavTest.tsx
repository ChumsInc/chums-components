import React, {useState} from 'react';
import {NavList, FormCheck, NavVariant} from "../dist";
import {tab1, tab2, tab3} from "./AppTabs";

const tabs = [tab1, tab2, tab3];
export default function NavTest() {
    const [variant, setVariant] = useState<NavVariant | null>(null);
    const [direction, setDirection] = useState<'horizontal' | 'vertical'>('horizontal');
    const [currentTab, setCurrentTab] = useState(tab1.id);

    return (
        <div>
            <div>
                <label className="me-3">Style</label>
                <FormCheck type="radio" checked={variant === null} inline label="Text"
                           onChange={() => setVariant(null)}/>
                <FormCheck type="radio" checked={variant === 'tabs'} inline label="Tabs"
                           onChange={() => setVariant('tabs')}/>
                <FormCheck type="radio" checked={variant === 'pills'} inline label="Pills"
                           onChange={() => setVariant('pills')}/>
                <FormCheck type="radio" checked={variant === 'underline'} inline label="Underline"
                           onChange={() => setVariant('underline')}/>
            </div>
            <div>
                <label className="me-3">Direction</label>
                <FormCheck type="radio" checked={direction === 'horizontal'} inline label="Horizontal"
                           onChange={() => setDirection('horizontal')}/>
                <FormCheck type="radio" checked={direction === 'vertical'} inline label="Vertical"
                           onChange={() => setDirection('vertical')}/>

            </div>
            <hr/>
            <div>
                <NavList items={tabs}
                         currentTab={currentTab} onChange={(id) => setCurrentTab(id)}
                         variant={variant ?? undefined}
                         vertical={direction === 'vertical'}
                />
                <div>
                    Variant: {JSON.stringify(variant)},
                    Direction: {JSON.stringify(direction)},
                    CurrentTab: {JSON.stringify(currentTab)}
                </div>
            </div>
        </div>
    )
}
