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
`

const GroceryText = styled.h1`
  font-family: Inter;
  margin: 0;
  font-size: 1.5rem;
  z-index: 1;
`

const GroceryButton = styled.button`

`

const GroceryItem = ({
  imgUrl = 'cross.png',
  itemText = 'Default Text'
}) => {
  return (
    <GroceryCont>
      <GroceryImg src={imgUrl} />
      <GroceryText>{itemText}</GroceryText>
    </GroceryCont>
  )
}

export default GroceryItem;