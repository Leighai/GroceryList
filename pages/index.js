import GroceryItem from "../components/groceryItem";
import GroceryList from "../components/GroceryList";

import { useState } from "react";

import styled from "styled-components"
import ListItem from "../components/ListItem";

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

const ListCont = styled.div`
  width: 100%;
  height: 60px;
`

const Title = styled.h1`
`

const data = []

export default function Home() {
  const [mappedData, setMappedData] = useState()
  
    const AddItem = (name, quantity, category) => {
  
      data.push({
        name,
        quantity,
        category
      })
      
  
      setMappedData(data)
      console.log(mappedData)
    }
  return (
    <AppCont>
      <MainColumn>
        <Title>Popular Items</Title>
        <Column>
          <Subcolumn>
            <GroceryItem imgUrl="/egg.png" itemText="Eggs" onClick={() => AddItem("Eggs",1,"Poultry")}/>
            <GroceryItem imgUrl="/coffee.png" itemText="Coffee" onClick={() => AddItem("Coffee",1,"Dry Items")}/>
            <GroceryItem imgUrl="/milk.png" itemText="Milk" onClick={() => AddItem("Milk",1,"Dairy")}/>
          </Subcolumn>
          <Subcolumn>
            <GroceryItem imgUrl="/pasta.png" itemText="Pasta" onClick={() => AddItem("Pasta",1,"Dry Items")}/>
            <GroceryItem imgUrl="/carrot.png" itemText="Carrots" onClick={() => AddItem("Carrots",1,"Vegetables")}/>
            <GroceryItem imgUrl="/banana.png" itemText="Bananas" onClick={() => AddItem("Bananas",1,"Fruits")} />
          </Subcolumn>
        </Column>
        <button onClick={()=>console.log(mappedData[1])}>show data</button>
      </MainColumn>
      <MainColumn>
        <Title>Grocery List</Title>
        <Column>
        <GroceryList>
          {mappedData ? mappedData.map((o,i) => {
          <ListCont key={i}>
            <ListItem ItemTitle={o.name} Quantity={o.quantity}/>
          </ListCont>
          }
          ):
          <p>Click a plus icon to add to the grocery list!</p>}
        </GroceryList>
        </Column>
      </MainColumn>
    </AppCont>
  )
}
