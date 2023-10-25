import * as React from "react";

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function getCurrentRoute() {
  console.log("Current Route is :",JSON.stringify(navigationRef.current.getCurrentRoute()));
  return navigationRef.current?.getCurrentRoute().name;
}
