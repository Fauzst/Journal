import './App.css'
import Data from './Data'

function Card(props){
    console.log(props)
    return (
        <>
            <div className="card">
                <img className="card--image" src={props.img} ></img>
                <div className='card--info'>
                    <div className='card--location'>
                        <p className='location'>{props.location}</p>
                        <p><a href="#">View on Google Maps</a></p>
                    </div>
                    <h1>{props.landmark}</h1>
                    <p>{props.date}</p>
                    <div className='description'><p>{props.description}</p></div>
                </div>
            </div>
        </>
    )
}

export default Card;