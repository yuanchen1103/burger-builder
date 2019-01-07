import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => (
   <Aux>
      <BackDrop show={props.show} clicked={props.modalClosed}/>
      <div className={classes.Modal}
         style={{
            display: props.show ? 'block' : 'none'
            }}>
         {props.children}
      </div>
   </Aux>
);

export default modal;