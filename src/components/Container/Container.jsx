import React from 'react';
import PropTypes from 'prop-types';
import { PhonebookWrap } from './Container.styled';

export const Container = ({ titleText, children }) => {
  return (
    <PhonebookWrap>
      {titleText && <h1>{titleText}</h1>}
      {children}
    </PhonebookWrap>
  );
};

Container.propTypes = {
  titleText: PropTypes.string,
  children: PropTypes.node,
};
