import React from 'react';
import {FeatureContainer, FeatureButton} from './FeatureElements';


const Feature = () => {
    return(
        <FeatureContainer>
            <h1> Kebap of the Day</h1>
            <p> Olive oil, paprika , black pepper, tsp salt</p>
            <FeatureButton>Order Now</FeatureButton>

        </FeatureContainer>

    )
}

export default Feature;