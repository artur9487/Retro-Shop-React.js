/** @format */

import React, { useEffect, useContext } from 'react';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import useCustomFadeHook from '../../../customHooks/customFadeHook';
import { MainContext } from '../../../Context';

const WhenUnlogged = ({ handleCloseNavMenu }) => {
	const { matches3 } = useContext(MainContext);
	const { fadeIn, setFade } = useCustomFadeHook();
	const registerPages = [
		{ navName: 'Login', navLink: 'Login' },
		{ navName: 'Register', navLink: 'Register' }
	];
	useEffect(() => {
		setFade();
	}, [matches3]);
	return (
		<>
			<Stack
				direction={!matches3 ? 'row' : 'column'}
				justifyContent='center'
				alignItems='center'
				className={fadeIn}>
				{registerPages.map((item, indx) => (
					<Link key={indx} className='links' to={item.navLink}>
						<Button
							color='inherit'
							key={item.navName}
							onClick={handleCloseNavMenu}
							sx={{
								textTransform: 'none',
								fontSize: 20,
								my: 0,
								color: 'black',
								display: 'block',
								fontFamily: 'Sofia'
							}}>
							{item.navName}
						</Button>
					</Link>
				))}
			</Stack>
		</>
	);
};

export default WhenUnlogged;
