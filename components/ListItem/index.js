import CompleteButton from "../CompleteButton";
import QuantityButton from "../QuantityButton";

import styled from "styled-components";

const ListItemCont = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(216, 196, 226);
  height: 65px;
  padding: 10px;
  border: 0.5px solid #000;
`

const ListCont = styled.div`
  width: 100px;
  height: 65px;
  display: flex;
  align-items: center;
`

const ListItemTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  margin-right: 30px;
`

const NumberCont = styled.div`
  width: 42px;
  height: 42px;
  background-color: #FFF;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  border: 2px solid grey;
`

const Category = styled.h3`
  font-size: 15px;
  position: relative;
  left: 40px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const ListItem = ({
  ItemTitle = "Default",
  Quantity=6,
  onClickPlus=()=>{},
  onClickMinus=()=>{},
  category="poultry"
}) => {
  return(
    <ListItemCont>
      <ListCont>
        <ListItemTitle>{ItemTitle}</ListItemTitle>
      </ListCont>

      <NumberCont>
        <p>{Quantity}</p>
      </NumberCont>
      <Column>
        <QuantityButton sign="+" onClick={onClickPlus} />
        <QuantityButton sign="-" bgColor="lightgrey" onClick={onClickMinus} />
      </Column>

      <Category>
        {category}
      </Category>

      <CompleteButton />
    </ListItemCont>
  )
}

export default ListItem;