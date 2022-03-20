import React from 'react'
import Box from "@mui/material/Box";
import Icon from "../Icons";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import {useNavigate, useParams} from "react-router-dom";

const Input = styled.input`
  border: none;
  color: grey;
  cursor: pointer;
  font-size: 18px;
  height: 36px;
  outline: none;
  width: 100%;
`;

interface IIconButton {
    icon: any
    size: string
    inputSearch: string
}
const IconButtonWrapper: React.FC<IIconButton> = (props: IIconButton) => {

    let navigate = useNavigate();

    const cleanInput = (inputValue : string) : string => {
        let input = inputValue.trim();
        let i : number;

        for(i = 0; i < input.length; i++) {
            if (input[i] == ' ') {
                input = input.slice(0, i) + '-' + input.slice(i+1, input.length);
                i = 0;
            }
        }

        return input.toLowerCase()
    }

    const sendToPage = () => {
        let input = cleanInput(props.inputSearch);
        navigate("/" + input);
    }

    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton
                sx={{
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: 'transparent',
                    }
                }} aria-label={props.icon} size={'large'}
                onClick={sendToPage}
            >
                <Icon glyph={props.icon} size={props.size} />
            </IconButton>
        </Stack>
    );
}

const SearchBar = () => {

   const [input, setInput] = React.useState<string>('');

   const getInput = (event : React.ChangeEvent<HTMLInputElement>) => {
       setInput(event.target.value);
   }

   return (
       <Box
           sx={{
               border: 'none',
               borderRadius: 50,
               bgcolor: '#ffffff',
               display: 'flex',
               alignItems: 'center',
               height: 70,
               paddingLeft: 4,
               paddingRight: 4,
               width: 770,
           }}
       >
           <Input value={input} onChange={(event) => getInput(event)} type={'text'} />
           <IconButtonWrapper inputSearch={input} icon={'magnifyLens'} size={'xl'}/>

       </Box>
   );
}

export default SearchBar;