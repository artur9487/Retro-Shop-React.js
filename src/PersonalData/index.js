/** @format */

import React, { useState, useEffect, useContext } from 'react';
import OrderHistory from './OrderHistory';
import { Stack, Box, Typography } from '@mui/material';
import PurchaseHistory from './PurchasesHistory';
import useCustomFadeHook from '../customHooks/customFadeHook';
import { useSelector } from 'react-redux';
import Footer from '../Footer';
import '../globalVariables.scss';
import { MainContext } from '../Context.js';
import { useDispatch } from 'react-redux';
import { fetch_orders, fetch_purchases } from '../redux/Products/actions';

const PersonalData = () => {
	const {
		matches3,
		user: { email }
	} = useContext(MainContext);
	const { myPurchases, orders } = useSelector((state) => state.productsData);
	const { fadeIn, setFade } = useCustomFadeHook();
	const [matchState, setMatchState] = useState(false);
	const dispatch = useDispatch();

	//--------------FETCHING DATA LOGIC-----------------
	useEffect(() => {
		dispatch(fetch_orders(email));
		dispatch(fetch_purchases(email));
	}, [dispatch]);
	//--------------FADE IN LOGIC-----------------
	useEffect(() => {
		const func = () => {
			setFade();
			setMatchState(!matches3);
		};
		func();
	}, [matches3]);

	return (
		<Box>
			{myPurchases && orders ? (
				<>
					<Stack
						sx={{ minHeight: '100vh' }}
						className={`${fadeIn} container`}
						direction={matchState ? 'row' : 'column'}
						justifyContent={!matches3 ? 'space-evenly' : 'flex-start'}
						alignItems={matchState ? 'flex-start' : 'center'}
						spacing={5}>
						{orders.length > 0 ? (
							<OrderHistory orderItems={orders} />
						) : (
							<Typography
								variant='h4'
								sx={{ fontFamily: 'Oleo Script Swash Caps' }}>
								No orders yet
							</Typography>
						)}
						{myPurchases.length > 0 ? (
							<PurchaseHistory myPurchases={myPurchases} />
						) : (
							<Typography
								variant='h4'
								sx={{ fontFamily: 'Oleo Script Swash Caps' }}>
								No purchases yet
							</Typography>
						)}
					</Stack>
					<Footer />
				</>
			) : null}
		</Box>
	);
};

export default PersonalData;
