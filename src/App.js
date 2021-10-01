import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponents from './Components/ClassComponents';
import HomeComponent from './Components/BaiTapComponent.js/HomeComponent';
import DataBinding from './DataBinding/DataBinding';
import StyleComponent from './AStyleComponent/StyleComponent';

// JSX
function App() {
  return (
    <div className="App">
      {/* <h1>Hello React</h1> */}
      {/* sử dụng Component */}
      {/* <FunctionComponent/>
      <ClassComponents/> */}
      {/* <HomeComponent/> */}

      {/* <DataBinding/> */}
      <StyleComponent/>
    </div>
  );
}

export default App;
