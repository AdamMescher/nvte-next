import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import reset from 'styled-reset'
import StyledPage from './styled';
import Meta from '../Meta/index';
import Footer from '../Footer/index';
import theme from '../../lib/theme';
// eslint-disable-next-line
createGlobalStyle`
 ${reset}
  @font-face {
    font-display: swap;
  }
  html {
    font-size: 1em;
  }
  body {
    margin: 0;
    font-family: ${theme.fontStack.serif};
    font-weight: 400;
    line-height: 1.65;
    display: flex;
    flex-direction: column;
  }
  html, body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
  }
  h1, h2, h3, h4 {
    margin: 0;
    font-family: ${theme.fontStack.sansSerif};
    font-weight: inherit;
    line-height: 1.2;
  }
  h1 {
    margin-top: 0;
    font-size: ${theme.fontSize.h1};
  }
  h2 {
      font-size: ${theme.fontSize.h2};
  }
  h3 {
      font-size: ${theme.fontSize.h3};
  }
  h4 {
      font-size: ${theme.fontSize.h4};
  }
  small,
  .font_small {
      font-size: ${theme.fontSize.small};
  }
`

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        {/* eslint-disable-next-line */}
        {children}
        <Footer />
      </StyledPage>
    </ThemeProvider>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page;
