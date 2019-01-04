import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
   {
      label: 'Salad',
      type: 'salad'
   },
   {
      label: 'Bacon',
      type: 'bacon'
   },
   {
      label: 'Cheese',
      type: 'cheese'
   },
   {
      label: 'Meat',
      type: 'meat'
   }
]

const buildControls = (props) => (
   <div className={classes.BuildControls}>
      {controls.map(e => {
         return (
            <BuildControl key={e.label} 
                          label={e.label}
                          added={() => props.ingredientAdded(e.type)}
                          removed={() => props.ingredientRemoved(e.type)}
                          disabled={props.disabled[e.type]}/>
         )
      })}
   </div>
);

export default buildControls;