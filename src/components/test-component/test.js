import { ReactComponent } from "*.svg";

const myList = ['ziemniaki', 'chleb', 'mleko', 'ser', 'kiełbasa'];
const Test = () => {
    return (
        <ul>
        {myList.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    
    );
}

// class Test extends ReactComponent {

// }

export default Test

