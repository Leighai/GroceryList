import styled from "styled-components";

const CompleteCont = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  align-items: center;
  margin-right: 10px;
`

const CompleteText = styled.p`
  margin: 20px;
`

const CompleteInput = styled.input`
  transform: scale(1.5);
`

const CompleteButton = ({

}) => {
  return(
    <CompleteCont>
      <CompleteText>Complete</CompleteText>
      <CompleteInput type="checkbox" />
    </CompleteCont>
  )
}

export default CompleteButton;