import ListHeader from "../ListHeader";
import ListItem from "../ListItem";

import styled from "styled-components";

const GroceryListCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`

const GroceryList = ({

}) => {
  return(
    <GroceryListCont>
      <ListHeader header = "Hello!" />
      <ListItem />
    </GroceryListCont>
  )
}

export default GroceryList;