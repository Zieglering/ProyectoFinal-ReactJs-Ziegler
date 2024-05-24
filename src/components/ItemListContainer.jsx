import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getItemsFromCategory } from '../firebase/db';

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { ingredient } = useParams();

    useEffect(() => {
        const showProducts = async () => {
            try {
                const products = await getItemsFromCategory(ingredient);
                setItems(products);
                Promise.all(products).then(() => {
                    setLoading(false);
                });
            } catch (error) {
                console.error('Error al tratar de leer productos en base de datos:', error);
            }
        };
        showProducts();
    }, [ingredient]);

    return (
        <div>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <div >
                    <div className='mainTitle'>
                        <h1>Bienvenido a nuestro CoffeHouse</h1>
                        <p>Disfrutá del mejor café especialmente seleccionado por nuestros maestros cafeteros
                            <br />Somos especialistas en el arte del café</p>
                    </div>
                    <div className='grid-container'>
                        <div className="product-container row row-cols-1 row-cols-md-4 g-4">
                            <ItemList products={items} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ItemListContainer;