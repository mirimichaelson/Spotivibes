import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}
  callAPI() {
    fetch("http://localhost:9000/song")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

  UNSAFE_componentWillMount() {
    this.callAPI();
}


render() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-intro">;{this.state.apiResponse}</p>
      </header>

      <body>
        <form method="post" action="http://localhost:9000/keyword">
          <label> Give me a song that makes me feel... </label>
          <input type="text" id="keyword" name="keyword" />
          <input type="submit" value="Submit" />
        </form>
        <div>
        <iframe src="https://open.spotify.com/embed/track/${this.state.apiResponse}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </body>
    </div>
  );
}
}
export default App;
