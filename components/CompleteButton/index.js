import styled from "styled-components";

const CompleteCont = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  align-items: center;
`

const CompleteText = styled.p`

`

const CompleteInput = styled.input`
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