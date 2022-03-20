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
const axios = require('axios');


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
   console.log('time reservation', reservation.time)
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

    console.log('courteeeeeee', props.court )

    let { user } = useUserAuth();
    if(user){
      console.log('usereeeeeee:',user.uid)
    }

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

        
    }, [props.data, props.court]);
    
    reservations.map(reservation => timesReserved.push({time : reservation?.ora, id : reservation?.id}))
    console.log('time reservations array', timesReserved)
    console.log('test di reserve', reservations);
    
    let timeReserved = reservations[0]?.ora;

    async function deleteReservation(id : any) {
        const response = await fetch(`http://localhost:3001/prenotazione/del/${id}`, {
          method: "DELETE",
        });
        return response.json();
      }

    interface IAddReservation {
          id : string
          id_citta : string
          id_struttura: string
          id_campo: string
          id_user: string 
          giorno: string
          ora: string
      }

    //   async function addReservation(id: string, id_citta: string, id_struttura: string, id_campo: string, id_user: string, giorno: string, ora: string) {
    //     const response = await fetch(`http://localhost:3001/prenotazione/add`, {
    //       method: "POST",
    //       body: {
    //         id : 'mario', 
    //         id_citta : 'mario', 
    //         id_struttura : 'mario', 
    //         id_campo : 'mario', 
    //         id_user : 'mario', 
    //         giorno: 'mario', 
    //         ora : 'mario', 
    //       }
    //     });
    //     return response.json();
    //   }

    const randomIdReservation = () => {
        return 'res-' + Math.floor(Math.random() * 1000);
    }

    const addReservation = (reservation: {time : string, data : string | undefined}) => axios.post('http://localhost:3001/prenotazione/add', {
        id: randomIdReservation().toString(),
        id_citta:'1A',
        id_campo:'1a',
        id_struttura:'1@',
        id_user: 'qd3DnD5MrnhCrThrKEHBPO9AOOC2',
        giorno: reservation.data,
        ora:reservation.time})
    .then(function(response : any){
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

    //const [disableDiv, setDisableDiv] = React.useState(disable);

    return (
            <React.Fragment>
                {/* <button onClick={addReservation}>Test</button> */}
        <div className='userVerify' disabled={this.state.disabled}>
           

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
        </div>
        </React.Fragment>
    );
}

export default TableReservation