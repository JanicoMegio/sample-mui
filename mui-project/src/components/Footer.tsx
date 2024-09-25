// Footer.tsx
import React from 'react';
import { Box, Typography, Grid, List, ListItem, Container, ListItemText, IconButton, Avatar, ListItemAvatar, CssBaseline } from '@mui/material';
import { Facebook, Twitter, Instagram, Padding } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <CssBaseline>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={3}>
                            <Typography>
                                Asialink Finance Corporation
                                SEC Registration No.: A119711768
                                <br />
                                Certificate of Authority to Operate: No.570
                                <br />
                                CGFD 0967-365-7324 / 0926-017-0248
                                <br />
                                FLCD 8818-5990
                            </Typography>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Typography>
                                Advisory
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed temporibus quas accusamus corporis ad qui soluta reprehenderit magni, enim optio quis at. Eius tempore beatae ratione quisquam, blanditiis modi?
                            </Typography>
                        </Grid>
                        <Grid item xs={6} lg={3}>
                            <img src="https://placehold.co/200x100" alt="" />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                                <img src="https://placehold.co/300x100" alt="Logo" style={{ height: '80px' }} />
                            </div>
                            <Grid container justifyContent="center" spacing={1}>
                                <Grid item>
                                    <IconButton>
                                        <Facebook fontSize="medium" />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton>
                                        <Twitter fontSize="medium" />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton>
                                        <Instagram fontSize="medium" />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton>
                                        <LinkedInIcon fontSize="medium" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container xs={12} sm={4}>
                            <Grid item xs={6}>
                                <List>
                                    <ListItem sx={{ paddingBottom: "0px" }}>
                                        <Typography>Terms and Conditions</Typography>
                                    </ListItem>
                                    <ListItem sx={{ paddingBottom: "0px" }}>
                                        <Typography>Privacy Policy</Typography>
                                    </ListItem>
                                    <ListItem sx={{ paddingBottom: "0px" }}>
                                        <Typography>Load Products</Typography>
                                    </ListItem>
                                    <ListItem sx={{ paddingBottom: "0px" }}>
                                        <Typography>Branches</Typography>
                                    </ListItem>
                                    <ListItem sx={{ paddingBottom: "0px" }}>
                                        <Typography>Payment Options</Typography>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <List>
                                    <ListItem sx={{ paddingBottom: "0px" }}>
                                        <Typography>Terms and Conditions</Typography>
                                    </ListItem>
                                    <ListItem sx={{ paddingBottom: "0px" }}>
                                        <Typography>Privacy Policy</Typography>
                                    </ListItem>
                                    <ListItem sx={{ paddingBottom: "0px" }}>
                                        <Typography>Load Products</Typography>
                                    </ListItem>
                                    <ListItem sx={{ paddingBottom: "0px" }}>
                                        <Typography>Branches</Typography>
                                    </ListItem>
                                    <ListItem sx={{ paddingBottom: "0px" }}>
                                        <Typography>Payment Options</Typography>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <List sx={{ width: '100%', maxWidth: '400px', alignItems: 'center' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <LinkedInIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="210  AIC Gold Tower, F. Ortigas Jr. Rd., Ortigas Center, Pasig City 1600, Philippines " />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <LinkedInIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="8706-5198" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <LinkedInIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="customerservices@asialinkfinance.com.ph" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </CssBaseline>
    );
};
