import { FilterLabel, FilterStyle } from './Filter.styled';
import { FilterSelectMenu } from './FilterSelectMenu';

export const Filter = ({ handleSelectChange }) => {
  return (
    <FilterStyle>
      <FilterLabel htmlFor="tweetters">Choose a filter: </FilterLabel>
      <FilterSelectMenu handleSelectChange={handleSelectChange} />
    </FilterStyle>
  );
};
