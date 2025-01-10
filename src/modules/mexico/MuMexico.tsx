import { Box } from "@mui/material"
import { HolidaysDataGrid } from "../../components"

export const MuMexico = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh',
                backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, .6), rgba(255, 255, 255, .9)), url(/mexicoBG.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <HolidaysDataGrid country="MX" />
        </Box>
    )
}
