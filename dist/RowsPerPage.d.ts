import React from 'react';
export declare const defaultRowsPerPageValues: number[];
export interface RowsPerPageProps {
    value: number;
    pageValues?: number[];
    onChange: (value: number) => void;
}
declare const RowsPerPage: React.FC<RowsPerPageProps>;
export default RowsPerPage;
