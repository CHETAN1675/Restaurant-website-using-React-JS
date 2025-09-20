import "./Header.css"
const Header=()=>{
return(
    <div className="header">
       <h1>ReactMeals</h1>
       <button className='btn'>Your Cart <span className="total-items">0</span></button>
    </div>
);
};

export default Header