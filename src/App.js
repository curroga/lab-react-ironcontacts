import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const initialList = contacts.slice(0, 5);
  const [list, setList] = useState(initialList);

  const addContacts = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length)
    const contactAleatorio = contacts[randomIndex]
    const copy = structuredClone(list)
    copy.push(contactAleatorio)
    setList(copy)
  }

  return (
    <div className="App">
      <h3>IronContacts</h3>

      <h5>Picture</h5>
      <h5>Name</h5>
      <h5>Popularity</h5>
      <button onClick={addContacts}>Añadir Contacto</button>
      <br />
      {list.map((eachContact) => {
        return (
          <div key={eachContact}>
            <img src={eachContact.pictureUrl} alt="picture" width="80px" />
                
            <p>{eachContact.name}</p>
            <p>{eachContact.popularity.toFixed(2)}</p>
            <p>{eachContact.wonOscar === true ? "🏆" : ""}</p>
            <p>{eachContact.wonEmmy === true ? "🏆" : ""}</p>
              
            
          </div>
        );
      })}
    </div>
  );
}

export default App;
