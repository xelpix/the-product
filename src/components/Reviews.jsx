import { StyledReviews } from './styles/Reviews.styled';
import { Container } from './styles/Container.styled';

import { reviews } from '../customers';
import Review from './Review';

export default function Reviews() {
  return (
    <StyledReviews>
      <Container>
        {reviews.map((item, index) => {
          return <Review key={index} item={item} />;
        })}
      </Container>
    </StyledReviews>
  );
}
