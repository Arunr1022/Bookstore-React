function Bookstyle(props) {

    
    if (props.image) {
        return (
                <div className="Booksection">
                <img className="Bookimg" src={props.image} alt="...!" />
                <p className="Bookname">{props.name}</p>
                <p className="Bookprice">{props.price}</p>
            </div>
        );
    }

    if (props.image1) {
        return (
                <div className="Booksection1">
                <img className="Bookimg1" src={props.image1} alt="...!" />
                <p className="Bookname1">{props.name1}</p>
                <p className="Bookprice1">{props.price1}</p>
            </div>
        );
    }

}

export default Bookstyle