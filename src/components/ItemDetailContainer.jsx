import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getItem } from '../firebase/db';

function ItemDetailContainer() {
    const [detail, setDetail] = useState();
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        const showProductDetail = async () => {
            try {
                const product = await getItem(productId);
                setDetail(product);
                setLoading(false);
            } catch (error) {
                console.error('Error al tratar de leer productos en base de datos:', error);
            }
        };
        showProductDetail();
    }, [productId]);

    return (
        <div className="detail-container">
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <div className='grid-item'>
                    <ItemDetail detail={detail} />
                </div>
            )}
        </div>
    );
}

export default ItemDetailContainer;