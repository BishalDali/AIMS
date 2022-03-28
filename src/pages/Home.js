import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token, 'token');
    }, []);
    return <div>This is home</div>;
}

export default Home;
