import styled from "styled-components";

const HeaderCont = styled.div`
  height: 40px;
  background-color: #FFF;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 0px 50px 0px 0px;
`

const HeaderText = styled.h2`
  margin: 0;
  font-weight: 600px;
  font-size: 18px;
  color: rgb(61, 55, 65);
`

const ListHeader = ({

  header = "Default"

}) => {
  return(
    <HeaderCont>
      <HeaderText>{header}</HeaderText>
    </HeaderCont>
    )
}

export default ListHeader;