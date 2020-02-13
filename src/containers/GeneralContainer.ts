import { compose } from "./compose";

import { UserContainer } from "./UserContainer";
import { PlanContainer } from "./PlanContainer";

const GeneralContainer = (props): JSX.Element => {
  return (
    compose(
      [
        UserContainer,
        PlanContainer
      ],
      props.children
    )
  )
}

export { GeneralContainer }