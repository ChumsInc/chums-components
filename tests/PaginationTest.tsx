import * as React from "react";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import numeral from "numeral";
import {languages} from './languages'
import {BootstrapColor, SortableTableField, SortProps} from "../src/types";
import SortableTable from "../src/SortableTable/SortableTable";
import Input from "../src/Input/Input";
import SpinnerButton from "../src/SpinnerButton/SpinnerButton";
import ItemDataList from "../src/ItemDataList/ItemDataList";
import ToggleButton from "../src/ToggleButton/ToggleButton";
import LoadingProgressBar from "../src/LoadingProgressBar/LoadingProgressBar";
import TablePagination from "../src/TablePagination/TablePagination";
import {Badge} from "../src";
import TestBadge from "./TestBadge";


interface TableDataRow {
    id: number,
    value: number,
    color: string,
    bgColor: string,
}

export type TableDataRowField = keyof TableDataRow;

export interface TestSorterProps extends SortProps {
    field: TableDataRowField,
}

const testTableSorter = ({field, ascending}: TestSorterProps) => (a: TableDataRow, b: TableDataRow):number => {
    return (
        a[field] === b[field]
            ? (a.id - b.id)
            : ((a[field] ?? '') === (b[field] ?? '') ? 0 : ((a[field] ?? '') > (b[field] ?? '') ? 1 : -1))
    ) * (ascending ? 1 : -1);
}

