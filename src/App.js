import Menu from "./components/Menu";
import './styles/App.scss';
import Channel from "./views/Channel";


function App() {
  return (
    <div id="App">
      <Menu />
      <div id="main-area">
         <Channel />
      </div>
    </div>
  );
}

export default App;
