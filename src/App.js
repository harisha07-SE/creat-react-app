import './App.css';
import profileImage from './img/personal-image.JPG';

function App() {
  return (
    <div className="App">
     <h1>My React App</h1>
     <h3>Programmer: Harisha Annapareddy</h3>
      <img src={profileImage} alt="profile-image" width="250" height="250"/>
    </div>
  );
}

export default App;
