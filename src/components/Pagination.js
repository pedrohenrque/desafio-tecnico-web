import React from 'react';

import {Nav, Button } from './styles'

const Pagination = ({ postPerPage, totalPosts, paginate}) => {
  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
    pageNumbers.push(i);
}
  
  return (
    <Nav style={{marginTop: 50}} >
      <ul style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
        {pageNumbers.map(number => (
          <li key={number} style={{textDecoration: "none", listStyle: "none"}}>
            <Button type="button" onClick={() => paginate(number)}>
             <div>
                <p> 
                  {number}
                </p>
             </div>
          
            </Button>
          </li>
        ) )}
      </ul>

    </Nav>
  )
}

export default Pagination;