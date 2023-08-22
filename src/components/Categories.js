import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const status = useSelector(selectStatus);
  return (
    <p>
      {status}
    </p>
  );
};

export default Categories;
