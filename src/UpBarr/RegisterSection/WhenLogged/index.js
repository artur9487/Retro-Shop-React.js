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
	const { matches3, matches2, user } = useContext(MainContext);
	const { fadeIn, setFade } = useCustomFadeHook();
	const [matchState, setMatchState] = useState(false);

	//-------FADE IN LOGIC-----------
	useEffect(() => {
		setFade();
		setMatchState(!matches3);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [matches3]);

	return (
		<>
			<Stack
				className={fadeIn}
				justifyContent={matchState ? 'space-evenly' : 'center'}
				direction='row'
				alignItems='center'
				sx={{ width: { xs: 100, sm: 225, md: 250 } }}>
				<Stack
					alignItems='center'
					justifyContent={matchState ? 'space-evenly' : 'center'}
					direction={matchState ? 'row' : 'column'}
					sx={{ width: !matches2 ? '65%' : '50%' }}>
					<Badge badgeContent={cartCount} color='primary'>
						<Tooltip title='Open Cart'>
							<IconButton
								sx={{
									p: 1,
									mt: 1,
									bg: 'black',
									color: 'black',
									display: 'block',
									fontSize: !matches3 ? 12 : 4
								}}
								onClick={handleCart}>
								<ShoppingCartIcon sx={{ fontSize: !matches3 ? 25 : 20 }} />
							</IconButton>
						</Tooltip>
					</Badge>
					<NotyficationSection user={user.email} />
				</Stack>
				<Button
					color='inherit'
					sx={{
						fontSize: 19,
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
