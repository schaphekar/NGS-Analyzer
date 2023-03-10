// import logo from './logo.svg';
import './App.css';

const App = () => {
  const name = "NGS";
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Hello </h1>
      {name ? (
        <>
          <h1>test</h1>
          <h2>There is a name.</h2>
        </>
      ):(
        test
  )}

    </div>
  );
}

export default App;
