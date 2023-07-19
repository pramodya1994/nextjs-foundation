import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import Alert from "../components/alert/alert";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <Link href="/posts/first-post">First Post Here</Link>.)
                </p>
                <br/>
                <Alert type="success">This is a alert!</Alert>
                <Alert type="success">This is a alert!</Alert>
            </section>
        </Layout>
    );
}