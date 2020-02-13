import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App: React.FC = (props) => {
  return (
    <div>
      <h1>UnstatedNext!</h1>
      <p>Your Name Here</p>
      <input />
    </div>
  )
}

const app = document.getElementById("app")
ReactDOM.render(<App />, app)