const colors: BootstrapColor[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark',];

const buildDataSet = (): TableDataRow[] => {
    return new Array(1000)
        .fill(null)
        .map((el, index) => ({
            id: index,
            value: Math.random() * 100,
            color: colors[index % 8],
            bgColor: colors[Math.floor(Math.random() * 8)]
        }))
}

const ValueTitle:React.FC = () => {
    const now = new Date();
    return (
        <span>Value @ {now.toLocaleTimeString()}</span>
    )
}

const tableFields: SortableTableField[] = [
    {field: 'id', title: 'ID', sortable: true},
    {field: 'color', title: 'Color', sortable: true, className: (row) => `text-${colors[Math.floor(row.id % 8)]}`},
    {field: 'bgColor', title: 'Background Color', sortable: true, render: (row) => <span>table-{row.bgColor}</span>},
    {field: 'bgColor', title: 'Badge Test', sortable: false, render: (row) => <TestBadge value={row.value} /> },
    {field: 'value', title: (<ValueTitle />), sortable: true, className: 'right', render: (row) => numeral(row.value).format('0,0.0000')},
];

interface TableSortProps extends SortProps {
    field: keyof TableDataRow
}

const rowColor = (row: TableDataRow) => `table-${row.bgColor}`;

const TFoot = ({value}: { value: number }) => (
    <tfoot>
    <tr>
        <th>Total</th>
        <td colSpan={2} />
        <th className="right">{numeral(value).format('0,0.0000')}</th>
    </tr>
    </tfoot>
)

const dataFilter = (filter: number) => (row:TableDataRow) => row.value <= filter;

const initialFilter = 100;

const PaginationTest: React.FC = () => {
    let rebuildTimer: number;
    const filterRef = useRef<HTMLInputElement>(null)
    const [filterValue, setFilterValue] = useState(initialFilter);
    const [filter, setFilter] = useState(initialFilter);
    const [loading, setLoading] = useState(false);
    const [filterTimer, setFilterTimer] = useState(0);
    const [toggleCheck, setToggleCheck] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [sort, setSort] = useState<TableSortProps>({field: 'id', ascending: true});
    const [selected, setSelected] = useState<TableDataRow>({id: 0, value: 0, bgColor: '', color: ''});

    const [tableData, setTableData] = useState<TableDataRow[]>([]);
    const [filteredData, setFilteredData] = useState<TableDataRow[]>([])
    const [pageData, setPageData] = useState<TableDataRow[]>([]);

    useEffect(() => {
        const initialPage = 0;
        const initialRowsPerPage = 25;
        const initialSort:SortProps<TableDataRow> = {field: 'id', ascending: true};

        setPage(initialPage);
        setRowsPerPage(initialRowsPerPage);

        setSort(initialSort);

        const data = buildDataSet();
        console.log('[] data.length', data.length)
        setTableData(data);

        const _filteredData = [...data].sort(testTableSorter(sort)).filter(dataFilter(initialFilter));
        console.log('[] filteredData.length', _filteredData.length)
        setFilteredData(_filteredData);

        const _pageData = _filteredData.slice(initialPage * initialRowsPerPage, initialPage * initialRowsPerPage + initialRowsPerPage);
        console.log('[] firstPage.length', _pageData.length)
        setPageData(_pageData);

        return () => {
            window.clearTimeout(rebuildTimer);
            window.clearTimeout(filterTimer);
        }
    }, []);

    useEffect(() => {
        const filteredData = [...tableData].sort(testTableSorter(sort)).filter(dataFilter(filter));
        setFilteredData(filteredData);
        setPageData(filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
    }, [filter, sort]);

    useEffect(() => {
        setPageData(filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
    }, [rowsPerPage]);

    useEffect(() => {
        setPageData(filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
    }, [page]);

    const total = pageData.reduce((acc, row) => acc + row.value, 0);

    const rebuildData = () => {
        window.clearTimeout(rebuildTimer);
        setLoading(true);
        rebuildTimer = window.setTimeout(() => {
            setPage(0);
            const data = buildDataSet();
            setTableData(data);
            const filteredData = data.sort(testTableSorter(sort)).filter(dataFilter(filter));
            setFilteredData(filteredData);
            setPageData(filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
            setLoading(false);
        }, 2500);
    }

    const [language, setLanguage] = useState('');
    const [search, setSearch] = useState('');

    const tableClickHandler = (row: TableDataRow) => setSelected(row);

    const filterDebounceHandler = () => {
        setFilter(filterRef?.current?.valueAsNumber || initialFilter);
    }
    const filterChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        window.clearTimeout(filterTimer);
        console.log('filterChangeHandler()', ev.target.value);
        setFilterValue(ev.target.valueAsNumber || 0);

        const t = window.setTimeout(filterDebounceHandler, 1000);
        setFilterTimer(t);
    }

    const tfoot = (<TFoot value={total} />);

    const onClickToggle = () => {
        console.log('onClickToggle', toggleCheck, !toggleCheck)
        setToggleCheck(!toggleCheck);
    }

    const onChangeSort = (sort:SortProps) => {
        setSort(sort as TableSortProps);
        setPage(0);
    }

    const onChangeRowsPerPage = (nextRpp:number) => {
        setPage(0);
        setRowsPerPage(nextRpp);
    }
    return (
        <div>
            <div className="row g-3">
                <div className="col-auto"><label className="form-label">Filter Values:</label></div>
                <div className="col-auto">
                    <Input type="number" className="from-control form-control-sm" myRef={filterRef}
                           value={filterValue} onChange={filterChangeHandler} min={0} max={100}/>
                    <small>filter = {filter}</small>
                </div>
                <div className="col-auto">
                    <SpinnerButton spinning={loading} onClick={rebuildData} size="sm" spinnerAfter color="outline-success">
                        Reload Data
                    </SpinnerButton>
                </div>
                <div className="col-auto">
                    <Input type="text" id="default" list="languages" fuzzyList value={language} bsSize="sm"
                           onChange={(ev) => setLanguage(ev.target.value)}/>
                    <datalist id="languages">
                        {languages.map((val, index) => (<option key={index} value={val}/>))}
                    </datalist>
                </div>
                <div className="col-auto">
                    <Input type="text" list="item-search" value={search} bsSize="sm" name="item"
                           onChange={(ev) => setSearch(ev.target.value)}/>
                    <ItemDataList id="item-search" search={search} delay={50} />
                </div>
                <div className="col-auto">
                    <ToggleButton id={'test-toggle'} size="sm" color="success" checked={toggleCheck}
                                  onChange={onClickToggle}>Toggle this muthafucka!</ToggleButton>
                </div>
            </div>
            {loading && <LoadingProgressBar animated/>}
            <SortableTable fields={tableFields} data={pageData} currentSort={sort} keyField={"id"} size="xs" onChangeSort={onChangeSort}
                           selected={selected.id}
                           rowClassName={rowColor} onSelectRow={tableClickHandler} tfoot={tfoot}/>
            <TablePagination page={page} onChangePage={setPage} bsSize="sm" rowsPerPageOptions={[10, 25, 50]}
                             rowsPerPage={rowsPerPage} onChangeRowsPerPage={onChangeRowsPerPage}
                             count={filteredData.length} showFirst showLast/>
        </div>
    )
}

export default PaginationTest;
