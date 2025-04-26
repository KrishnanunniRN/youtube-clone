import './App.css';
import Header from './Header';
import Scroll from './Scroll';
import SideBar from './SideBar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <SideBar />
        <div className="app__content">
          <Scroll />
          {/* Your page content will come here */}
        </div>
      </div>
    </div>
  );
}

export default App;
