import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IStandardButton from '../Button/index'
import { setServers } from 'dns/promises';
import { 
    ITableReservation,
    IReservations,
    IReservation } from './interfaces';
import { useUserAuth } from '../context/UseAuthContext';
import Box from '@mui/material/Box';
const axios = require('axios');
// import { ICourt } from '../../pages/Courts/Courts';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    time: string,
    button: JSX.Element
) {
    return { time, button };
}

const getTime = (value: any) : string => {
    return value.time
}

const getReservation = (time : string, data : string | undefined) : IReservation=> {
   let reservation : IReservation = {
       time : time,
       data : data
   };
   //console.log('time reservation', reservation.time)
   return  reservation
}

const timesSlot = [
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00'
]

const TableReservation: React.FC<ITableReservation> = (props : ITableReservation) => {

    const [counter, setCounter] = React.useState<number>(0)

    let { user } = useUserAuth();

    let rows : Array<any> = [];    

    const [reservations, setReservations] = React.useState<Array<IReservations>>([]);

    interface IResDataAndId {
        time : string
        id : string
    }
    let timesReserved : Array<IResDataAndId> = [];

    React.useEffect(() => {

        fetch(`http://localhost:3001/prenotazione/giorno/${props.data}?nome=${props.court}`)
        .then(res => res.json())
        .then(res => setReservations(res[0]))

    }, [props.data, props.court, counter]);
    
    reservations.map(reservation => timesReserved.push({time : reservation?.ora, id : reservation?.id}))
    
    let timeReserved = reservations[0]?.ora;

    async function deleteReservation(id : any) {
        const response = await fetch(`http://localhost:3001/prenotazione/del/${id}`, {
          method: "DELETE",
        });
        setCounter(counter + 1);
        return response.json();
      }

    const randomIdReservation = () => {
        return 'res-' + Math.floor(Math.random() * 1000);
    }

    const addReservation = (reservation: {time : string, data : string | undefined}) => axios.post('http://localhost:3001/prenotazione/add', {
        id: randomIdReservation().toString(),
        id_citta: props.idCity,
        id_campo: props.idCourt,
        id_struttura: props.idStruttura,
        // id_user: 'qd3DnD5MrnhCrThrKEHBPO9AOOC2',
        id_user: user?.uid,
        giorno: reservation.data,
        ora: reservation.time})
    .then(function(response : any){
        setCounter(counter + 1)
        console.log(response)
    })


    timesSlot.map((timeSlot, i) => rows.push(createData(timeSlot, <IStandardButton onClick={()=> addReservation(getReservation(getTime(rows.find((row, j) => i == j ? row.time : null)), props.data))} label={'prenota'} />)))


    if(timesReserved.length > 0) {
    
        for(let i = 0; i < timeReserved.length; i++) {
    
            rows = rows.filter((row) => {
                if (row.time !== timesReserved[i]?.time) {
                    return row
                } else {
                    // return row.button = <IStandardButton onClick={()=> getReservation(getTime(rows.find(row => row.time == timeReserved)), props.data)} label={'Prenotato'} reserved/>
                    return row.button = <IStandardButton onClick={()=> deleteReservation(timesReserved[i]?.id)} label={'Prenotato'} reserved/>
                }
            })
    
        }

    }
    return (
            <React.Fragment>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Ora</StyledTableCell>
                            <StyledTableCell align="right">Stato Prenotazione</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.time}>
                                <StyledTableCell component="th" scope="row">
                                    {row.time}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.button}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}

export default TableReservation