import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/gatsby-icon.png';

import styled from 'styled-components';

const Container = styled.nav`
	height: 80px;
	background: #fff;
	}
`;

const Menu = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	div {
		img {
			width: 50px;
			height: 50px;
		}
	}

	ul {
		list-style: none;
		display: flex;

		li {
			padding: 25px;
		}
	}
`;

const Header = () => (
	<Container>
		<Menu>
			<div>
				<Link to="/">
					<img src={Logo} alt="Logo" />
				</Link>
			</div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</Menu>
	</Container>
);

export default Header;
