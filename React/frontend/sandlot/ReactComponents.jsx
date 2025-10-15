export function ShowReactImages() {
    const coolImage = {
        name: 'Yummy Food',
        imgUrl: 'https://i.imgur.com/IVN7yYA.jpeg',
        imageSize: 90,

    }
    let content = <img src={coolImage.imgUrl} alt={coolImage.name} width={coolImage.imageSize} />

    return (
        <>
            <div> {content} </div>
        </>
    )
}

export function ShowReactList() {
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];

    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    );

    return (
        <>
            <div> {listItems} </div>
        </>
    )
}

export function UseEventhandler() {
    let handleNewClick = () => alert("I clicked a different button")

    return (
        <>
            <button onClick={handleNewClick}>
                HERE IS THE NEW BUTTON
            </button>
        </>
    )
}


