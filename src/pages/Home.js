import React, { useEffect } from 'react';

import Game from '../components/Game';

import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);
	const { popular, newGames, upcoming } = useSelector((state) => state.games);

	return (
		<GameList>
			<h2>Games</h2>
		</GameList>
	);
};

const GameList = styled(motion.div)``;

export default Home;
