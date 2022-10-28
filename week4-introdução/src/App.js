
function Example1(props) {
  return (
    <h1>
      {props.firstName}
    </h1>
  );
}

function Example2(props) {
  return (
    <h1>
      {props.firstName + " " + props.lastName}
    </h1>
  );
}

function App(){
  return(
    <div>
      <h2>Example 1</h2>
      <Example1 firstName="Lucas" lastName="Maciel"></Example1>
      <Example2 firstName="Lucas" lastName="Maciel"></Example2>
    </div>
  )
}

export default App;

// https://reactks.org/docs/components-and-props.html/