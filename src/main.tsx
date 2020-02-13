import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useContainer } from 'unstated-next';
import { GeneralContainer } from "./containers/GeneralContainer";
import { UserContainer } from "./containers/UserContainer"
import { PlanContainer } from "./containers/PlanContainer";

const App: React.FC = (props) => {
  return (
    <GeneralContainer>
      <Screen />
    </GeneralContainer>
  )
}

const Screen: React.FC = (props) => {
  const userContainer = useContainer(UserContainer)
  const planContainer = useContainer(PlanContainer)

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const user = { ...userContainer.user, name: e.target.value }
    userContainer.setUser(user);
  }

  return (
    <div>
      <h1>UnstatedNext!</h1>
      <p>{userContainer.user.name}</p>
      <input onChange={onChangeInput} />
      <p>Your Plan is {planContainer.plan.planName}({planContainer.plan.planID})</p>
    </div>
  )
}

const app = document.getElementById("app")
ReactDOM.render(<App />, app)