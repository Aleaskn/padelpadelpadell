import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export interface IAvatar {
    link: string
}

const ImgAvatar : React.FC<IAvatar> = (props : IAvatar) => {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar
                alt="Remy Sharp"
                src={props.link}
                sx={{ width: 100, height: 100 }}
            />
        </Stack>
    );
}

export default ImgAvatar