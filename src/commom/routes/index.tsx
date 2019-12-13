import * as React from "react";
import { secretRoutes } from "./secret";
import { Route, useHistory } from "react-router-dom";
import { publicRoutes } from "./public";
// import { useRole } from "../../features/Login/hooks/useRoles";

export function Routes() {
  const isAuth = localStorage.getItem("@user:token");
  // const { filterRole } = useRole()
  const history = useHistory()

  React.useEffect(() => {
    if (!isAuth) {
      history.replace('/')
    }
  }, [isAuth, history])

  return (
    <>
      {(publicRoutes).map(({ component: Component, ...route }, i) => (
        <Route
          key={`public_route_${i}`}
          {...route}
          //@ts-ignore
          render={props => <Component {...props} />}
        />
      ))}
      {/* {filterRole(secretRoutes).map(({ component: Component, ...route }, i) => (
        <Route
          key={`secret_route_${i}`}
          {...route}
          //@ts-ignore
          render={props => <Component {...props} />}
        />
      ))} */}
    </>
  );
}
