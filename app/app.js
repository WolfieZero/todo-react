// =============================================================================
// App
// =============================================================================


import { render } from 'react-dom';
import React from 'react';

import Todo from './components/Todo';


// Render the app
render(
    <div className="container">
        <Todo />
    </div>,
    document.getElementById('app')
);
