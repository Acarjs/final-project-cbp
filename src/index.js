import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ProductsProvider } from './context/product_context.jsx'
import { FilterProvider } from './context/filter_context.jsx'
import { CartProvider } from './context/cart_context.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { UserProvider } from './context/user_context.jsx'

//dev-fpchdplhs3wuyu7p.us.auth0.com
//IU9mTf2fdqj5wg7OzKDTy2Z0s6C2STd4

ReactDOM.createRoot(document.getElementById('root')).render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>,
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
)
