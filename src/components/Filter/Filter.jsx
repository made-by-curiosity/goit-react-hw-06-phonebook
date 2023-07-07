import React from 'react';
import PropTypes from 'prop-types';
import { ContactsFilter, FilterInput } from './Filter.styled';

export const Filter = ({ filterTitle, filterValue, onFilter }) => {
  return (
    <ContactsFilter>
      {filterTitle && <p>{filterTitle}</p>}
      <FilterInput
        type="text"
        name="filter"
        value={filterValue}
        onInput={onFilter}
      />
    </ContactsFilter>
  );
};

Filter.propTypes = {
  filterTitle: PropTypes.string,
  filterValue: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
};
