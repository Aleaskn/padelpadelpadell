import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ImgAvatar from "../Avatar";
import avatar from '../../assets/images/avatar.jpg'
import Typography from '@mui/material/Typography';
import FlagIcon from "../Icons/FlagIcon/FlagIcon";

const PlayerPosition = styled(Typography)`
  color : #052E53;
  position : absolute;
  z-index : 0;
  font-size : 96px;
  font-weight : bold;
  opacity : 0.2;
`;

const Player = () => {
    return (
        <Box
            sx={{
                width: 370,
                height: 130,
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <ImgAvatar link={avatar} />
                </Grid>
                <Grid item xs sx={{
                    display: 'flex',
                    flexDirection : 'column',
                    justifyContent: 'center',
                }}>
                    <Box>
                    <PlayerPosition variant="h1">
                        1
                    </PlayerPosition>
                    <Typography sx={{position : 'relative', zIndex : '1'}} variant="h3" component="h3">
                        Alejandro Galan Romo
                    </Typography>
                    <Typography sx={{position : 'relative', zIndex : '1'}}  variant="body1" component="p">
                        Pt. 13140
                    </Typography>
                    </Box>
                    <FlagIcon code={'es'} size={'lg'} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Player;