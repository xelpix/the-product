import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { StyledReview } from './styles/Review.styled';

export default function Review({ item: { id, name, rating, review, image } }) {
  const stars = new Array(5).fill('');

  for (let i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i] = <AiFillStar />;
    } else {
      stars[i] = <AiOutlineStar />;
    }
  }

  return (
    <StyledReview layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{name}</h2>
        <img src={`./images/${image}`} />
      </div>
      <div>
        <span>
          {stars.map((star, index) => {
            return <div key={index}>{star}</div>;
          })}
        </span>
        <p>{review}</p>
      </div>
    </StyledReview>
  );
}
