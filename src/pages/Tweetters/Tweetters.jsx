import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { getUsers } from 'utils/fetches.jsx';
import { Notify } from 'components/Notify/Notify';
import { Users } from 'components/Users/Users';
import { LoadMore } from './Tweetters.styled';
import { Filter } from 'components/Filter/Filter';

export const Tweetters = ({ toggleIsLoading }) => {
  const [users, setUsers] = useState([]);
  const [isFollows, setIsFollows] = useState(
    localStorage.getItem('user') ? localStorage.getItem('user').split(',') : []
  );
  const [page, setpage] = useState(1);
  const [isActiveBtn, setIsActiveBtn] = useState(true);
  const [selectedValue, setSelectedValue] = useState('All');

  const handleSelectChange = event => {
    const value = event.target.value;
    setSelectedValue(value);
  };

  const changeFollowers = data => {
    if (isFollows.includes(data.id)) {
      setIsFollows(
        isFollows.filter(el => {
          return el !== data.id;
        })
      );
    } else {
      setIsFollows([...isFollows, data.id]);
    }

    setUsers(prevUsers =>
      prevUsers.map(user => {
        if (user.id === data.id) {
          return data;
        }
        return user;
      })
    );
  };

  useEffect(() => {
    if (users.length < 1) {
      toggleIsLoading(true);

      getUsers(page).then(({ data }) => {
        setUsers(data);
        toggleIsLoading(false);
      });
    }
    localStorage.setItem('user', [isFollows]);
  }, [isFollows, page, selectedValue, toggleIsLoading, users.length]);

  useEffect(() => {
    if (page > 1) {
      getUsers(page).then(({ data }) => {
        toggleIsLoading(true);

        if (data.length !== 0) {
          setUsers(prevUsers => [...prevUsers, ...data]);
          toggleIsLoading(false);
        } else {
          toast('No more tweetters');
          toggleIsLoading(false);
          setIsActiveBtn(false);
        }
      });
    }
  }, [page, toggleIsLoading]);

  const handleOnMore = () => {
    setpage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Filter handleSelectChange={handleSelectChange} />
      <Notify />
      <Users
        users={users}
        isFollows={isFollows}
        changeFollowers={changeFollowers}
        selectedValue={selectedValue}
      />
      {isActiveBtn && <LoadMore onClick={handleOnMore}>Load More</LoadMore>}
    </>
  );
};

Tweetters.propTypes = {
  toggleIsLoading: PropTypes.func,
};
