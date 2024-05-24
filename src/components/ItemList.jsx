import Item from './Item';

function ItemList({ products }) {
    return (
        <>
            {products.map(product => (
                <Item product={product} key={product.id} />
            ))}
        </>
    );
}

export default ItemList;