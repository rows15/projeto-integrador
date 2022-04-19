import React from 'react';

export default function Header(props) {
    const{countCartItems} = props;
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1> Carrinho de Compras</h1>
                </a>
            </div>
            <div>
              <a href="#/cart">
                  
                   {' '}
                  {countCartItems? (
                      <button className="badge">{countCartItems}</button>
                  ):(
                      ''
                  )}
              
              </a>{' '} <a href="#/signin"></a>
            </div>
        </header>
    )
}