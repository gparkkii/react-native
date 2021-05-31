import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useFetch } from '../hooks/useFetch';
import Buttons from './Buttons';

const StyledImage = styled.Image`
  background-color: #7f8c8d;
  width: 300px;
  height: 300px;
`;
const ErrorMessage = styled.Text`
  font-size: 18px;
  color: #e74c3c;
`;
const LoadingMessage = styled.Text`
  font-size: 20px;
  color: #2ecc71;
`;

const DogButton = () => {
  const URL = 'https://dog.ceo/api/breeds/image/random';
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [inProgress, setInProgress] = useState(false);

  const fetchData = async () => {
    try {
      setInProgress(true);
      const res = await fetch(URL);
      const result = await res.json();
      if (res.ok) {
        setData(result);
        setError(null);
      } else {
        throw result;
      }
    } catch (error) {
      setError(error);
    } finally {
      setInProgress(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Buttons
        title="Dog!"
        onPress={() => {
          fetchData();
        }}
      />
      {inProgress && (
        <LoadingMessage>The API request is in progress</LoadingMessage>
      )}
      <StyledImage source={data?.message ? { uri: data.message } : null} />
      <ErrorMessage>{error?.message}</ErrorMessage>
    </>
  );
};

export default DogButton;
