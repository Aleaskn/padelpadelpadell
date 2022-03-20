import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import styled from '@emotion/styled';

export interface IStandardButton extends ButtonProps {
    label?: string
    disabled? : boolean
    reserved? : boolean
    userReservation?: boolean
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize'
}

const reserved = (props : IStandardButton) =>
    props.reserved ?
        {
            color : '#c12400',
            borderColor : '#c12400'
        }
        : null

const BaseButton = styled(Button)`
  ${reserved};
`;

const StandardButton : React.FC<IStandardButton> = (props : IStandardButton) => {
    return (
            <BaseButton
                sx={{
                    pt: "2px",
                    pb: "2px",
                    pl: 2,
                    pr: 2,
                    textTransform: props.textTransform,
                    borderRadius: 10
                }}
                {...props}
                disabled={props.disabled}
                variant="outlined"
            >{props.label}</BaseButton>
    );
}

export default StandardButton;