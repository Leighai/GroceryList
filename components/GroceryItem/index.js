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
  cursor: default;
  opacity: 70%;
  transition: opacity 0.1s ease-in;

  &:hover {
    opacity: 100%;
  }
`

const GroceryImg = styled.img`
  width: 90%;
  height: 90%;
  position: absolute;
`

const GroceryText = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  font-size: 2rem;
  z-index: 1;
`

const GroceryButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  width: 50px;
  height: 40px;
  background-color: rgb(120, 106, 128);
  color: #FFF;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
`

const GroceryItem = ({
  imgUrl = 'cross.png',
  itemText = 'Default Text',
  onClick=()=>{},
}) => {
  return (
    <GroceryCont>
      <GroceryImg src={imgUrl} />
      <GroceryButton onClick={onClick}>+</GroceryButton>
      <GroceryText>{itemText}</GroceryText>
    </GroceryCont>
  )
}

export default GroceryItem;