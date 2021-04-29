import {useState} from "react";
import './App.css';
import Schedule from "./components/Schedule";
import Form from "./components/Form"

function App() {

  const initialContactsState = [
    {name: "Fran", lastName: "Gómez Fernández", address: "Calle Primera, nº 1, 1ºA", city: "Málaga", postalCode: 29000, phone: 698456234},
    {name: "Lucía", lastName: "García Ruíz", address: "Calle Segunda, nº 2, 2ºB", city: "Madrid", postalCode: 45040, phone: 645963612},
    {name: "María", lastName: "Núñez Coronado", address: "Calle tercera, nº 3, 3ºC", city: "Albacete", postalCode: 11230, phone: 672645593},
  ];

  const [contacts, setContacts] = useState(initialContactsState);
 

return (
    <div className="container">
        <h2 className="my-4">Agenda</h2>
        <Schedule contacts={contacts} setContacts={setContacts}/>
        <h2 className="my-4">Nuevo contacto</h2>
        <Form setContacts={setContacts}/>
    </div>
)
}

export default App;
