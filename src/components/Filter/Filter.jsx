import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeHandleFilter = event => {
    const { value } = event.currentTarget;

    dispatch(changeFilter(value));
  };

  return (
    <>
      <Label>
        Find contact by name
        <Input type="text" value={filter} onChange={changeHandleFilter} />
      </Label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};
