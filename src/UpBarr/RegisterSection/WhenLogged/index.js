/** @format */

import React, { useEffect, useState, useContext } from 'react';
import { Button, Badge, Tooltip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotyficationSection from '../NotyficationSection';
import useCustomFadeHook from '../../../customHooks/customFadeHook';
import { Stack } from '@mui/material';
import { IconButton } from '@mui/material';
import { MainContext } from '../../../Context';

const WhenLogged = ({ cartCount, handleCart, handleSignOut }) => {
	const { matches3, user } = useContext(MainContext);
	const { fadeIn, setFade } = useCustomFadeHook();
	const [matchState, setMatchState] = useState(false);

	//-------FADE IN LOGIC-----------
	useEffect(() => {
		const func = async () => {
			setFade();
			setMatchState(!matches3);
		};
		func();
	}, [matches3]);

	return (
		<>
			<Stack
				className={fadeIn}
				justifyContent={matchState ? 'space-evenly' : 'center'}
				direction='row'
				alignItems='center'
				sx={{ width: { xs: 150, sm: 250 } }}>
				<Stack
					alignItems='center'
					justifyContent={matchState ? 'space-evenly' : 'center'}
					direction={matchState ? 'row' : 'column'}
					sx={{ width: '65%' }}>
					<Badge badgeContent={cartCount} color='primary'>
						<Tooltip title='Open Cart'>
							<IconButton
								sx={{
									p: 1,
									mt: 1,
									bg: 'black',
									color: 'black',
									display: 'block'
								}}
								onClick={handleCart}>
								<ShoppingCartIcon />
							</IconButton>
						</Tooltip>
					</Badge>
					<NotyficationSection user={user.email} />
				</Stack>
				<Button
					color='inherit'
					sx={{
						fontSize: 20,
						textTransform: 'none',
						my: 2,
						color: 'black',
						display: 'block',
						mx: 0,
						px: 0,
						width: '35%',
						fontFamily: 'Sofia'
					}}
					onClick={handleSignOut}>
					Sign Out
				</Button>
			</Stack>
		</>
	);
};

export default WhenLogged;
