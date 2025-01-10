import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { getHolidays, Holiday } from '../api/calendarService';
import { Card, CircularProgress } from '@mui/material';

interface HolidaysParams {
    country?: string;
    year?: number;
}

export const HolidaysDataGrid: React.FC<HolidaysParams> = ({
    country = 'CO',
    year = 2025,
}) => {
    const [holidays, setHolidays] = useState<Holiday[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const today = new Date();

    useEffect(() => {
        const fetchHolidays = async () => {
            try {
                setLoading(true);
                const holidaysData = await getHolidays(country, year);
                setHolidays(holidaysData);
                setError(null);
            } catch (err) {
                setError('Error al obtener los días festivos.');
            } finally {
                setLoading(false);
            }
        };

        fetchHolidays();
    }, [country, year]);

    const columns: GridColDef[] = [
        {
            field: 'holidayName',
            headerName: 'Holiday Name',
            width: 200,
        },
        {
            field: 'dateHoliday',
            headerName: 'Date',
            width: 150,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 300,
        },
    ];

    const rows = holidays.map((holiday, index) => ({
        id: index + 1,
        holidayName: holiday.name,
        dateHoliday: holiday.date.iso.split('T')[0], // Formato de fecha "YYYY-MM-DD"
        description: holiday.description || 'No description available',
        isNextHoliday:
            new Date(holiday.date.iso).getTime() > today.getTime() &&
            holidays
                .filter((h) => new Date(h.date.iso).getTime() > today.getTime())
                .sort((a, b) => new Date(a.date.iso).getTime() - new Date(b.date.iso).getTime())[0].date.iso ===
            holiday.date.iso,
    }));

    return (
        <Box>
            {loading && <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {!loading && !error && (
                <Card>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSizeOptions={[5, 10, 20]}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        getRowClassName={(params) =>
                            params.row.isNextHoliday ? 'next-holiday' : ''
                        }
                        checkboxSelection={false}
                        disableRowSelectionOnClick
                    />
                </Card>
            )}
            <style>
                {`
          .next-holiday {
            color: red;
          }
        `}
            </style>
        </Box>
    );
};