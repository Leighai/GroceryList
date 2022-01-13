import GroceryItem from "../components/groceryItem";
import GroceryList from "../components/GroceryList";

import styled from "styled-components"

const AppCont = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: space-around;
  align-items: center;
`

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 100%;
  min-width: 45%;
`

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Subcolumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;

`

const Title = styled.h1`
`


export default function Home() {
  return (
    <AppCont>
      <MainColumn>
        <Title>Popular Items</Title>
        <Column>
          <Subcolumn>
            <GroceryItem imgUrl="/egg.png" />
            <GroceryItem imgUrl="/egg.png" />
            <GroceryItem imgUrl="/egg.png" />
          </Subcolumn>
          <Subcolumn>
            <GroceryItem imgUrl="/egg.png" />
            <GroceryItem imgUrl="/egg.png" />
            <GroceryItem imgUrl="/egg.png" />
          </Subcolumn>
        </Column>
      </MainColumn>
      <MainColumn>
        <Title>Grocery List</Title>
        <Column>
          <GroceryList />
        </Column>
      </MainColumn>
    </AppCont>
  )
}
