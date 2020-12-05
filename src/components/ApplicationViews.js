import React from "react";
import { LocationList } from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";
import { Route } from "react-router-dom";
import { ProductProvider } from "./products/ProductProvider";
import { ProductList } from "./products/ProductList";

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        <ProductProvider>
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <LocationList />
                <ProductList {...props} />
              </>
            )}
          />
        </ProductProvider>
      </LocationProvider>
      ;
    </>
  );
};

//This is the same as above, but not as dry as it uses Route twice for the same path
/* <LocationProvider>
        <ProductProvider>
          <Route
            exact
            path="/"
            render={(props) => <LocationList {...props} />}
          />
          <Route
            exact
            path="/"
            render={(props) => <ProductList {...props} />}
          />
        </ProductProvider>
      </LocationProvider> */
