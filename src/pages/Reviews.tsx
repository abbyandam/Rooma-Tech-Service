import "../styles/reviews.scss"
import { FaStar } from "react-icons/fa";
import { reviews } from "../globals";

export default function Reviews() {
    return (
        <div className="reviews">
            <img src='/review_background.png'/>
            <h2>Reviews</h2>
            <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
            <div className="gap"/>
            <div className="gap"/>
            <ol>
                {reviews.map((review, i) => (
                    <div className="review" key={i}>
                        <h6>{review.title}</h6>
                        <p>"{review.content}"</p>
                        <h6 className="user"><span className="primary">- {review.user}</span></h6>
                    </div>
                ))}
            </ol>
        </div>
    )
}