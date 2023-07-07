import React from 'react';
import PropTypes from 'prop-types';
import { PhonebookSection } from './Section.styled';

export const Section = ({ sectionTitle, children }) => {
  return (
    <PhonebookSection>
      {sectionTitle && <h2>{sectionTitle}</h2>}
      {children}
    </PhonebookSection>
  );
};

Section.propTypes = {
  titleText: PropTypes.string,
  children: PropTypes.node,
};
