function Header() 
{
    return(<h1>La maison jungle</h1>);
}

function Cart() 
{
    return (<div>
        <p>Monstera</p>
        <p>Lierre</p>
        <p>Bouquet de fleur</p>
    </div>)
}

function Banner() 
{
    return (<div>
        <Header />
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <Banner/>
);