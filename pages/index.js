import GroceryItem from "../components/groceryItem";
import GroceryList from "../components/GroceryList";

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

const Title = styled.h1`
`

  const data = []

  const isData = "";

  const x = 0

  const AddItem = (name, quantity, category) => {

    data.push({
      name,
      quantity,
      category
    })
  
    isData="heck yes"
    
    console.log(data)
  }


export default function Home() {

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
        <button onClick={()=>console.log(data)}>show data</button>
      </MainColumn>
      <MainColumn>
        <Title>Grocery List</Title>
        <Column>
        <GroceryList>
          {isData ? data.map((data) =>
          <ListItem ItemTitle={data.key}/>
          ):
          <p>Click a plus icon to add to the grocery list!</p>}
        </GroceryList>
        </Column>
      </MainColumn>
    </AppCont>
  )
}
