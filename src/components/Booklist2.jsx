import Img1 from '../images/Book7.webp'
import Img2 from '../images/Book8.jpg'
import Img3 from '../images/Book9.webp'
import Img4 from '../images/Book10.webp'
import Img5 from '../images/Book11.webp'
import Img6 from '../images/Book12.webp'

import Booking from './Bookstyle'

function BookList2(params) {
    
    const BookCollection1 = [
        {
            id : 1,
            image1 : Img1,
            name1 : "Pathways to greatness (A.P.J.Abdul Kalam)",
            price1 : `£${560}`
        },
        {
            id : 2,
            image1 : Img2,
            name1 : "Ratan TATA",
            price1 : `£${360}`
        },
        {
            id : 3,
            image1 : Img3,
            name1 : "Steve Jobs",
            price1 : `£${460}`
        },
        {
            id : 4,
            image1 : Img4,
            name1 : "The Anatomy Of Spy",
            price1 : `£${860}`
        },
        {
            id : 5,
            image1 : Img5,
            name1 : "King Of Envy",
            price1 : `£${460}`
        },
        {
            id : 6,
            image1 : Img6,
            name1 : "Simple Not Easy",
            price1 : `£${960}`
        },
    ]

    const Books1 = BookCollection1.map((item,id)=><Booking
    key = {id}
    image1 = {item.image1}
    name1 = {item.name1}
    price1 = {item.price1}
    
    />)

    return (
        <>
        <div className="bookwrap">
            {Books1}
        </div>
        </>
    )

}

export default BookList2