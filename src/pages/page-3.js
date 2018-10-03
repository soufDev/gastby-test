import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const thirdPage = () => (
  <Layout>
    <h1>Hi this is Soufiane Page :D</h1>
    <p>welcome to page 3 of my gatsby app :)</p>
    <Link to="/">Go to the homepage</Link>  
  </Layout>    
);

export default thirdPage;