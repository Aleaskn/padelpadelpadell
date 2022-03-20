import React from 'react'
// import { ICourt } from './model'
import {useParams} from "react-router-dom";
import {CssBaseline, Typography} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BlogPost from "../../components/BlogPost";
import SearchMin from "../../components/SearchMin";
import internal from 'stream';

export interface ICourt {
    id : string,
    id_citta : string,
    id_struttura : string,
    nome : string,
    address : string,
    outdoor : string,
    open : string,
    close : string,
    timeslot : number,
    cNome : string,
    regione : string,
    cap : string,
    prov : string,
    sNome : string,
    tell : string,
    email : string,
    img : string,
    valutazione : number
}

const Courts : React.FC<{}> = () => {

    const [courts, setCourts] = React.useState<Array<ICourt>>([]);

    // React.useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/photos')
    //         .then(res => res.json())
    //         .then(res => setCourts(res.filter((court : ICourt) => court.id < 10)))
    // }, [])
    
    const params = useParams()

    //console.log(params)

    React.useEffect(() => {
        fetch(`http://localhost:3001/citta/cNome/${params.city}`)
            .then(res => res.json())
            .then(res => setCourts(res[0]))
    }, [])

    const restoreOutPutParams = (inputValue : string) : string => {
        let input = inputValue.trim();
        let i : number;

        for(i = 0; i < input.length; i++) {
            if (input[i] == '-') {
                input = input.slice(0, i) + ' ' + input.slice(i+1, input.length);
                i = 0;
            }
        }

        return input.toLowerCase()
    }

    let city = params?.city ? restoreOutPutParams(params.city) : ''

    return (
        <React.Fragment>
            <SearchMin />
                      <CssBaseline />
                      <Container sx={{pt: 7}} maxWidth="lg">
                          <Typography variant={'h1'} component={'h1'} sx={{color: 'primary.main', textTransform: 'uppercase'}}>campi a {city}</Typography>
                          <Box sx={{display: 'flex', flexWrap: 'wrap'}} >
                          {
                              courts.map(function (court) {
                                  return (
                                      <React.Fragment key={'court' + court.id}>
                                        <BlogPost id={court.id.toString()} title={court.nome} imgLink={court.img} link={court.img}/>
                                      </React.Fragment>
                                  )
                              })
                          }
                          </Box>
                      </Container>
                  </React.Fragment>
   );
}

export default Courts