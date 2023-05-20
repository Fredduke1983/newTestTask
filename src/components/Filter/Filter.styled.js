import styled from 'styled-components';

const FilterStyle = styled.div`
  text-align: center;
`;

const FilterLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

const FilterSelect = styled.select`
  padding: 0 10px;
  cursor: pointer;

  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  font-size: 14px;
`;

const FilterOption = styled.option``;
export { FilterStyle, FilterSelect, FilterOption, FilterLabel };
