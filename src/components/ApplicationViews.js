import React from "react";
import { LocationList } from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";
import { Route } from "react-router-dom";
import { ProductProvider } from "./products/ProductProvider";
import { ProductList } from "./products/ProductList";
import { ProductTypeProvider } from "./products/ProductTypeProvider";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import { EmployeeForm } from "./employees/EmployeeForm";
import { EmployeeList } from "./employees/EmployeeList";

export const ApplicationViews = (props) => {
  return (
    <>
    <EmployeeProvider>
      <ProductTypeProvider>
        <LocationProvider>
          <ProductProvider>
            <Route
              exact
              path="/locations"
              render={(props) => <LocationList {...props} />}
            />
            <Route
              exact
              path="/products"
              render={(props) => <ProductList {...props} />}
            />
            <Route
              exact
              path="/employees"
              render={(props) => <EmployeeList {...props} />}
            />
            <Route
              exact
              path="/employees/create"
              render={(props) => <EmployeeForm {...props} />}
            />
          </ProductProvider>
        </LocationProvider>
      </ProductTypeProvider>
      </EmployeeProvider>
    </>
  );
};

//DRY way to have 2 lists together if path is the same
/* <LocationProvider>
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
      </LocationProvider> */
