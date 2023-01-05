import PropTypes from 'prop-types';
import { Article } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Article>{message}</Article>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
