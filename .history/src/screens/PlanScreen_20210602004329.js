import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectUser} from '../features/userSlice';
import db from '../firebase';
import './PlanScreen.css';
import {loadStripe} from '@stripe/stripe-js';

function PlanScreen() {
  //these products will come straight into the database(firestore Database) that we create with stripe
  const [products, setProducts] = useState([]);

  //pulling the user from Redux
  const user = useSelector(selectUser);

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

  const loadCheckout = async (priceID) => {
    //not after you create an account or Login u will appear into the Firestore Databse, so what i want to do now is after u login we wanna coolect u from the database after u logIn
    const docRef = await db
      .collection('customers')
      .doc(user.uid)
      .collection('checkout_sessions')
      .add({
        price: priceID,
        //if the user successfull subscrib go back to the original window
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const {error, sessionId} = snap.data();

      if (error) {
        //show an error to your customer animationDelay: //your cloud function logs in the Firebse console.

        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        //We have a session, let's redirect to checkout
        //init Stripe

        const stripe = await loadStripe(
          'pk_test_51IxUFyLtcChAGJhkqyYQkyZjA4BMJO9exch6Xoad5KaDf21D1YENmZLwK6sCLqHOlio67ZKOSaTtqWsf9Nl5WcXz00Bwbt7lp8'
        );

        stripe.redirectToCheckout({sessionId});
      }
    });
  };
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

            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
