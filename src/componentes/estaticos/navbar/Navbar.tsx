import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';
import React from 'react';
  import { NotificationContainer, NotificationManager } from 'react-notifications';
  import 'react-notifications/lib/notifications.css';


function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const dispatch = useDispatch()
  const navigate = useNavigate();

  function logout() {
    alert('Usuário deslogado com sucesso');
    dispatch(addToken(''))
    navigate('/login');
  }

  let navbarComponent;

  if(token !== '') {
    navbarComponent = (
<AppBar position="static" className="navbar">
        <Toolbar variant="dense">
          <Grid container justifyContent={'space-between'} className='fonte'>
            <Box style={{ cursor: 'pointer' }}>
              <Typography variant="h5" color="inherit" className='fonte'>
                BlogPessoal
              </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
              <Link to="/home">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    home
                  </Typography>
                </Box>
              </Link>
              <Link to="/postagens">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    postagens
                  </Typography>
                </Box>
              </Link>
              <Link to="/temas">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    temas
                  </Typography>
                </Box>
              </Link>
              <Link to="/formularioTema">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    cadastrar tema
                  </Typography>
                </Box>
              </Link>
              <Link to="/perfil">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    perfil
                  </Typography>
                </Box>
              </Link>
              <Box mx={1} style={{ cursor: 'pointer' }} onClick={logout}>
                <Typography variant="h6" color="inherit">
                  logout
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }

  
  const CustomAlerts = () => {
    const handleSuccessAlert = () => {
      NotificationManager.success('Mensagem de sucesso', 'Título do Alert', 3000);
    };
  
    return (
      <div>
        <button onClick={handleSuccessAlert}>Mostrar Alert de Sucesso</button>
        <NotificationContainer />
      </div>
    );
  };
  
  export default CustomAlerts;
  
  
  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;
