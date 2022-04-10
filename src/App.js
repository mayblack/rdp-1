import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({ name }) => {
  return <h1 style={{
    backgroundColor: 'green',
    color: 'white',
    margin: 0
  }}>{name}!</h1>
}

const RightHandComponent = ({ message }) => {
  return <p style={{
    backgroundColor: 'yellowgreen',
    margin: 0
  }}>{message}!</p>
}

function App() {
  return (
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Marcin"/>
        <RightHandComponent message="Welcome"/>
      </SplitScreen>
  );
}

export default App;
