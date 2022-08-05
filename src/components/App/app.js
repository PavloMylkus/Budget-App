import React, { Suspense } from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
	Link
} from "react-router-dom";
import About from '../About';
import Home from '../Home';
import Header from '../Header';
import Statistics from '../Statistics';
import { open } from '../../utils/indexdb';
import { Wrapper } from './styles';
import { GlobalStyle } from './styles';
import Settings from '../Settings';





class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: true
		}
	}

	componentDidMount() {
		open().then(() => {
			this.setState({
				loading: false
			})
		});
	}
	render() {
		if (this.state.loading) {
			return <div>Loading...</div>
		};
		return (

			<BrowserRouter>
				<GlobalStyle />
				<Wrapper>
					<Header />
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='statistics' element={<Statistics />} />
							<Route path='settings' element={<Settings />} />
							<Route path='about' element={<About />} />


						</Routes>
					</Suspense>

				</Wrapper>

			</BrowserRouter>


		)
	}



}


export default App;
