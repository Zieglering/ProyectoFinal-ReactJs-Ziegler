import ItemCount from './ItemCount';

function ItemDetail({ detail }) {
    return (
        <div>
            <div className="card mb-3 detailCard">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={detail.image || '/assets/images/IMG_placeholder.jpg'} className="img-fluid rounded-start" alt="coffe" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body drinkText">
                            <h2 className="card-title">{detail.title}</h2>
                            <p className="card-text descriptionText">{detail.description}</p>
                            <div className="coffeeCardContainer ingredientsText">
                                <h4 className="card-text">Ingredientes:</h4>
                                <ul>
                                    <li>{detail.ingredients}</li>
                                </ul>
                            </div>
                            <div className='btnDetailCard'>
                                <ItemCount detail={detail} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ItemDetail;