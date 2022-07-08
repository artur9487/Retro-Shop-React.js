/** @format */

import './App.scss';
import { Routes, Route } from 'react-router-dom';
import AllProducts from './Layout';
import MyProducts from './myProductLayout';
import LayoutWithCart from './LayoutWithCart';
import Login from './Login';
import Register from './Register';
import ProductDetails from './ProductDetails';
import PersonalData from './PersonalData/index';
import CompleteApp from './CompleteApp';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { MainContext } from './Context';
import { useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';

function App() {
	const theme = createTheme({
		typography: {
			button: {
				textTransform: 'none'
			}
		}
	});
	const user = useSelector((state) => state.AuthData.user);
	const matches = useMediaQuery('(max-width:1200px)');
	const matches2 = useMediaQuery('(max-width:900px)');
	const matches3 = useMediaQuery('(max-width:600px)');
	return (
		<ThemeProvider theme={theme}>
			<MainContext.Provider
				value={{
					user,
					matches,
					matches2,
					matches3
				}}>
				<RouteCompo>
					<Routes>
						<Route path='/' element={<CompleteApp />}>
							<Route
								path='/'
								element={
									<LayoutWithCart>
										<AllProducts />
									</LayoutWithCart>
								}>
								<Route path=':productID' element={<ProductDetails />} />
							</Route>
							<Route
								path='yourProduct'
								element={
									<LayoutWithCart>
										<MyProducts />
									</LayoutWithCart>
								}>
								<Route path=':productID' element={<ProductDetails />} />
							</Route>
							<Route
								path='personalData'
								element={
									<LayoutWithCart>
										<PersonalData />
									</LayoutWithCart>
								}
							/>
							<Route path='Login' element={<Login />} />
							<Route path='Register' element={<Register />} />
						</Route>
					</Routes>
				</RouteCompo>
			</MainContext.Provider>
		</ThemeProvider>
	);
}

const RouteCompo = styled.div`
	position: relative;
`;

export default App;
