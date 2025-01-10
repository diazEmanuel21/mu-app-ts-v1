import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const actionRoutes = ['Home', 'Colombia', 'Mexico'];

export const AppBarMU = () => {
    const navigate = useNavigate();

    const onNextPage = (route: string) => {
        const currentPage = route.toLowerCase();
        navigate(`/${currentPage}`);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        {
                            actionRoutes.map((route, index) => <Button key={index} onClick={() => onNextPage(route)}>{route}</Button>)
                        }
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
