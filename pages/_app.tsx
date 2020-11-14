// import { Provider } from 'react-redux'
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../styles/global.scss"
import store from '../state/store';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}