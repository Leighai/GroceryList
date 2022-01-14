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
  height: 80px;
  font-weight: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Divider = styled.div`
  background-color: rgb(120, 106, 128);
  width: 3px;
  height: 90%;
  border-radius: 10px;
`;

const data = []

export default function Home() {
  const [mappedData, setMappedData] = useState()
  
  const AddItem = (name, quantity, category) => {
    var i;

    if (data.length == 0)
    {
      data.push({
        name,
        quantity,
        category
      })
      setMappedData(data);
      console.log("First Item Received")

      console.log(data[0].name);
    }

    else {
      for (i=0; i<data.length; i++) {

        if(data[i].name == name){
          console.log("item exists")
        }

        else {
          data.push({
            name,
            quantity,
            category
          })
          setMappedData(null);
          console.log(mappedData);
      
          setTimeout(() => {
            setMappedData(data);
          }, 1);
        }
    }
    }

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
      <Divider/>
      <MainColumn>
        <Title>Grocery List</Title>
        <Column>
        <GroceryList>
          {mappedData ? mappedData.map((o,i) => 
          <ListCont key={i}>
            <ListItem ItemTitle={o.name} Quantity={o.quantity}/>
          </ListCont>
          
          ):
          <p></p>}
        </GroceryList>
        </Column>
      </MainColumn>
    </AppCont>
  )
}
