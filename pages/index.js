import GroceryItem from "../components/groceryItem"
import styled from "styled-components"

const GroceryListCont = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: space-around;
  align-items: center;
`

const Column = styled.div`

`

const Subcolumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  flex-wrap: wrap;
  max-height: 100vh;
`



export default function Home() {
  return (
    <GroceryListCont>
      <Column>
        <h1>Popular Items</h1>
        <Subcolumn>
          <GroceryItem imgUrl="/egg.png" />
          <GroceryItem imgUrl="/egg.png" />
          <GroceryItem imgUrl="/egg.png" />
          <GroceryItem imgUrl="/egg.png" />
          <GroceryItem imgUrl="/egg.png" />
          <GroceryItem imgUrl="/egg.png" />
        </Subcolumn>
      </Column>
    </GroceryListCont>
  )
}
