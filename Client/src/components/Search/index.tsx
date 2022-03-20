import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SearchBar from "../SearchBar";
import Logo from "../../assets/images/logo-padol.svg";
import {Typography} from "@mui/material";

const Search = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container style={{backgroundColor: '#052E53', height: 370, padding: 0}} maxWidth={false}>
                <Box sx={{
                    bgcolor: 'primary.main',
                    display: 'flex',
                    mb: 1,
                    justifyContent: 'center'
                }}>
                    <img style={{marginTop: 90, width: 170}} src={Logo} alt={'logo padol.it'}/>
                </Box>
                <Typography variant={'body1'} sx={{color: '#ffffff', mb: 2, textAlign: 'center'}} component={'h2'}>
                    Trova il campo da padel libero più vicino a te.
                </Typography>
                <Box sx={{
                    bgcolor: 'primary.main',
                    display: 'flex',
                    justifyContent: 'center'
                }}>

                    <SearchBar />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Search;