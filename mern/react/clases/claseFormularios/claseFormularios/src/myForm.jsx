import { useState } from "react";
const MyForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [tipo, setTipo] = useState("");
    const [terminos, setTerminos] = useState(false);

    const validar = (event) => {
        event.preventDefault();
        if (name === "" || email === "" || password === "" || passwordConfirm === "" || tipo === "" || !terminos) {
            alert("Por favor, complete todos los campos y acepte los términos y condiciones.");
        } else if (password !== passwordConfirm) {
            alert("Las contraseñas no coinciden.");
        } else {
            alert("Formulario enviado con éxito.");
        }
    }

    return (
        <form>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" onChange={(event) =>setName(event.target.value)} value={name} />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={(event) => setEmail(event.target.value)} value={email} />
            <br />
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" onChange={(event) =>setPassword(event.target.value)} value={password} />
            <br />
            <label htmlFor="passwordConfirm">Repetir Contraseña:</label>
            <input type="password" id="passwordConfirm" name="passwordConfirm" onChange={(event) =>setPasswordConfirm(event.target.value)} value={passwordConfirm} />
            <br />

            <p>{password !== passwordConfirm && "Las contraseñas no son Iguales" }</p>

            <input type="radio" id="tipo" name="tipo" value="Admin" onChange={(event) => setTipo(event.target.value)} />
            <label htmlFor="tipo">Admin</label>
            <input type="radio" id="tipos" name="tipo" value="Simple" onChange={(event) => setTipo(event.target.value)} />
            <label htmlFor="tipo">Simple</label>
            <br />
            <input type="checkbox" id="terminos" name="terminos" onChange={(event) => setTerminos(event.target.checked)} checked={terminos} />
            <label htmlFor="terminos">Acepto los términos y condiciones</label>
            <br />
            <button onClick={validar}>Registrar</button>
            <button >Limpiar</button>
        </form>
    );

}

export default MyForm;