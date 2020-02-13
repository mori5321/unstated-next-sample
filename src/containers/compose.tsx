import * as React from "react";
import { Container } from "unstated-next";

const compose = (containers: Array<Container<any, any>>, children: JSX.Element): JSX.Element => {
  return containers.reduce((acc, Container) => {
    return <Container.Provider>{acc}</Container.Provider>
  }, children)
}

export { compose }