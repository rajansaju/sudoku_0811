/** @format */

import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
const PublicRoute = ({ component: Component, ...rest }) => {
   return (
      <Route
         {...rest}
         render={props => (
            <Suspense fallback={<></>}>
               <Header />
               <Component {...props} />
               <Footer />
            </Suspense>
         )}
      />
   );
};
export default PublicRoute;
