import React from 'react';
import Hero from './Hero';
import Universe from './Universe';
import LeftSectionImage from './LeftSectionImage';
import RightSectionImage from './RightSectionImage';

import Navbar from "../Navbar";
import Footer from "../Footer";

function ProductsPage() {
    return (
        <>
            <Hero />
            <LeftSectionImage />
            <RightSectionImage />
            <Universe />
        </>
    );
}

export default ProductsPage;