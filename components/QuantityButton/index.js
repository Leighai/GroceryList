import styled from "styled-components";

const QuantityCont = styled.div`

`

const QuantityText = styled.h1`
  margin: 0;
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