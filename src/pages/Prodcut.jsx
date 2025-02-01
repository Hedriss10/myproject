import React, { useState } from "react";

// exemplo 1: passando uma string para o prop
function Saudacao(props) {
    return <h1>{props.nome}</h1>;
}

// exemplo 2: passando um número para o prop
function Contador(props) {
    return <h1>{props.contador} notificação</h1>
}

// exemplo: 3 passando a função como um prop
function Botao(props) {
    return <button onClick={props.aoClicar}>Clica aqui</button>;
}

// exemplo: 4 passando multiplos propos
function Produto(props) {
    return (
        <div>
            <h1>Nome: {props.nome}</h1>
            <p>Preço: {props.preco}</p>
        </div>
    )
}

// exemplo: 5 passando multiplos propos
Produto.defaultProps = {
    preco: 'Indisponível',
};

// listagem de produtos
const ListProduct = [
    { id: 1, name: 'Produto 1', price: 10.99 },
    { id: 2, name: 'Produto 2', price: 19.99 },
    { id: 3, name: 'Produto 3', price: 29.99 },
    { id: 4, name: 'Produto 4', price: 39.99 },
    { id: 5, name: 'Produto 5', price: 49.99 },
];

const Product = () => {
    const [searchId, setSearchId] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(ListProduct);

    const handleSearch = () => {
        const filtered = ListProduct.filter(product => product.id.toString() === searchId);
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <h1>Product Page</h1>
            <Saudacao nome="Produtos" />
            <Contador contador={1} />
            <Botao aoClicar={() => console.log('Clica')} />

            <div>
                <input
                    type="text"
                    placeholder="Search by ID"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Product;