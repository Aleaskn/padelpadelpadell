import React from 'react'
import {CssBaseline, Typography} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import imgCourt from '../../assets/images/imgplaceholder.jpg'
import TableReservation from "../../components/Table/TableReservation";
import { useParams } from 'react-router-dom';
import { userInfo } from 'os';
import { useUserAuth } from '../../components/context/UseAuthContext';

// How to use background img cover inside div/box:
// https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/


export interface ICourtData {
    address: string;
    caratteristiche: string;
    id: string;
    id_citta: string;
    id_struttura: string;
    nome: string;
    outdoor: string;
    timeSlot: number;
}

const Court : React.FC<{}> = () => {

    let { user } = useUserAuth();

    const params = useParams();

    const [data, setData] = React.useState<string>('');
    const [courtData, setCourtData] = React.useState<Array<ICourtData>>([]);

    // React.useEffect(() => {
    //     console.log('court data:', courtData)
    // }, [0])

    const updateData = (event:  React.ChangeEvent<HTMLInputElement>) : void => {
        setData(event.target.value);
    }

    React.useEffect(() => {
        fetch(`http://localhost:3001/campo/${params.court}`)
        .then(res => res.json())
        .then(res => setCourtData(res[0]));
    }, [0])

    console.log('user', user?.uid)
        
    let img = courtData[0]?.outdoor;

    return (
        <React.Fragment>
            <CssBaseline />
            <Container sx={{pt: 7}} maxWidth="lg">
                    <Box>
                        <Typography variant={'h1'} component={'h1'}>Campo A</Typography>
                        <Typography variant={'body1'} component={'p'}>4.91 - 23 recensioni - Porto Recanati</Typography>
                        <Box style={{
                            background: `url(${img})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            width: '100%',
                            height: 637,
                        }}/>
                    </Box>
                <Box>
                    <input  onChange={(event) => updateData(event)} type="date" id="reservation" name="reservation" />
                    
                    { user?.uid ?
                    <TableReservation 
                        court={params.court} 
                        data={data} 
                        idCity={courtData[0]?.id_citta} 
                        idCourt={courtData[0]?.id}
                        idStruttura={courtData[0]?.id_struttura}
                    /> : 
                    
                    
                    
                    <Box sx={{bgcolor: '#ffffff', width: '100%', height: '100%', position: 'absolute', zIndex: 1}}>
                        Login Per entrare
                    </Box>
                    }

                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Court