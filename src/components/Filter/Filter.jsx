import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactSlice';

import { selectFilter } from 'selectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterChange = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
  return (
    <div className={css.filter}>
      <label className={css.labelFilter}>
        Filter
        <input
          type="name"
          value={filter}
          onChange={filterChange}
          className={css.filterInput}
        />
      </label>
    </div>
  );
};

export default Filter;
