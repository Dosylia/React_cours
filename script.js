function Banner() 
{
    const title = "La maison jungle";
    return(<h1>{title.toUpperCase()}</h1>);
}

function Cart() 
{
    let prixMonstera = 8;
    let prixLierre = 10;
    let prixBouquetDeFleurs = 15;
    return (<div>
        <h2>Panier</h2>
        <ul>
            <li>Monstera : {prixMonstera} €</li>
            <li>Lierre : {prixLierre} €</li>
            <li>Bouquet de fleurs : {prixBouquetDeFleurs} €</li>
        </ul>
        <p>Total : {prixMonstera + prixLierre + prixBouquetDeFleurs} €</p>
    </div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Banner/>
        <Cart />
    </div>
);