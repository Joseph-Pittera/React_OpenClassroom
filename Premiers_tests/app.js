function Banner() {
  const title = "la maison jungle";
  return <h1>{title.toUpperCase()}</h1>;
}
function Cart() {
  const plantes = [
    { name: "monstera", price: 8 },
    { name: "lierre", price: 10 },
    { name: "bouquet de fleurs", price: 15 },
  ];
  const lis = plantes.map((plante) => (
    <li>
      {plante.name}: {plante.price} €
    </li>
  ));
  const total = (
    <p>Total : {plantes.reduce((acc, val) => acc + val.price, 0)} €</p>
  );
  return (
    <ul>
      {lis} {total}
    </ul>
  );
}

ReactDOM.render(
  <React.Fragment>
    <Banner />
    <Cart />
  </React.Fragment>,
  document.getElementById("root")
);
