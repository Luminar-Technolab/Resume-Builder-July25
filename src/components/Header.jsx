import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

function Header() {

  const projectInfo = "Our Resume Builder App allows users to easily enter their personal details, education, work experience, and skills through a simple form interface. Based on the input, the app automatically generates a well-formatted, ATS-friendly resume that can be downloaded or shared instantly."

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img width={'30px'} src="https://cdn3.iconfinder.com/data/icons/business-people-part-2-1/64/resume-512.png" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none' >rBuilder</Link>
          </Typography>
          <Tooltip title={projectInfo}>
            <Button color="inherit">Login</Button>
            </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header