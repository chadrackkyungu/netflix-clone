import React, {useState, useEffect} from 'react';
import db from '../firebase';
import './PlanScreen.css';

function PlanScreen() {
  //these products will come straight into the database(firestore Database) that we create with stripe
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection('products')
      // active came from the database so in this case i want to query products that are active only
      .where('active', '==', true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection('price').get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);
  console.log(products); //always check the rendering

  const loadCheckout = async (priceID) => {};
  return (
    <div className="planScreen">
      {/* Note: because the products that we are fetching from the database, is an object we can not use array map straight but this methode when u came accross this */}

      {/* note: i'm destructing the productId, & productData, wich are Object now i make them Arrays*/}
      {Object.entries(products).map(([productId, productData]) => {
        // TODO add some logic to check if the user's subscription is active..
        console.log(productData);
        return (
          <div className="planScreen__plan">
            <div className="planScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button onClick={loadCheckout(productData?.price?.priceData)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
