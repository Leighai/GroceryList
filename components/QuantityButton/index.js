import styled from "styled-components";

const QuantityCont = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 20px;
  /* padding: 5px; */
  margin: 1px;
`

const QuantityText = styled.h1`
  /* margin: 0px; */
`

const QuantityButton = ({

  sign="="

}) => {
  return(
    <QuantityCont>
      <QuantityText>{sign}</QuantityText>
    </QuantityCont>
  )
}

export default QuantityButton;