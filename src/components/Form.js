import {useState} from "react";

export default function Form({setContacts}) {

    // const [name, setName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [phone, setPhone] = useState("");
    // const [address, setAddress] = useState("");
    // const [postalCode, setPostalCode] = useState("");
    // const [city, setCity] = useState("");

    // function handleName(e) {
    //     setName(e.target.value);
    // };

    // function handleLastName(e) {
    //     setLastName(e.target.value);
    // };

    // function handlePhone(e) {
    //     setPhone(e.target.value);
    // };

    // function handleAddress(e) {
    //     setAddress(e.target.value);
    // };

    // function handlePostalCode(e) {
    //     setPostalCode(e.target.value);
    // };

    // function handleCity(e) {
    //     setCity(e.target.value);
    // };

    const initialContactsState = {
        name:"",
        lastName:"",
        address:"",
        postalCode:"",
        city:"",
        phone:""
    }

    const [form, setForm] = useState(initialContactsState)

    function handleInput(e) {
        const inputName = e.target.id;
        const newValue = e.target.value;

        setForm({...form, ...{[inputName]: newValue}})
    }
    

    function submit(e) {
        e.preventDefault();

        // const newContact = {name, lastName, address, postalCode, city, phone};

         const newContact = {
            name:  form.name,
            lastName:  form.lastName,
            address:  form.address,
            postalCode:  form.postalCode,
            city:  form.city,
            phone:  form.phone
        };

        setContacts(currentContacts => [...currentContacts, newContact]);

        // // e.target.reset();
        setForm(initialContactsState)
        // setName("");
        // setLastName("");
        // setAddress("");
        // setPostalCode("");
        // setCity("");

    }

    return (
        <form className="form-group" onSubmit={submit}>
            <input id="name"        value={form.name}        onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce un nombre"/>
            <input id="lastName"    value={form.lastName}    onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce los apellidos"/>
            <input id="phone"       value={form.phone}       onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce un nombre"/>
            <input id="address"     value={form.address}     onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce la dirección"/>
            <input id="postalCode"  value={form.postalCode}  onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce el código postal"/>
            <input id="city"        value={form.city}        onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce el número de teléfono"/>
            <input type="submit" class="btn btn-success" value="Registrar"/>
        </form>
    )
}




