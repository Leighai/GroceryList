import ListHeader from "../ListHeader";

import styled from "styled-components";

const GroceryListCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`

const GroceryList = ({

}) => {
  return(
    <GroceryListCont>
      <ListHeader text = "Hello!" />
    </GroceryListCont>
  )
}

export default GroceryList;