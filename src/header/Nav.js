import { Nav,Navbar,NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar =()=>{
  return(
    <Navbar collapseOnSelect expand="sm"  variant="dark" bg="dark">
      <Navbar.Toggle aria-controls="" data-bs-toggle="collapse" data-bs-target="#navbarScroll"/>
      <Navbar.Collapse id="navbarScroll">
        <Nav>
          <NavLink className="abcd" eventKey="1" as={Link} to="/">
          <img className='logo' src='https://static.vecteezy.com/system/resources/previews/015/131/880/original/flat-woman-holding-shopping-bags-cartoon-wallpaper-modern-design-for-shopping-online-website-design-png.png' alt="Logo" />
          </NavLink>
          <NavLink className="mt-3" eventKey="2" as={Link} to="/cloths">Cloths</NavLink>
          <NavLink className="mt-3" eventKey="3" as={Link} to="/electronics">Electronics</NavLink>
          <NavLink className="mt-3" eventKey="3" as={Link} to="/gifts&articles">Gifts&Articles</NavLink>
          <NavLink className="mt-3" eventKey="3" as={Link} to="/adddata">Add Data</NavLink>
        </Nav>
      </Navbar.Collapse>

   
    </Navbar>
  )
}
export default Navigationbar

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { Link } from 'react-router-dom';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar className='nav' position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: '' } }}> */}
//             {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//             <Link to="/" >
//               <img className='logo m-2' src='https://static.vecteezy.com/system/resources/previews/015/131/880/original/flat-woman-holding-shopping-bags-cartoon-wallpaper-modern-design-for-shopping-online-website-design-png.png' alt="Logo" />
//                </Link>
//             {/* <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography> */}
//           {/* </Box> */}

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {/* {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))} */}
//               <MenuItem>
//                 <Link id="1" to="/cloths">Clothing</Link>
//               </MenuItem>
//               <MenuItem>
//                 <Link id="2" to="/electronics">Electronics</Link>
//               </MenuItem>
//               <MenuItem>
//                 <Link id="3" to="/gifts&articles">Gifts&Articles</Link>
//               </MenuItem>
//               <MenuItem>
//                 <Link id="4" to='/signup'>Signup</Link>
//               </MenuItem>
//               <MenuItem>
//                 <Link to='/adddata'>Adddata</Link>
//               </MenuItem>
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {/* {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))} */}
//             <Link id="1" to="/cloths">Clothing</Link>
//             <Link id="2" to="/electronics">Electronics</Link>
//             <Link id="3" to="/gifts&articles">Gifts&Articles</Link>
//             <Link id="4" to='/signup'>Signup</Link>
//             <Link to='/adddata'>Adddata</Link>
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;




// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import Login from '../Login'
// import { signOut, getAuth } from 'firebase/auth'
// import app from '../firebaseconfig'
// import MailIcon from '@mui/icons-material/Mail';
// import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Avatar } from '@mui/material'
// import Button from '@mui/material/Button';

// import(signOut)
// const auth = getAuth()
// export default class Header extends Component {

//   signOut = () => {
//     signOut(auth)
//   }
//   render() {
//     return (
//       <div className='row nav'>
//         <div className='col-1 text-center'>
//           <Link to="/" >
//             <img className='logo m-2' src='https://static.vecteezy.com/system/resources/previews/015/131/880/original/flat-woman-holding-shopping-bags-cartoon-wallpaper-modern-design-for-shopping-online-website-design-png.png' alt="Logo" />
//           </Link>
//         </div>
//         <div className='col-3 p-4'>
//           <div className='input'>
//             <input type='text' />

//           </div>
//         </div>
//         <div className='col-5 p-4 text-center'>
//           <Link id="1" to="/cloths">Clothing</Link>
//           <Link id="2" to="/electronics">Electronics</Link>
//           <Link id="3" to="/gifts&articles">Gifts&Articles</Link>
//           <Link id="4" to='/signup'>Signup</Link>
//           <Link to='/adddata'>Adddata</Link>
//         </div>
//         <div className='col-2 p-4'>


//           <Button variant="contained" style={{ color: "white" }} className='btn btn-light' onClick={this.signOut}>signOut</Button>


//         </div>
//         <div className='col-1 p-4 d-flex'>
//           <Badge badgeContent={4} color='primary'>
//             <Link to="/cart">
//               <ShoppingCartIcon className=' icon fs-2' />
//             </Link>
//           </Badge>
//           <Avatar className='ms-3' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

//         </div>
//       </div>
//     )
//   }
// }

