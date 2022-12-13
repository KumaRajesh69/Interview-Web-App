import { Box, Button, Divider, Grid, IconButton, Stack, styled, TextField, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';



function Footer() {

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    });

    return (

        <Stack width='100%' sx={{ bgcolor: '#061C41' }}
            display='flex'

            justifyContent='center' mx='2'>
            <Grid container spacing={4} width='100%'>
                <Grid item md={3.5}
                    xs={4} sm={4} lg={4} xl={4}
                    display='flex'
                    flexDirection='row' justifyContent='space-between'
                    textAlign='center' width='100%'>
                    <Box color='white' sx={{ ml: 8, mt: 4 }}>
                        <img src='/images/Group 502.svg' />

                        <Typography sx={{ textAlign: 'left', width: '200px', mt: 1 }} >
                            orem Ipsum is simply dummy
                            text of the printing and
                            typesetting industry. Lore
                        </Typography></Box>
                </Grid>
                <Grid item md={2} display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    textAlign='left' width='100%'>
                    <Box color='white' display='flex'
                        flexDirection='column'
                        justifyContent='space-between' sx={{ mt: 4 }}  >
                        <Typography variant='h6'>
                            About
                        </Typography >
                        <Typography variant='body2'>Company</Typography>
                        <Typography variant='body2'>Our Team</Typography>
                        <Typography variant='body2'>Our Partners</Typography>
                        <Typography variant='body2'>Our Customers</Typography>
                        <Typography variant='body2'>Careers</Typography>
                        <Typography variant='body2'>Contact us</Typography>
                    </Box>
                </Grid>

                <Grid item md={2} display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    textAlign='left' width='100%'>
                    <Box color='#FFFFFF' display='flex'
                        flexDirection='column'
                        justifyContent='space-between' sx={{ mt: 4 }}>
                        <Typography variant='h6' >
                            Quick links
                        </Typography>
                        <Typography variant='body2' color='#FFFFFF'>Web store</Typography>
                        <Typography variant='body2' color='#FFFFFF'>Privacy policy</Typography>
                        <Typography variant='body2' color='#FFFFFF'>Trademarks & Copyrights</Typography>
                        <Typography variant='body2' color='#FFFFFF'>Complaints & Appeal</Typography>
                        <Typography variant='body2' color='#FFFFFF'>Careers</Typography>
                        <Typography variant='body2' color='#FFFFFF'>Sitemap</Typography>
                    </Box>
                </Grid>

                <Grid item md={3.9} display='flex'
                    flexDirection='column'
                    justifyContent='space-between'
                    textAlign='left' width='100%'>
                    <Box display='flex' flexDirection='column'
                        color='white' justifyContent='space-between'
                        textAlign='left' width='100%' sx={{ mt: 4 }}>
                        <Typography variant='h6' >
                            Subscribe to our newsletter
                        </Typography>
                        <CssTextField id="outlined-basic"
                            placeholder='Your Mail'
                            variant="outlined"
                            size='small'
                            sx={{ width: 240, mt: 1 }} />
                        <Button variant="contained"
                            color='primary'
                            sx={{ width: '30%', mt: 2 }}>
                            Subscribe
                        </Button>
                        <Typography variant='body2' sx={{ my: 1 }}>
                            Follow us on :
                        </Typography>
                        <Box display='flex' width='40%' justifyContent='space-between'>
                            <IconButton
                                aria-label="twitter"
                                sx={{ color: 'white', border: "1px solid white" }}>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton
                                aria-label="twitter"
                                sx={{ color: 'white', border: "1px solid white" }}>
                                < FacebookIcon />
                            </IconButton>
                            <IconButton
                                aria-label="twitter"
                                sx={{ color: 'white', border: "1px solid white" }} >
                                <TwitterIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Divider variant="middle" sx={{ bgcolor: 'white', my: 3, }} />
            <Box display='flex' flexDirection='row' justifyContent='center'>
                <Typography variant='body2' sx={{ color: 'white', mb: 4, mt: 1 }}>
                    ©2022 All Rights reserved by Global Success Systems.
                </Typography></Box>
        </Stack>



    )
}
export default Footer;