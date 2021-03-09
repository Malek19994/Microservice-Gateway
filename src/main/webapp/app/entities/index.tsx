import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Discipline from './discipline';
import Program from './program';
import Course from './course';
import Lesson from './lesson';
import Resource from './resource';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}discipline`} component={Discipline} />
      <ErrorBoundaryRoute path={`${match.url}program`} component={Program} />
      <ErrorBoundaryRoute path={`${match.url}course`} component={Course} />
      <ErrorBoundaryRoute path={`${match.url}lesson`} component={Lesson} />
      <ErrorBoundaryRoute path={`${match.url}resource`} component={Resource} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
