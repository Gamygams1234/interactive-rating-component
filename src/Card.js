
import star from "./public/images/icon-star.svg"

export default function Card(props){
    const {handleClick, submitRating} = props;
    return (     
        
    <div className="card">

    <div className="star-indicator">
      <div className="star-icon">
        <img src={star} alt="" />
      </div>
    </div>

    <h1 className="fw-700">How did we do?</h1>

    <p className= "fw-400">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

    <div className="rating-options">
        <div onClick ={(e)=>{handleClick(e)}} className="rating-indicator">
        <div className = " number">1</div>
        </div>
        <div onClick ={(e)=>{handleClick(e)}} className="rating-indicator">
            2
        </div>
        <div onClick ={(e)=>{handleClick(e)}} className="rating-indicator">
            3
        </div>
        <div onClick ={(e)=>{handleClick(e)}} className="rating-indicator">
            4
        </div>
        <div onClick ={(e)=>{handleClick(e)}} className="rating-indicator">
            5
        </div>
    </div>

    <button onClick={submitRating} className= "btn btn-orange">SUBMIT</button>
  </div>)
}