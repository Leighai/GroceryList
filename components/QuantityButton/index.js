import styled from "styled-components";

const QuantityCont = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 20px;
  background-color: ${props=>props.bgColor}; 
  color: ${props=>props.color}; 
  font-size: 10px;
  border-radius: 5px;
  cursor: pointer;
  /* padding: 5px; */
  margin: 1px;

  &:hover {
    color: rgb(61, 55, 65);
  }

`

const QuantityText = styled.h1`
  /* margin: 0px; */
`

const QuantityButton = ({

  sign="=",
  bgColor="rgb(120, 106, 128)",
  color="#fff",
  onClick = ()=>{}

}) => {
  return(
    <QuantityCont bgColor={bgColor} color={color} onClick={onClick}>
      <QuantityText>{sign}</QuantityText>
    </QuantityCont>
  )
}

export default QuantityButton;