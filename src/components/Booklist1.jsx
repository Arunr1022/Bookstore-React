import Image1 from '../images/Book1.png'
import Image2 from '../images/Book2.jpg'
import Image3 from '../images/Book3.jpg'
import Image4 from '../images/Book4.jpg'
import Image5 from '../images/Book5.jpg'
import Image6 from '../images/Book6.jpg'
import Booking from './Bookstyle'

function Booklist() {

    const bookCollections = [
        {
            id:1,
            image : Image1,
            name : "TATA,Build An Epic and Atomic Habits",
            price : `£${300}`
        },
        {
            id:2,
            image : Image2,
            name : "Fourth Wings",
            price : `£${400}`
        },
        {
            id:3,
            image : Image3,
            name : "Unstoppable Us, Why the world isn't fair",
            price : `£${200}`
        },
        {
            id:4,
            image : Image4,
            name : "The Art of Happiness",
            price : `£${250}`
        },
        {
            id:5,
            image : Image5,
            name : "Money Make Over",
            price : `£${350}`
        },
        {
            id:6,
            image : Image6,
            name : "The Mountain Is You",
            price : `£${500}`
        }
    ]

    const Books = bookCollections.map((item,id) => <Booking
    key = {id}
    image ={item.image}
    name ={item.name}
    price ={item.price}
    />)

    return(
        <>
        <div className="bookwrap">
            {Books}
        </div>
        </>
    )
    
}

export default Booklist