import React from 'react';
import Layout from './src/components/Layout/Layout';
import { StoreProvider } from './src/hooks/useStore';

export const wrapRootElement = ({ element }) => {
  const initialState = {
    showNav: true,
    showMenuNav: false,
  };

  return (
    <StoreProvider initialState={initialState}>
      {/* <ThemeProvider> */}
      {element}
      {/* </ThemeProvider> */}
    </StoreProvider>
  );
};

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
