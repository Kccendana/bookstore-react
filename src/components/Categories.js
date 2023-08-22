import React from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const status = useSelector((state) => state.categories.status);
  return (
    <p>
      {status}
    </p>
  );
};

export default Categories;
