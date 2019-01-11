import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
   const ingredientsSummary = Object.keys(props.ingredients).map(key => {
      return <li key={key}>
               <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
            </li>
   });
   return (
      <Aux>
         <h3>Your Order</h3>
         <p>A delicious burger with following ingredients:</p>
         <ul>
            {ingredientsSummary}
         </ul>
         <p><strong>Total Price: {props.price}</strong></p>
         <p>Continue to Checkout?</p>
         <Button type="Danger" clicked={props.cancel}>CANCEL</Button>
         <Button type="Success" clicked={props.continue}>CONTINUE</Button>
      </Aux>
   );
};

export default orderSummary;