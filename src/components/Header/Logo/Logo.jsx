import React from 'react';
import LogoImage from '../../../assets/logo.png';
import './Logo.scss';
const Logo = () => {
	return (
		<div className="logo" data-testid="logo">
			<a href="/">
				<img src={LogoImage} alt="" />
			</a>
		</div>
	);
};

export default Logo;
