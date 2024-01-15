import globeSolid from './assets/globe-solid.svg'
import './App.css'
function Header(){
    return (
        <>
            <div className="header">
                <img src={globeSolid} className='globe'></img>
                <h1>My Travel Journal</h1>
            </div>
        </>
    )
};

export default Header;