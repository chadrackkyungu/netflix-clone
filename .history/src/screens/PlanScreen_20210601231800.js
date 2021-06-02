import React, {useState, useEffect} from 'react';
import db from '../firebase';
import './PlanScreen.css';

function PlanScreen() {
  //these products will come straight into the database(firestore Database) that we create with stripe
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then((querySnapshot) => {
        const products = {};
      });
  }, []);
  return <div className="planScreen"></div>;
}

export default PlanScreen;
