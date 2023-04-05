import { useEffect, useState } from 'react';
import axios from 'axios';

export const useHome = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        'https://6222994f666291106a29f999.mockapi.io/api/v1/products'
      );
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products) {
      calculateTotalPoints();
    }
  }, [products]);

  const calculateTotalPoints = () => {
    const total = products.reduce((accumulator, currentValue) => {
      if (currentValue.is_redemption) {
        return accumulator;
      }
      return accumulator + currentValue.points;
    }, 0);

    setTotalPoints(total);
  };

  const filter = type => {
    if (type === 'Ganados') {
      setFilteredProducts(products.filter(item => !item.is_redemption));
      setShowAll(true);
      return;
    }

    if (type === 'Canjeados') {
      setFilteredProducts(products.filter(item => item.is_redemption));
      setShowAll(true);
      return;
    }

    setShowAll(false);
    setFilteredProducts(products);
  };

  return { totalPoints, filteredProducts, filter, showAll };
};
