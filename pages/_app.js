import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import {ChakaraProvider} from '@chakra-ui/react'

import {Layout} from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
