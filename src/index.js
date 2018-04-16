import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './component/ProductList';

import 'semantic-ui-css/semantic.min.css'
import './index.css'

ReactDOM.render(<div className="ui unstackable items">
                    <ProductList />
                </div>, 
                
            document.getElementById('productVote'));