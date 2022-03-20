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

interface IReservation {
    time : string
    data : string | undefined

}
const getReservation = (time : string, data : string | undefined) : IReservation=> {
   let reservation : IReservation = {
       time : time,
       data : data
   };
   console.log(reservation)
   return  reservation
}

interface ITableReservation {
    data?: string
    court?: string
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

    let rows : Array<any> = [];    

    const [reservation, setReservation] = React.useState<Array<any>>([]);
    
    fetch(`http://localhost:3001/prenotazione/giorno/${props.data}?nome=${props.court}`)
    .then(res => res.json())
    .then(res => console.log('result', res[0]))
    
    let timeReserved = '12:00';

    timesSlot.map((timeSlot, i) => rows.push(createData(timeSlot, <IStandardButton onClick={()=> getReservation(getTime(rows.find((row, j) => i == j ? row.time : null)), props.data)} label={'prenota'} />)))

    rows = rows.filter((row) => {
        if (row.time !== timeReserved) {
            return row
        } else {
            return row.button = <IStandardButton onClick={()=> getReservation(getTime(rows.find(row => row.time == timeReserved)), props.data)} label={'Prenotato'} reserved/>
        }
    })


    return (
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
    );
}

export default TableReservation