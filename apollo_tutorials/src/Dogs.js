import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

const GET_DOG_PHOTO = gql`
query Dog($breed: String!) {
  dog(breed: $breed) {
    id
    displayImage
  }
}
`;

function change(event) {
    console.log(event.target.value)
}

export function Dogs(props) {
    const { onDogSelected } = props;
    const { loading, error, data } = useQuery(GET_DOGS);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
      <select name="dog" onChange={onDogSelected}>
        {data.dogs.map(dog => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>
    );
}

export function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <img alt="" src={data.dog.displayImage} style={{ height: 500, width: 500 }} />
  );
}