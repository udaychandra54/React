import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux'

function App() {
  const uiSlice = useSelector(state => state.ui.cartIsVisible)
  return (
    <Layout>
      {uiSlice && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
