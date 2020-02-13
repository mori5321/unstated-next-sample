import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useContainer } from 'unstated-next';
import { UserContainer } from "./containers/UserContainer"

const App: React.FC = (props) => {
  return (
    <UserContainer.Provider>
      <Screen />
    </UserContainer.Provider>
  )
}

const Screen: React.FC = (props) => {
  const userContainer = useContainer(UserContainer)

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const user = { ...userContainer.user, name: e.target.value }
    userContainer.setUser(user);
  }

  return (
    <div>
      <h1>UnstatedNext!</h1>
      <p>{userContainer.user.name}</p>
      <input onChange={onChangeInput} />
    </div>
  )
}

const app = document.getElementById("app")
ReactDOM.render(<App />, app)