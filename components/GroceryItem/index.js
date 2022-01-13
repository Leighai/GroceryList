import styled from "styled-components";

const GroceryCont = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 10px;
  border-radius: 10px;
`

const GroceryImg = styled.img`
  width: 90%;
  height: 90%;
  position: absolute;
  z-index: 1;
`

const GroceryText = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  font-size: 2rem;
  z-index: 1;
`

const GroceryButton = styled.button`
  position: absolute;
  top: -30px;
  right: 0px;
  width: 30px;
  height: 30px;
  `

const GroceryItem = ({
  imgUrl = 'cross.png',
  itemText = 'Default Text',
  onClick=()=>{}
}) => {
  return (
    <GroceryCont>
      <GroceryButton onClick={onClick}>+</GroceryButton>
      <GroceryImg src={imgUrl} />
      <GroceryText>{itemText}</GroceryText>
    </GroceryCont>
  )
}

export default GroceryItem;