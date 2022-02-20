import Head from "next/head";
import { Box } from '@chakra-ui/react';
// import { Component } from "react/cjs/react.production.min";

import Navbar from "./Navbar";
import Footer from "./Footer";



const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Azeezjim Houses & Suit</title>
            </Head>
            <Box maxWidth="1280px" m="auto">
                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main >
                <footer>
                    <Footer />
                </footer>
            </Box>           
        </>
    );
};

export default Layout;