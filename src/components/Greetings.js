import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchGreeting from '../redux/thunk';

function Greeting() {
  const greeting = useSelector((state) => state.greeting);
  const isloading = useSelector((state) => state.isloading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (isloading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Random Greeting :</h1>
      <p>{ greeting }</p>
    </div>
  );
}

export default Greeting;
