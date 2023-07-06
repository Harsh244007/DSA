const ChildComponent = () => {
  return <p>Hello from the ChildComponent!</p>;
};

const ParentComponent = ({ component: Component }) => {
  return (
    <div>
      <h1>ParentComponent</h1>
      <Component />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ParentComponent component={ChildComponent} />
    </div>
  );
};

export default App;
