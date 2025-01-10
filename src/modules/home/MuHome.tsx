import { Box, Button } from '@mui/material';

export const MuHome = () => {
  return (
    <Box
      sx={{
        height: '90vh',
        backgroundImage: 'url(/homeBg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100% - 64px)',
          color: '#000',
        }}
      >
        <Button variant="contained" color="primary" size="large" href='https://plataforma.mensajerosurbanos.com/mx/ext/cotizar-servicio' target='_black'>
          Go!
        </Button>
      </Box>
    </Box>
  );
};