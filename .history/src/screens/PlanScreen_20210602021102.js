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
  const [subscription, setSubscription] = useState(null);

  //what is happening here is i create a useState where i store the plan to null, why coz i don't want to show the plan if the user haven't subscribe to any plan, but after he subscribed to any plan, i went to my database i query {customers}  then i collect is user id & then the subscription he/she made then i get()
  //After that i loop throught the subscription, then i get the role , the subscription ending and starting, then i pass it that to my {setSubscription} useState then i will display that on the screen.

  useEffect(() => {
    db.collection('customers')
      .doc(user.uid)
      .collection('subscriptions')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start:
              subscription.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);
  console.log(subscription);

  useEffect(() => {
    db.collection('products')
      // active came from the database so in this case i want to query products that are active only
      .where('active', '==', true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection('prices').get();
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

  const loadCheckout = async (priceId) => {
    //not after you create an account or Login u will appear into the Firestore Databse, so what i want to do now is after u login we wanna coolect u from the database after u logIn
    const docRef = await db
      .collection('customers')
      .doc(user.uid)
      .collection('checkout_sessions')
      .add({
        price: priceId,
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

        // Note: this is the Publick key in ur stripe account under Developer, there is this key, it a publick key not secret one
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

        let isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);

        return (
          <div className="planScreen__plan">
            <div className="planScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button
              onClick={() =>
                !isCurrentPackage && loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrentPackage ? 'Current Package ' : 'Subscribe'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
