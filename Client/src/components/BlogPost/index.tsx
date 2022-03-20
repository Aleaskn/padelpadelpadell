import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Icon from "../Icons";
import {useNavigate} from "react-router-dom";

interface IBlogPost {
    imgLink: string
    title: string
    link: string
    id: string
}

const BlogPost : React.FC<IBlogPost> = (props) => {

    let navigate = useNavigate();

    return (
        <Card sx={{ width: 345, boxShadow: 'none', m: 2 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                width="270"
                height="270"
                image={props.imgLink}
            />
            <CardContent sx={{padding: '8px 0 0 0'}}>
                <Typography  onClick={() => navigate(props.title)} sx={{cursor: 'pointer', fontWeight: 700, textTransform: 'capitalize'}} variant="body1" component="div">
                    {props.title}
                </Typography>
                <Typography sx={{fontStyle: 'italic'}} variant="body1" component="div">
                    Coperto
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Padel Club Porto Recanati
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    V.le Europa, 7
                </Typography>
                <Icon glyph={'ball'} size={'md'} />
            </CardContent>
        </Card>
    );
}

export default BlogPost