import { SplitScreen } from './SplitScreen';
import { LeftHandComponent } from './LeftHandComponent';
import { RightHandComponent } from './RightHandComponent';
import {RegularList} from './RegularList';
import {SmallPersonListItem} from './people/SmallPersonListItem';
import {LargePersonListItem} from './people/LargePersonListItem';

const people = [{
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
}, {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
}, {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
}];

function App() {
  return (
      <div>
          <SplitScreen leftWeight={1} rightWeight={3}>
            <LeftHandComponent name="Marcin"/>
            <RightHandComponent message="Welcome"/>
          </SplitScreen>
          <hr/>
          <RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem}/>
          <hr/>
          <RegularList items={people} resourceName="person" itemComponent={LargePersonListItem}/>
      </div>
  );
}

export default App;
