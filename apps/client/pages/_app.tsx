import { AppProps } from 'next/app';
import wrapperStoreRedux from '../store';

import { Layout } from '../components/layout';

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default wrapperStoreRedux.withRedux(CustomApp);
