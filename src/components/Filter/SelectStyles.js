export const filterStyles = {
  control: (provided, state) => ({
    ...provided,
    innerWidth: '20px',
    width: '200px',
    border: '1px solid #212121',
    borderRadius: '4px',
    boxShadow: state.isFocused ? '0 0 1px 1px #00055590' : 'none',
    '&:hover': {
      borderColor: '#212121',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    width: '200px',
    backgroundColor: state.isSelected ? '#121212' : 'white',
    color: state.isSelected ? 'white' : 'black',
    '&:hover': {
      backgroundColor: state.isSelected ? '#121212' : '#f5f5f5',
    },
    menu: provided => ({
      ...provided,
      width: '200px',
    }),
  }),
};
