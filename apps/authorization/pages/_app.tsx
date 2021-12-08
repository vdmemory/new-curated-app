import { AppProps } from 'next/app';
import { wrapper } from '../setup';

import { Layout } from '../components';

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default wrapper.withRedux(CustomApp);
