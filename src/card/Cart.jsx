import React from 'react';
import './Cart.module.css';

const Cart = (props) => {
    
    return(
    <>
    <div className='test3'>
        <div className='test1 cart'>
            <img width="100px" height={'150px'} src={props.imgSrc} alt="amazon-logo"  />
            <div className='title'>{props.name}
                <div className='title'>
                    <a href='https://www.netflix.com/in/title/81144150' className='title'>
                        <div className='test4'><button>Visit Site</button></div>
                    </a>
                </div>
            </div>
        </div>    
    </div>
    </>
    )
}
export default Cart;