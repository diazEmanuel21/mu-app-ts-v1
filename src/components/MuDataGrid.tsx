import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'holidayName',
        headerName: 'Holiday name',
        width: 150,
        editable: true,
    },
    {
        field: 'dateHoliday',
        headerName: 'Date',
        type: 'date',
        width: 150,
        editable: true,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 110,
        editable: true,
    },
];

const rows = [
    { id: 1, holidayName: 'Snow', dateHoliday: '20/10/2001', description: 'Dia de velitas' },
];

export const MuDataGrid = () => {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}
