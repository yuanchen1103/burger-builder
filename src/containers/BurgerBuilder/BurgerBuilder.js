import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENTS_PRICES = {
   salad: 0.4,
   bacon: 0.7,
   cheese: 1.7,
   meat: 2.0
}

class BurgerBuilder extends Component {
   state = {
      ingredients: {
         salad: 0,
         bacon: 0,
         cheese: 0,
         meat: 0
      },
      totalPrice: 3,
      purchasable: false
   } 
   updatePurchaseState(ingredients) {
      const sum = Object.keys(ingredients).map(e => ingredients[e])
         .reduce((sum, e) => {
            return sum + e;
         }, 0);
      this.setState({ purchasable: sum > 0 });
   }
   addIngredientHandler = (type) => {
      const oldCount = this.state.ingredients[type];
      const newCount = oldCount + 1;
      const updatedIngredient = {
         ...this.state.ingredients
      };
      updatedIngredient[type] = newCount;
      const priceAddition = INGREDIENTS_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;
      this.setState({
         totalPrice: newPrice,
         ingredients: updatedIngredient
      });
      this.updatePurchaseState(updatedIngredient);
   }
   removeIngredientHandler = (type) => {
      const oldCount = this.state.ingredients[type];
      if (oldCount === 0) return;
      const newCount = oldCount - 1;
      const updatedIngredient = {
         ...this.state.ingredients
      };
      updatedIngredient[type] = newCount;
      const priceDeduction = INGREDIENTS_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;
      this.setState({
         totalPrice: newPrice,
         ingredients: updatedIngredient
      });
      this.updatePurchaseState(updatedIngredient);
   }
   render() {
      const disabledInfo = {
         ...this.state.ingredients
      };
      for (let key in disabledInfo) {
         disabledInfo[key] = disabledInfo[key] <= 0;
      }
      return (
         <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls ingredientAdded={this.addIngredientHandler}
                           ingredientRemoved={this.removeIngredientHandler}
                           disabled={disabledInfo}
                           price={this.state.totalPrice}
                           purchasable={this.state.purchasable}/>
         </Aux>
      );
   }
}

export default BurgerBuilder;