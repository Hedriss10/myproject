function Botao(props) {
  return <button onClick={props.aoClicar}>Clica aqui</button>;
}

function Saudacao(props) {
  return <h1>{props.nome}</h1>;
}

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <Saudacao nome="Hedris" />
      <Botao aoClicar={() => console.log("Clica")} />
    </div>
  );
}
export default Profile;
