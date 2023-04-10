import Head from "next/head";
import Link from "next/link";


export default function FirstPost(){
    return (
        <>
            <Head>
                <title>First Post in Next.js</title>
            </Head>
            <h1>It's first post!</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}