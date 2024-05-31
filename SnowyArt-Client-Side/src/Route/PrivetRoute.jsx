import { useContext } from 'react';
import { ContextAuth } from '../provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
const PrivetRoute = ({ children }) => {
  const { userDta } = useContext(ContextAuth);
  const location = useLocation();
  if (userDta) {
    return children;
  }
  return <Navigate to={'/login'} state={location.pathname} />;
};

export default PrivetRoute;
PrivetRoute.propTypes = {
  children: PropTypes.node,
};
