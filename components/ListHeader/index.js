import styled from "styled-components";

const HeaderCont = styled.div`
  height: 40px;
  background-color: #FFF;
  display: flex;
  align-items: center;
  padding: 10px;

`

const HeaderText = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  font-family: Inter;
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