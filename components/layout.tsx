import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from './header/Header'

export default function Layout({ children }) {
    return (
    <div className="row">
        <div className="container-fluid">
            <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
            name="description"
            content="Brad Rice, Artistry and Technology" />
            <title>Brad Rice</title>

        </Head>
            <Header/>
        <div className="main">{children}</div>
        </div>
    </div>
    )
  }
  