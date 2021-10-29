import logo from "./logo.svg";
import "./App.css";
import myProfileImage from "./Component/Profile/ProfilePhoto";
import MyFullName from "./Component/Profile/FullName";
import MyFullAdress from "./Component/Profile/Address";

function App() {
  return (
    <div className="App">
      <myProfileImage />
      <MyFullName />
      <MyFullAdress />
    </div>
  );
}

export default App;
