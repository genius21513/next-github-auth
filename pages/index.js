/* eslint-disable react/no-unescaped-entities */

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession();

  // console.log('NEXTAUTH_URL', process.env.NEXTAUTH_URL);
  // console.log('GITHUB_ID', process.env.GITHUB_ID);

  return (
    <>
      <Head>
        <title>Next Auth with Google, Github</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {
          !session? (
            <>
              <p>Not signed in</p>
              <br/>
              <button onClick={() => signIn()}>Sign in</button>
            </>
          ) : (
            <>
              <h4>Signed in as {session.user.name}</h4>
              <button onClick={() => signOut()}>Sign out</button>
            </>
          )
        }
      </main>
    </>
  )
}
