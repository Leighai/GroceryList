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
      {children}
      <ListHeader header = "Category" />
      <ListItem />
    </GroceryListCont>
  )
}

export default GroceryList;