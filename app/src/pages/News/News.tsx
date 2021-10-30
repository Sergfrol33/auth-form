import React from 'react';
import Layout from "../../components/Layout/Layout";
import {useAuthContext} from "../../context/AuthProvider";
import {Link} from 'react-router-dom'
import {Box} from "@material-ui/core";

const News = () => {
    //@ts-ignore
    const {lists} = useAuthContext()
    return (
        <Layout>
            {lists.map((item:any) =>(
                <Box>
                    <Link to={`/news/${item.id}`} key={item.id.toString()}>
                        {item.name}
                    </Link>
                </Box>
            ))}
        </Layout>
    );
};

export default News;