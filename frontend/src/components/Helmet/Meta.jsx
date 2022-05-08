import React from 'react'
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
           <title>{title}</title> 
           <meta name='description' content={description} />
           <meta name='keyword' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome To बारी',
    description: 'Agricluture Information Management system ',
    keywords: 'farmers, बारी, department of agriculture, agricultural science'
}

export default Meta
