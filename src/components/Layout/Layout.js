import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = ({ children }) => (
   <Aux>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main className={classes.Content}>
         {children}
      </main>
   </Aux>
);

export default layout;