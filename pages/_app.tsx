import { Provider } from "react-redux";
import "../styles/main.scss";
import store from "../redux/store/index";

export default function App({ Component, pageProps }: any) {
  const Layout = Component.layout;
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
