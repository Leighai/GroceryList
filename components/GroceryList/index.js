import ListHeader from "../ListHeader";

import styled from "styled-components";

const GroceryListCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`

const GroceryList = ({children}) => {
  return(
    <GroceryListCont>
      <ListHeader header = "Category" />
      {children}
    </GroceryListCont>
  )
}

export default GroceryList;