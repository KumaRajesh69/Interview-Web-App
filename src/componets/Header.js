import { AppBar, Avatar, Box, TextField, Toolbar, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <AppBar sx={{ bgcolor: '#ECF3FF' }}>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }} >
                <Box display={'flex'}
                    color={'#454A6D'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    px={1} >

                    <EmailIcon />
                    <Typography sx={{
                        ml: 1, mr: 2,

                    }}>
                        sahoo.raj1999@gmail.com
                    </Typography>

                    <CallIcon />
                    <Typography sx={{
                        ml: 1,
                    }}>
                        9090909090
                    </Typography>
                </Box>

                <Box display={'flex'}
                    color={'#454A6D'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    px={1} >

                    <Typography sx={{
                        ml: 1,
                        mr: 2,
                    }}>
                        Follow us on:
                    </Typography>
                    <InstagramIcon sx={{ mr: 1 }} />
                    <YouTubeIcon sx={{ mr: 1 }} />
                    <FacebookIcon sx={{ mr: 1 }} />
                    <LinkedInIcon sx={{ mr: 1 }} />
                    <Typography sx={{
                        ml: 2,
                    }}>
                        Contact Us
                    </Typography>
                </Box>

            </Toolbar>

            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',

            }}>
                <Box display={'flex'} color={'#454A6D'}>
                    <img src='/images/Group 545.svg'></img>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Search"
                        variant="outlined"> <SearchIcon /></TextField>
                </Box>
                <Box display={'flex'} color={'#454A6D'} justifyContent={'center'} alignItems={'center'}>
                    <Typography sx={{
                        ml: 1, mr: 2,
                    }}>
                        Training
                    </Typography>
                    <Typography sx={{
                        ml: 1, mr: 2,
                    }}>
                        Consulting
                    </Typography>
                    <Typography sx={{
                        ml: 1, mr: 2,
                    }}>
                        Solutions
                    </Typography>
                    <Typography sx={{
                        ml: 1, mr: 2,
                    }}>
                        Webstore
                    </Typography>
                    <Typography sx={{
                        ml: 1, mr: 2,
                    }}>
                        Resources
                    </Typography>
                    <Typography sx={{
                        ml: 1, mr: 2,
                    }}>
                        About us
                    </Typography>
                    <ShoppingCartIcon />
                    <Avatar sx={{
                        bgcolor: 'blue',
                        ml: 2,
                    }}>R
                    </Avatar>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;