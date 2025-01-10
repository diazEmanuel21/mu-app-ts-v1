import { useNavigate } from 'react-router-dom';

import {
    AppBar, Box,
    Toolbar,
    Button,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';

import ColombiaFlag from '/flags/colombia.png'; 
import MexicoFlag from '/flags/mexico.png';

const actionRoutes = ['Home', 'Colombia', 'Mexico'];

export const AppBarMU = () => {
    const navigate = useNavigate();

    const onNextPage = (route: string) => {
        const currentPage = route.toLowerCase();
        navigate(`/${currentPage}`);
    };

    const routeIcons: Record<string, JSX.Element> = {
        Home: <HomeIcon />,
        Colombia: <img src={ColombiaFlag} alt="Colombia" style={{ width: 20, height: 20 }} />,
        Mexico: <img src={MexicoFlag} alt="Mexico" style={{ width: 20, height: 20 }} />,
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        {actionRoutes.map((route, index) => (
                            <Button
                                key={index}
                                onClick={() => onNextPage(route)}
                                variant="contained"
                                startIcon={routeIcons[route] || <HomeIcon />} 
                            >
                                {route}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
