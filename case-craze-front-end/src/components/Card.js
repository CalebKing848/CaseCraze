
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";




function Card({imageUrl, title, star, reviews, prevPrice, amount}) {
  return (
  <section className="card">
  <img src={imageUrl} alt={title} className="card-img"/>
  <div className="card-details">
    <h3 className="card-title">{title}</h3>
    <section className="card-price">
      <div className="price">
        $ {amount}
      </div>
      <div className="bag">
        <BsFillBagHeartFill className="bag-icon"/>
      </div>
    </section>
  </div>
</section>
  );
}

export default Card;
