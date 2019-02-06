import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from '../Meta/index';
import StyledPage from './styled';
import theme from '../../lib/theme';

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          {this.props.children}
          <h5>This is the styled page</h5>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
