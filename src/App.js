import { SplitScreen } from './SplitScreen';

const LeftHandComponent = () => {
  return <h1 style={{
    backgroundColor: 'green',
    color: 'white',
    margin: 0
  }}>Left!</h1>
}

const RightHandComponent = () => {
  return <p style={{
    backgroundColor: 'yellowgreen',
    margin: 0
  }}>Right!</p>
}

function App() {
  return (
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent/>
        <RightHandComponent/>
      </SplitScreen>
  );
}

export default App;
