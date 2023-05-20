import {
  FilterLabel,
  FilterOption,
  FilterSelect,
  FilterStyle,
} from './Filter.styled';

export const Filter = ({ handleSelectChange }) => {
  return (
    <FilterStyle>
      <FilterLabel htmlFor="tweetters">Choose a filter: </FilterLabel>
      <FilterSelect
        name="tweetters"
        id="tweetters"
        onChange={handleSelectChange}
      >
        <FilterOption value="all">All</FilterOption>
        <FilterOption value="follow">Follow</FilterOption>
        <FilterOption value="following">Following</FilterOption>
      </FilterSelect>
    </FilterStyle>
  );
};
