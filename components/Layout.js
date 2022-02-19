import Head from "next/head";
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Component } from "react/cjs/react.production.min";

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Azeezjim Houses & Suit</title>
            </Head>
            <Box maxWidth="1280px" m="auto">
                <header>
                    Navbar
                </header>
                <main>
                    {footerchildren}
                </main >
                <>
                    Footef
                </footer>
            </Box>           
        </>
    );
};

export default Layout;