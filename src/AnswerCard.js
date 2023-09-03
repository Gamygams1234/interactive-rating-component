import image from "./public/images/illustration-thank-you.svg";

export default function AnswerCard(props) {
  const { rating } = props;

  return (
    <div className="answer-card card">
      <img src={image} alt="" />

      <div className="rating-results">You selected {rating} out of 5</div>
      <h2 className=" fw-700">Thank you!</h2>
      <p className="fw-400">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  );
}
