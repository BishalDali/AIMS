import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from '../component/table';

function User() {
    const [data, setData] = useState([]);
    const getToken = localStorage.getItem('token');
    console.log('token', getToken);
    useEffect(() => {
        const fetchdata = async () => {
            const getData = await axios.get(
                'http://localhost:3001/signup/read',
                {
                    headers: {
                        authorization: localStorage.getItem('token'),
                    },
                }
            );
            setData(getData.data.readData);
        };
        fetchdata();
    }, []);
    return <Table data={data}></Table>;
}

export default User;
