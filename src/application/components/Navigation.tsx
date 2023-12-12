import React from 'react'
import {
  Toolbar,
  AppBar,
  Grid,
  Button,
  Modal,
  Typography,
  Box,
  Menu,
  MenuItem,
  MenuList,
  ListItemText,
  Divider,
  Paper
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { blue } from '@mui/material/colors';
import logoWika from '../../assets/img/wika-seeklogo.com.png'
import '../../assets/css/Navigation.css'
import { Link } from 'react-router-dom'
const Navigation: React.FC = () => {
  const color = blue[50]
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const logoutModalOpen = () => setOpen(true);
  const logoutModalClose = () => setOpen(false);
  const openEl = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const label = {
    color: "#020038",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "1vh",
  }
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <AppBar position='relative' sx={{ backgroundColor: color }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Grid container spacing={5}>
            <Grid item xs={1}>
              <img src={logoWika} alt="logo wika" className='image-size' />
            </Grid>
            <Grid item xs={2}>
              <Button variant="text" sx={label} component={Link} to='/dashboard'>Dashboard</Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="text" sx={label} aria-controls={openEl ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openEl ? 'true' : undefined} onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>Projects</Button>
              <Paper sx={{ width: 320, maxWidth: '100%' }}>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={openEl}
                  onClose={handleClose}
                  style={{width : '25em'}}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <MenuItem component={Link} to='/projects'>
                    <ListItemText>Project List</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem component={Link} to='/project-member'>
                    <ListItemText>Project Member</ListItemText>
                  </MenuItem>
                </Menu>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Button variant="text" sx={label} component={Link} to='/accounts'>Accounts</Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="text" sx={label} component={Link} to='/manage-projects'>Manage Projects</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="text" sx={label} onClick={logoutModalOpen}>Logout</Button>
            </Grid>
          </Grid>
        </Toolbar>
        <Modal
          open={open}
          onClose={logoutModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Yakin Ingin Logout ?
            </Typography>
            <Grid container spacing={4} sx={{ mt: '1em' }}>
              <Grid item xs={4}>
                <Button onClick={logoutModalClose} sx={{ float: 'left' }}>Tidak</Button>
              </Grid>
              <Grid item xs={7}>
                <Button onClick={logoutModalClose} sx={{ float: 'right' }} component={Link} to='/' >Ya</Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </AppBar>
    </>
  )
}

export default Navigation