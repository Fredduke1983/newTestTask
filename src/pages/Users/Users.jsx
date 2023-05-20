import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../components/Card/OneCard';
import { getUsers } from '../../utils/fetches';
import { LoadMore, UsersStyle } from './Users.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Users({ toggleIsLoading }) {
  const [users, setUsers] = useState([]);
  const [isFollows, setIsFollows] = useState(
    localStorage.getItem('user') ? localStorage.getItem('user').split(',') : []
  );
  const [page, setpage] = useState(1);

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
    // const localFlag = localStorage.getItem('user').split(',');
    // users.map(user => {
    //   for (const iterator of localFlag) {
    //     if (user.id === iterator) {
    //     }
    //   }
    // });
  }, [isFollows, page, toggleIsLoading, users.length]);

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
        }
      });
    }
  }, [page, toggleIsLoading]);

  const handleOnMore = () => {
    setpage(prevPage => prevPage + 1);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <UsersStyle>
        {users &&
          users.map(user => {
            return (
              <Card
                key={user.id}
                user={user.user}
                id={user.id}
                avatar={user.avatar}
                tweets={user.tweets}
                followers={Number(user.followers)}
                changeFollowers={changeFollowers}
                isFollows={isFollows}
              />
            );
          })}
      </UsersStyle>
      <LoadMore onClick={handleOnMore}>Load More</LoadMore>
    </>
  );
}

export default Users;

Users.propTypes = {
  toggleIsLoading: PropTypes.func,
};
