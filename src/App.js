import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponents from './Components/ClassComponents';
import HomeComponent from './Components/BaiTapComponent.js/HomeComponent';
import DataBinding from './DataBinding/DataBinding';
import StyleComponent from './StyleComponent/StyleComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import ChangeFontsize from './StateDemo/ChangeFontSize';
import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
import RenderWithArray from './RenderWithArray/RenderWithArray';
import HomePage from './Props/HomePage';

// JSX
function App() {
  return (
    <div className="App">
      {/* buổi 1 */}
      {/* <h1>Hello React</h1> */}
      {/* sử dụng Component */}
      {/* <FunctionComponent/>
      <ClassComponents/> */}
      {/* <HomeComponent/> */}

      {/* <DataBinding/> */}
      {/* <StyleComponent/> */}

      {/* buổi 2 */}
      {/* <HandleEvent/> */}
      {/* <StateDemo/> */}
      {/* <ChangeFontsize/> */}

      {/* buổi 3 */}
      {/* <BaiTapChonXe/> */}
      {/* <RenderWithArray/> */}
      <HomePage/>



      
    </div>
  );
}

export default App;
