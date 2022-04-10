import { SplitScreen } from './SplitScreen';
import { LeftHandComponent } from './LeftHandComponent';
import { RightHandComponent } from './RightHandComponent';

function App() {
  return (
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Marcin"/>
        <RightHandComponent message="Welcome"/>
      </SplitScreen>
  );
}

export default App;
