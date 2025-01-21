import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Rating } from '@mui/material';
import { ProcessedData } from '../types/inventory';

interface Props {
    data: ProcessedData[];
}

const DataGridComponent: React.FC<Props> = ({ data }) => {
    console.log('Data to Print', data);

    const columns: GridColDef[] = [
        { field: 'productName', headerName: 'Product Name', flex: 1 },
        { field: 'description', headerName: 'Description', flex: 2 },
        {
            field: 'price',
            headerName: 'Price',
            flex: 1,
            type: 'number',
            align: 'left',
            headerAlign: 'left',
            valueFormatter: (params) =>
                new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                }).format(params),
        },
        {
            field: 'totalQuantity',
            headerName: 'Total Quantity',
            flex: 1,
        },
        {
            field: 'totalPrice',
            headerName: 'Total Price',
            flex: 1,
            type: 'number',
            align: 'left',
            headerAlign: 'left',
            valueFormatter: (params) =>
                new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                }).format(params),
        },
        {
            field: 'averageRating',
            headerName: 'Average Rating',
            flex: 1,
            renderCell: ({ value }) => (
                <Rating value={value} precision={0.5} readOnly />
            ),
        },
    ];
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data.map((item, index) => ({ id: index, ...item }))}
                columns={columns}
                sx={{
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: '#F1FBFF',
                        color: '#63686D',
                        fontWeight: 600,
                        fontFamily: 'Roboto',
                    },
                    '& .MuiDataGrid-row': {
                        color: '#37393D',
                        fontWeight: 400,
                        fontFamily: 'Roboto',
                    },
                }}
            />
        </div>
    );
};

export default DataGridComponent;