import React from 'react';
import Layout from "../../components/Layout/Layout";
import {useParams} from "react-router-dom";
import {useAuthContext} from "../../context/AuthProvider";
import {Box} from "@material-ui/core";
import {ILists} from "../../App";


const DetailNews = () => {
    const params = useParams<{id:string}>().id
    //@ts-ignore
    const {lists} = useAuthContext()
    const details = lists.find((item:ILists) => item.id.toString() === params)
    return (
        <Layout>
            <Box component={'h1'}>
                {details.name}
            </Box>
            <Box>
                {details.text}
            </Box>
        </Layout>
    );
};

export default DetailNews;