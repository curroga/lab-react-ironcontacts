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
  const ordenarContactos = (patata) => {
    const copy = structuredClone(list)
    if(patata === "nombres"){
    copy.sort((elem1, elem2) => {
      if(elem1.name > elem2.name){
        return 1
      } else{
        return -1
      }
    })
  } else if(patata === "popularidad"){
    copy.sort((elem1, elem2) => {
      if(elem1.popularity < elem2.popularity){
        return 1
      } else{
        return -1
      }
    })
  }

    setList(copy)
  }
  const borrarContact = (contacId) =>{
    const filteredList = list.filter((eachContact) => {
      if(eachContact.id ===contacId){
      return false
      } else{
        return true
      }
    })
    setList(filteredList)
  }
  

  return (
    <div className="App">
      <h3>IronContacts</h3>

      <button onClick={addContacts}>Añadir Contacto</button>
      <button onClick={()=> ordenarContactos("nombres")}>Ordenar por Nombres</button>
      <button onClick={()=> ordenarContactos("popularidad")}>Ordenar por Popularidad</button>
      <br />
      <h5>Picture</h5>
      <h5>Name</h5>
      <h5>Popularity</h5>

      {list.map((eachContact) => {
        return (
          <div key={eachContact}>

            <img src={eachContact.pictureUrl} alt="picture" width="80px" />
                
            <p>{eachContact.name}</p>
            <p>{eachContact.popularity.toFixed(2)}</p>
            <p>{eachContact.wonOscar === true ? "🏆" : ""}</p>
            <p>{eachContact.wonEmmy === true ? "🏆" : ""}</p>
            <button onClick={() => borrarContact(eachContact.id)}>Borrar</button>              
            
          </div>
        );
      })}
    </div>
  );
}

export default App;
