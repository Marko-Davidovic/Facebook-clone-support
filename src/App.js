import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Login from "./Login"
import {useStateValue} from "./StateProvider"

function App() {

  // const user = null;
  const [{user}] = useStateValue();

  return (

    <div className="App">
      {!user ? (
      <Login />
      ) : (
        <>
      <Header />
      <div className="App__body">
        <Sidebar />
        <Feed />
        {/* widget */}
      </div>
      </>
      )}
    </div>
  );
}

export default App;