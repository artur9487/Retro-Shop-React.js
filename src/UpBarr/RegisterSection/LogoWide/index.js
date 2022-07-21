/** @format */

import React, { useEffect, useState, useContext } from 'react';
import { Typography } from '@mui/material';
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
		setFade();
		setMatchState(!matches3);
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
