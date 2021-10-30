import React from 'react';
import Layout from "../../components/Layout/Layout";
import {Container} from "@material-ui/core";

const Home = () => {
    return (
       <Layout>
           <Container maxWidth={'lg'}>
               Home Page
           </Container>
       </Layout>
    );
};

export default Home;