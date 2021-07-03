import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { myTheme } from 'theme/mainTheme';
import PageContext from 'context/context';

class MainTemplate extends Component<any, any> {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>) {
    this.setCurrentPage(prevState.pageType);
  }

  setCurrentPage = (prevPageType = '') => {
    const pageTypes = ['twitters', 'articles', 'notes', 'login', 'register'];
    const {
      location: { pathname },
    } = this.props;

    let [currentPage] = pageTypes.filter((page) => pathname.includes(page));
    currentPage = currentPage ?? 'notes';

    if (prevPageType !== currentPage) {
      this.setState({
        pageType: currentPage,
      });
    }
  };

  render() {
    const { children } = this.props;
    const { pageType } = this.state;

    return (
      <div>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
        </PageContext.Provider>
      </div>
    );
  }
}

export default withRouter(MainTemplate);
