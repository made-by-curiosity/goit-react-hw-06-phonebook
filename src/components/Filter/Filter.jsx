import React from 'react';
import PropTypes from 'prop-types';
import { ContactsFilter, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, updateFilter } from 'redux/filter/slice';

export const Filter = ({ filterTitle }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilter = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <ContactsFilter>
      {filterTitle && <p>{filterTitle}</p>}
      <FilterInput type="text" value={filter} onInput={handleFilter} />
    </ContactsFilter>
  );
};

Filter.propTypes = {
  filterTitle: PropTypes.string,
};
