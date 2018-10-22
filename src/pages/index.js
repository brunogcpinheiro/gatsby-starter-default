import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = ({ msg }) => (
	<Layout>
		<h1>Hello World</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<Link to="/page-2/">Go to page 2</Link>
		<br />
		<Link to="/about/">About</Link>
	</Layout>
);

export default IndexPage;
