import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from 'components/loading-page';
import sessionCreator from 'store/session/actions';
import { getIsValidate, getIsValidating } from 'store/session/selectors';

const Home = lazy(() => import('pages/home'));
const AnotherPage = lazy(() => import('pages/another-page'));
const Profile = lazy(() => import('pages/profile'));

const SessionRouter = () => {
  const dispatch = useDispatch();
  const location = useSelector(store => store.router.location);
  const queryParams = location.query;
  const [isRequested, setIsRequested] = useState(false);
  const isValidate = useSelector(getIsValidate);
  const isValidating = useSelector(getIsValidating);

  useEffect(() => {
    if (!isRequested) {
      dispatch(sessionCreator.sessionValidateRequest(queryParams));
      setIsRequested(true);
    }
  }, [isRequested]);

  return (
    <>
      {isValidating && <LoadingPage />}
      {isValidate && isRequested && (
        <Suspense fallback={<div />}>
          <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/anotherPage" component={AnotherPage} />
            <Route component={Home} />
          </Switch>
        </Suspense>
      )}
    </>
  );
};

export default SessionRouter;
