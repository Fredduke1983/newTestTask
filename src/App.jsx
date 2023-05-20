import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home/Home';
import Users from './pages/Users/Users';
import { Tweets } from './pages/Tweets/Tweets';
import { RotatingLines } from 'react-loader-spinner';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const toggleIsLoading = load => {
    setIsLoading(load);
  };
  return (
    <>
      <div
        style={{
          position: 'fixed',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          zIndex: '5',
        }}
      >
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={isLoading}
        />
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/tweeters"
            element={<Users toggleIsLoading={toggleIsLoading} />}
          />
          <Route path="/tweets/:id" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
