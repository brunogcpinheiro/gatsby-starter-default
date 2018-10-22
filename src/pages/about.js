import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const SecondPage = () => (
	<Layout>
		<h1>About us</h1>
		<img
			src="https://uploads.codesandbox.io/uploads/user/e03ca466-da38-4c98-b8fb-d05ae4d98b4d/A8xZ-react.jpeg"
			alt="Logo"
			style={{ width: '100%' }}
		/>
		<p>
			Lorem ipsum dolor amet iceland cronut meggings, distillery PBR&B migas fam
			hashtag. You probably haven't heard of them mlkshk fanny pack meggings,
			hell of flexitarian cardigan knausgaard. Pinterest man braid tattooed
			quinoa, man bun vice banh mi whatever sartorial vegan waistcoat plaid
			taxidermy selfies 8-bit. Polaroid cronut coloring book vinyl farm-to-table
			YOLO. Four loko direct trade green juice, artisan brunch blue bottle
			poutine la croix helvetica fingerstache 8-bit. Celiac bespoke adaptogen,
			selvage YOLO before they sold out fingerstache chartreuse. Prism brunch
			next level pug cloud bread umami cardigan keffiyeh mustache four loko
			helvetica chambray.
		</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
);

export default SecondPage;
