import { Box } from "@mui/material";
import { HolidaysDataGrid } from "../../components";

export const MuColombia = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh',
                backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, .4), rgba(255, 255, 255, .7)), url(/colombiaBG.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <HolidaysDataGrid />
        </Box>
    );
};
