import React, {useState} from 'react';

function Header() {
	const [navbar, setNavbar] = useState(false);
	const changeColor = () => {
		if(window.scrollY >= 100)
			setNavbar(true);
		else
			setNavbar(false);
	}

	window.addEventListener('scroll', changeColor);
	return (
		<header className={navbar ? 'header active' : 'header'}>
			<div className='logo'>
				<a href="#">
					<img src="Netflix_logo.png" alt="logo" />
				</a>
			</div>
			<div className='right_icon'>
				<img src="right_logo.png" alt="right_logo" /> 
			</div>
		</header>
	)
}

export default Header