import { AppProps } from 'next/app';
import Head from 'next/head';
import wrapperStoreRedux from '../store';

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Welcome to client!</title>
            </Head>
            <div>
                <main>
                    <Component {...pageProps} />
                </main>
            </div>
        </>
    );
}

export default wrapperStoreRedux.withRedux(CustomApp);
