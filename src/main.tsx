import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'
import App from './App.tsx'
import { persistor, store } from './Store/store.ts';
persistor.persist(); // Initialize the persistor

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Provider store={store}>
      <PersistGate loading persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>

  </StrictMode>
)
