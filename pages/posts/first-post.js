import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>First Post in Next.js</title>
            </Head>
            <h1>It's first post!</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}