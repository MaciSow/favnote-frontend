import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import myStore from 'store';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes/Notes';
import Twitters from 'views/Twitters/Twitters';
import Articles from 'views/Articles/Articles';
import DetailsPage from 'views/DetailsPage/DetailsPage';
import { routes } from 'routes';
import LoginRegisterPage from 'views/LoginRegisterPage/LoginRegisterPage';

const Root = () => (
  <Provider store={myStore}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={[routes.login, routes.register]} component={LoginRegisterPage} />
          {/* <Route exact path={routes.register} component={LoginRegisterPage}  /> */}
          <Route exact path={routes.home} render={() => <Redirect to={routes.notes} />} />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.note} component={DetailsPage} />
          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.article} component={DetailsPage} />
          <Route exact path={routes.twitters} component={Twitters} />
          <Route path={routes.twitter} component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
