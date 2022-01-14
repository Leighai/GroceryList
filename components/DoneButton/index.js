import styled from "styled-components";

const ButtonCont = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
`

const ButtonText = styled.span`
  font-size: 20px;
`

const DoneButton = ({

  onClick=()=>{}

}) => {
  return (
    <ButtonCont onClick = {onClick}>
      <ButtonText>Done</ButtonText>
    </ButtonCont>
  )
}

export default DoneButton;