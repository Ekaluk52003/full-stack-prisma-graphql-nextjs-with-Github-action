import withApollo from "next-with-apollo";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import Layout from "./components/Layout";
import { AuthProvider } from "../utils/Auth";
import ClientOnly from "./ClientOnly";
import { onError } from "@apollo/client/link/error";
import Router from "next/router";
import CustomThemeProvider from "../src/themes/CustomThemeProvider";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  apollo: any;
}

const Myapp = (props: MyAppProps) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    apollo,
  } = props;
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ApolloProvider client={apollo}>
        <AuthProvider>
          {/* ClientOnly fix issue Prop className did not match In Material UI */}
          <ClientOnly>
            {/* <ColorModeProvider> */}
            <CustomThemeProvider>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </CustomThemeProvider>
            {/* </ColorModeProvider> */}
          </ClientOnly>
        </AuthProvider>
      </ApolloProvider>
    </CacheProvider>
  );
};

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL,

  credentials: "include",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );

      if (message.includes("Not Authenticated")) {
        Router.push("/signin");
      }
    });
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache().restore(initialState || {}),
    credentials: "include",
  });
})(Myapp);
