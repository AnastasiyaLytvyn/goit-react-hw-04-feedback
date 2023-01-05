import PropTypes from 'prop-types';
import { Container, Article } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Container>
      <Article>Good: {good}</Article>
      <Article>Neutral: {neutral}</Article>
      <Article>Bad: {bad}</Article>
      <Article>Total: {total}</Article>
      <Article>Positive feedback: {positivePercentage}%</Article>
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
