import { Inter, } from '@next/font/google'
import Head from 'next/head'
import React from "react";
import Base from "../components/templates/Base/Base";
import Hero from "../components/Organisms/Hero/Hero";
import Products from "../components/Organisms/Products/Products";


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Base inner={[<Hero key={1} />, <Products key={2} />]} />
        </>
    )
}
