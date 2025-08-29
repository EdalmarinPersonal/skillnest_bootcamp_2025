export function FirstButton(props) {
  console.log(props);
  var estiloBoton = { color: 'blue', backgroundColor: 'yellow' };
  return <button style={estiloBoton}>{props.title}</button>;
}

export function FirstInput() {
  return <input placeholder="input del método 1" />;
}
