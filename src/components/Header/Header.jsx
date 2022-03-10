import React from 'react';
import './Header.scss';
import Logo from '../Header/Logo/Logo';
import Search from './Search/Search';
import Basket from './Basket/Basket';
import SubHeader from './SubHeader/SubHeader';

export default function Header() {
	return (
		<>
			<div className="header"  data-testid="header">
				<Logo />
				<Search />
				<div className="basket">
					<Basket />
				</div>
			</div>
			<div className="mobile-search">
			  <Search />
			</div>
			<SubHeader />
		</>
	);
}
