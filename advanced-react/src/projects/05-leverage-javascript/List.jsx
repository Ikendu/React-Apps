import Person from "./Person";
import { people } from "../../data";
const List = () => {
  const getPeople = people.map((person) => {
    return <Person {...person} key={person.id} />;
  });
  return (
    <div>
      <div>{getPeople}</div>
    </div>
  );
};
export default List;
