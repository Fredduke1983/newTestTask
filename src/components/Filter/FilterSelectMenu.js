import Select from 'react-select';
import { FilterSelect } from './Filter.styled';
import { filterStyles } from './SelectStyles';

export const FilterSelectMenu = ({ handleSelectChange }) => {
  return (
    <FilterSelect>
      <Select
        menuPosition="fixed"
        styles={filterStyles}
        onChange={handleSelectChange}
        options={[
          { value: 'all', label: 'All' },
          { value: 'follow', label: 'Follow' },
          { value: 'following', label: 'Following' },
        ]}
        menuPlacement="auto"
      />
    </FilterSelect>
  );
};
