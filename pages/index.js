import GroceryItem from "../components/groceryItem";
import GroceryList from "../components/GroceryList";
import styled from "styled-components"


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

const AddItem = (name, quantity, category) => {

  data.push({
    name,
    quantity,
    category
  })
  
  console.log(data)
}

export default function Home() {

  return (
    <AppCont>
      <MainColumn>
        <Title>Popular Items</Title>
        <Column>
          <Subcolumn>
            <GroceryItem imgUrl="/egg.png" itemText="Eggs" />
            <GroceryItem imgUrl="/coffee.png" itemText="Coffee" />
            <GroceryItem imgUrl="/milk.png" itemText="Milk" />
          </Subcolumn>
          <Subcolumn>
            <GroceryItem imgUrl="/pasta.png" itemText="Pasta" />
            <GroceryItem imgUrl="/carrot.png" itemText="Carrots" />
            <GroceryItem imgUrl="/banana.png" itemText="Bananas" onClick={() => AddItem("Bananas",1,"Fruits")} />
          </Subcolumn>
        </Column>
        <button onClick={()=>console.log(data)}>show data</button>
      </MainColumn>
      <Divider/>
      <MainColumn>
        <Title>Grocery List</Title>
        <Column>
          <GroceryList />
        </Column>
      </MainColumn>
    </AppCont>
  )
}
