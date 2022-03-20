import React from 'react'
import Search from "../../components/Search";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SearchBar from "../../components/SearchBar";
import {Typography} from "@mui/material";
import Logo from '../../assets/images/logo-padol.svg'
import Player from "../../components/Player";
import BlogPost from "../../components/BlogPost";

const Home = () => {

	let numPlayer : Array<string> = ['player1', 'player2', 'player3'];

	return (
		<React.Fragment>
			<Search />
			<CssBaseline />
			<Container maxWidth={'xl'}>

				<Box sx={{pt: 4}} >
					<Typography variant={'h1'} component={'h1'} sx={{ color: 'primary.main', textTransform: 'uppercase'}}>Ranking <i>WorldPadelTour</i></Typography>
					<Box sx={{display: 'flex', justifyContent: 'space-around', pt: 4}} >
						{
							numPlayer.map(function(player, index){
								return(
									<React.Fragment key={'player-' + index}>
										<Player />
									</React.Fragment>
								)
							})
						}
					</Box>
				</Box>
				<Box sx={{display: 'flex', justifyContent: 'space-around', pt: 4}} >
					{
						numPlayer.map(function(player, index){
							return(
								<React.Fragment key={'player-' + index}>
									<Player />
								</React.Fragment>
							)
						})
					}
				</Box>
			</Container>
		</React.Fragment>
	)
}

export default Home