import React from 'react';

import Auxilliary from '../../hoc/Auxilliary/Auxilliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (    
<Auxilliary>
    <Toolbar/>
    <SideDrawer/>
    <main className={classes.Content}>
        {props.children}
    </main>
</Auxilliary>

);
export default layout;