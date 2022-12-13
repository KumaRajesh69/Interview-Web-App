import { Box, Button, Card, CardContent, CardMedia, Grid, Link, Stack, Typography } from "@mui/material";



function Body() {
    return (
        <>

            <Stack sx={{
                marginTop: 15.5, position: 'relative',
                height: '100%',
                width: '100%',
            }} >
                <Box display='flex' justifyContent='space-between'
                    sx={{
                        width: '100%',
                        height: '100%',
                    }}>
                    <img src='/images/Top Banner.png' width={'100%x'} />
                </Box>

                <Box display='flex'
                    sx={{
                        width: ' 40%',
                        mb: 6,
                        position: 'absolute',
                        top: 350,
                        left: 20
                    }}

                >
                    <Button variant="contained" sx={{
                        backgroundColor: "orange",
                        my: 2,
                        mx: 5,
                        width: 180,
                        height: 50,

                        borderRadius: 2
                    }} >
                        View courses
                    </Button>

                    <Button variant="outlined" color="primary" sx={{
                        width: 180,
                        my: 2,
                        mx: 1.8,
                        borderRadius: 2,
                        height: 50,
                    }} >
                        How it work?
                    </Button>

                </Box>

            </Stack>

            {/* Our_services */}

            <Stack sx={{ bgcolor: '#ECF3FF' }}>
                <Card sx={{
                    p: 4,
                    mt: -2,
                    borderRadius: '5px',
                    mx: 5,
                    boxShadow: '0px 10px 56px rgba(0, 0, 0, 0.08)',
                }}>
                    <Stack alignItems={'center'} sx={{
                        width: '100%'
                    }}>
                        <Typography variant='h4'>
                            Our Services
                        </Typography>
                        <Typography variant='body2'>
                            Making you industry ready is our responsibility
                        </Typography>
                        <Grid container spacing={8} sx={{ width: '100%', py: 7 }}  >
                            <Grid item md={6}>
                                <Box display={'flex'} flexDirection={'row'}  >
                                    <Box padding={2} bgcolor='#F0F6FF' borderRadius={1}>
                                        <img src='/images/Group 520.svg' style={{ width: 130, height: 130 }} />
                                    </Box>
                                    <Stack display={'flex'} flexDirection={'column'} width={'100%'}
                                        marginLeft={2} justifyContent={'space-between'}>
                                        <Typography variant='h5'>Training</Typography>
                                        <Typography variant='subtitle2'>We help you to gain the knowledge,
                                            skills and practical application of the subjects.
                                            Check certification courses and other programs....
                                        </Typography>
                                        <Button variant="contained" color="primary" sx={{
                                            width: 160
                                        }} >
                                            View courses
                                        </Button>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <Box display={'flex'} flexDirection={'row'} >
                                    <Box padding={2.2} bgcolor='#F0F6FF' borderRadius={2}>
                                        <img src='/images/Group 508.svg' style={{ width: 130, height: 130 }} /></Box>
                                    <Stack display={'flex'} flexDirection={'column'} width={'100%'} marginLeft={2}
                                        justifyContent={'space-between'}>
                                        <Typography variant='h5'>Consulting</Typography>
                                        <Typography variant='subtitle2'>We help you to gain the knowledge,
                                            skills and practical application of the subjects.
                                            Check certification courses and other programs....
                                        </Typography>
                                        <Button variant="contained" color="primary" sx={{
                                            width: 160
                                        }} >View courses</Button>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <Box display={'flex'} flexDirection={'row'}  >
                                    <Box padding={2} bgcolor='#F0F6FF' borderRadius={2}>
                                        <img src='/images/Group 510.svg' style={{ width: 130, height: 130 }} /></Box>
                                    <Stack display={'flex'} flexDirection={'column'} width={'100%'} marginLeft={2}
                                        justifyContent={'space-between'}>
                                        <Typography variant='h5'>Web Store</Typography>
                                        <Typography variant='subtitle2'>We help you to gain the knowledge,
                                            skills and practical application of the subjects.
                                            Check certification courses and other programs....
                                        </Typography>
                                        <Button variant="contained" color="primary" sx={{
                                            width: 160
                                        }} >
                                            View courses
                                        </Button>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <Box display={'flex'} flexDirection={'row'} >
                                    <Box padding={2} bgcolor='#F0F6FF' borderRadius='10px'>
                                        <img src='/images/Group 512.svg' style={{ width: 135, height: 135 }} /></Box>
                                    <Stack display={'flex'} flexDirection={'column'} width={'100%'} marginLeft={2}
                                        justifyContent={'space-between'}>
                                        <Typography variant='h5'>Solutions</Typography>
                                        <Typography variant='subtitle2'>We help you to gain the knowledge,
                                            skills and practical application of the subjects.
                                            Check certification courses and other programs....
                                        </Typography>
                                        <Button variant="contained" color="primary" sx={{
                                            width: 160
                                        }}>View courses</Button>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Stack>
                </Card>
            </Stack>

            {/* About_us */}

            <Stack
                display='flex'
                flexDirection='column'
                justifyContent='center'
                textAlign='center'
                sx={{
                    backgroundImage: "url('/images/about-bg.svg')",
                    backgroundSize: 'cover',
                    px: 5,
                    py: 2,
                    mt: 2
                }}>

                <Typography variant='h4' padding={0.5}>
                    About us
                </Typography >
                <Typography variant='body2' paddingBottom={2}>
                    A brief about our vision, mission & us.x
                </Typography>
                <Typography variant='body2' padding={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae sed eget ut turpis eget feugiat aenean viverra. Sodales in urna nec, amet molestie varius. Vel auctor vitae ultrices eget senectus. Nisi, mattis lectus mi tellus quis ornare. Arcu tristique nulla duis eu nunc molestie. Donec dictumst sapien enim nec nibh sed arcu. Quis pretium ultrices velit non euismod. Amet at consectetur at tortor pharetra, nisl donec quam cras. Aliquet dolor etiam commodo nisl.
                </Typography>
                <Typography variant='body2' padding={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae sed eget ut turpis eget feugiat aenean viverra. Sodales in urna nec, amet molestie varius. Vel auctor vitae ultrices eget senectus. Nisi, mattis lectus mi tellus quis ornare. Arcu tristique nulla duis eu nunc molestie. Donec dictumst sapien enim nec nibh sed arcu. Quis pretium ultrices velit non euismod. Amet at consectetur at tortor pharetra, nisl donec quam cras. Aliquet dolor etiam commodo nisl.
                </Typography>
            </Stack>

            {/* Why_us */}

            <Stack >
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}
                    alignItems={'center'} marginTop={'0'} bgcolor={'#E9F1FF'} px={4}>
                    <Typography variant='h4' sx={{ mt: 3 }} > Why Us ?</Typography>
                    <Typography variant='subtitle2' sx={{ mt: 0.5 }} >Global success system Advantage</Typography>
                    <Grid container spacing={2} >
                        <Grid item md={6}>
                            <img src={'/images/why-us-image.svg'} />
                        </Grid>
                        <Grid item md={6}>
                            <Stack>
                                <Box display={'flex'} flexDirection={'row'} margin={3}>
                                    <Box bgcolor={'#F0F6FF'} padding={1.5}>
                                        <img src={'/images/Group 514.svg'} style={{ width: 135, height: 135 }} />
                                    </Box>
                                    <Box padding={1} marginLeft={'1'} >
                                        <Typography variant='h5' sx={{ pb: 2 }}>Real World Professionals</Typography>
                                        <Typography variant='subtitle2' sx={{ pb: 2 }}>Our Trainers, Consultants and Auditors are with an
                                            average 15+ years of practical and global experience.</Typography>
                                        <Link href="#" underline="none" color="primary" style={{ my: 4 }}>
                                            View our team
                                        </Link>
                                    </Box>
                                </Box>
                            </Stack>
                            <Stack>
                                <Box display={'flex'} flexDirection={'row'} margin={3}>
                                    <Box bgcolor={'#F0F6FF'} padding={1}>
                                        <img src={'/images/Group 515.svg'} style={{ width: 135, height: 135 }} />
                                    </Box>
                                    <Box padding={1} marginLeft={'1'} >
                                        <Typography variant='h5' sx={{ pb: 2 }}>Accredited Courses</Typography>
                                        <Typography variant='subtitle2' sx={{ pb: 2 }}>Our courses and exams are accredited by global
                                            Certification Bodies and experts.</Typography>
                                        <Link href="#" underline="none" color="primary">
                                            Our Accreditations
                                        </Link>
                                    </Box>
                                </Box>
                            </Stack>
                            <Stack>
                                <Box display={'flex'} flexDirection={'row'} margin={3}>
                                    <Box bgcolor={'#F0F6FF'} padding={1}>
                                        <img src={'/images/Group 517.svg'} style={{ width: 135, height: 135 }} />
                                    </Box>
                                    <Box padding={1} marginLeft={'1'} >
                                        <Typography variant='h5' sx={{ pb: 2 }}>
                                            Industry Leading Products and Solutions
                                        </Typography>
                                        <Typography variant='subtitle2' sx={{ pb: 2 }}>We provide customized, practical, implementable
                                            services to achieve your goals.</Typography>
                                        <Link href="#" underline="none" color="primary" >
                                            Our Approach
                                        </Link>
                                    </Box>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>

            {/* Latest News */}

            <Stack width="100%"

                justifyContent='center'
                textAlign='center'
                sx={{ mt: 2 }}

            >
                <Typography variant='h4' sx={{ mt: 3 }}>
                    Latest News
                </Typography>
                <Box display='flex' flexDirection='row' justifyContent='center' margin={6} textAlign='center'>
                    <Grid container spacing={4} sx={{ px: 8 }}
                    >


                        {
                            new Array(4).fill(0).map(() =>
                                <Grid item xs={3} margin={'2'} >
                                    <Box display={'flex'} justifyContent={'space-between'} width='100%'>
                                        <Card sx={{ Width: '100%' }} >
                                            <CardMedia
                                                component="img"
                                                height="100"
                                                image="/images/Rectangle_36.svg"
                                                alt="RedCap"
                                            />
                                            <CardContent>
                                                <Typography variant='subtitle1' color='#000000' textAlign='left'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non sapien auctor.
                                                </Typography>
                                                <Typography color="text.secondary" textAlign='left'>
                                                    By Himanshu , 03/02/2022
                                                </Typography>
                                            </CardContent>
                                            <Button variant="contained" sx={{ marginBottom: 1, width: '90%' }} >
                                                Read More
                                            </Button>
                                        </Card>
                                    </Box>
                                </Grid>
                            )
                        }
                    </Grid>
                </Box>
                <Box display={'flex'} justifyContent={'center'} textAlign={'center'}>
                    <Button variant="outlined"
                        sx={{
                            marginTop: 5, width: 200,
                            display: 'flex',
                            justifyContent: 'center',
                            mb: 7
                        }}>
                        View More
                    </Button>
                </Box>
            </Stack>

            {/* What our customer say? */}

            <Grid container spacing={2} display={'flex'} flexDirection={'column'}
                marginTop={'2'} justifyContent={'center'} textAlign={'center'}
                sx={{ backgroundImage: `url('/images/what customers say backdrop.svg')` }}>
                <Typography variant='h4' sx={{ mt: 3 }}>What our customer say?</Typography>
                <Typography variant='subtitle1'>We belive in 100% client satisfaction
                    and here is what they say about  us.</Typography>

                <Box display={'flex'} flexDirection={'row'}
                    justifyContent={'space-around'} alignItems={'center'}
                    marginTop={6}>
                    <Box sx={{
                        width: 500, height: 200,
                        borderRadius: '2',
                        bgcolor: 'white',
                        boxShadow: ' 0px 0px 144.516px -46.4516px rgba(0, 0, 0, 0.15)'
                    }}>
                        <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <img src={'/images/Ellipse_271.png'}
                                style={{
                                    marginTop: -30, height: 80, width: 80, zIndex: 1000
                                }} />
                            <Typography variant='h5' >Ricky Mater</Typography>
                            <Typography variant="body2" color="text.secondary">
                                student
                            </Typography>
                            <Typography variant='subtitle2' sx={{ py: 2, px: 5 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc vitae pulvinar ipsum at nunc. Neque, orci faucibus sit feugiat gravida urna.
                                Tristique volutpat.
                            </Typography>
                        </Stack>
                    </Box>

                    <Box sx={{
                        width: 500, height: 200,
                        borderRadius: '2',
                        bgcolor: 'white',
                        boxShadow: ' 0px 0px 144.516px -46.4516px rgba(0, 0, 0, 0.15)'
                    }}>
                        <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <img src={'/images/Ellipse_271.png'}
                                style={{
                                    marginTop: -30, height: 80, width: 80, zIndex: 1000
                                }} />
                            <Typography variant='h5' >Ricky Mater</Typography>
                            <Typography variant="body2" color="text.secondary">
                                student
                            </Typography>
                            <Typography variant='subtitle2' sx={{ py: 2, px: 5 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc vitae pulvinar ipsum at nunc. Neque, orci faucibus sit feugiat gravida urna.
                                Tristique volutpat.
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Grid>
            <Stack display='flex' flexDirection='column' justifyContent='center'
                textAlign='center' sx={{ mx: 2, my: 6 }} >

                <Typography variant='h4'>
                    Our Major Clients
                </Typography>
                <Typography variant='body1' sx={{ mb: 4 }}>
                    Our esteemed clients around the world.
                </Typography>

                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} paddinfTop='5' >
                    <Grid item md={3} display='flex' flexDirection='row' justifyContent='space-evenly' width={'100%'}  >
                        <Card variant="outlined" ><img src={'/images/image 2.svg'} /></Card>



                        <Card variant="outlined" width={'12px'}><img src={'/images/image 3.svg'} /></Card>




                        <Card variant="outlined"><img src={'/images/image 4.svg'} /></Card>



                        <Card variant="outlined"><img src={'/images/image 5.svg'} /></Card>
                    </Grid>
                </Box>
            </Stack>
        </>
    )
}
export default Body;