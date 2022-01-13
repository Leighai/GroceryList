import CompleteButton from "../CompleteButton";
import QuantityButton from "../QuantityButton";

import styled from "styled-components";

const ListItemCont = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(216, 196, 226);
  height: 60px;
  padding: 10px;
`

const ListItemTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  margin-right: 20px;
`

const NumberCont = styled.div`
  width: 40px;
  height: 40px;
  background-color: #FFF;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const ListItem = ({

  ItemTitle = "Default"

}) => {
  return(
    <ListItemCont>
      <ListItemTitle>{ItemTitle}</ListItemTitle>
      <NumberCont>
        <p>6</p>
      </NumberCont>
      <Column>
        <QuantityButton sign="+" />
        <QuantityButton sign="-" />
      </Column>
      <CompleteButton />
    </ListItemCont>
  )
}

export default ListItem;