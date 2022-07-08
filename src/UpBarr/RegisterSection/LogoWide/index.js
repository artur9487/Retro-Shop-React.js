/** @format */

import React, { useEffect, useState, useContext } from 'react';
import { Typography, Box } from '@mui/material';
import useCustomFadeHook from '../../../customHooks/customFadeHook';
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../../../Context';

const LogoWide = () => {
	const { matches3 } = useContext(MainContext);
	const navigate = useNavigate();
	const { fadeIn, setFade } = useCustomFadeHook();
	const [matchState, setMatchState] = useState(false);

	//-----------FADE IN LOGIC-----------
	useEffect(() => {
		const func = async () => {
			setFade();
			setMatchState(!matches3);
		};
		func();
	}, [matches3]);
	return (
		<Typography
			onClick={() => navigate('/')}
			className={fadeIn}
			variant='h5'
			noWrap
			component='div'
			sx={{
				p: 1,
				fontSize: 35,
				cursor: 'pointer',
				mr: 2,
				fontStyle: 'italic',
				fontFamily: 'Oleo Script Swash Caps',
				display: 'block',
				display: {
					textAlign: 'center',
					xs: 'none',
					sm: matchState === false ? 'none' : 'flex'
				},
				color: 'black'
			}}>
			RetroShop
		</Typography>
	);
};

export default LogoWide;
