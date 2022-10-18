function Card(props){
    return(
        <>
            <ul className="cards flex jcb">
                {props.allCategories.map((item) => {
                    return (
                        <li key={item.id}>
                            <div className="flex-20">
                                <img src={item.img} alt={item.title} />
                                <div className="card-info flex jcb flex-30">
                                    <h4>{item.title}</h4>
                                    <h4 className="price">${item.price}</h4>
                                </div>
                                <div>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </li>
                    );
                }
                    )
                }
            </ul>
        </>
    );
}
export default Card;