import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api';

export const loadGames = () => async (dispatch) => {
	const popularData = await axios.get(popularGamesURL());
	const newGamesData = await axios.get(newGamesURL());
	const upcomingData = await axios.get(upcomingGamesURL());
	dispatch({
		type: 'FETCH_GAMES',
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingData.data.retults,
			newGames: newGamesData.data.results,
		},
	});
};
