import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 20px;
  background-color: #1a171d;
`

export const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 20px;
  background-color: #000000;
`

export const Heading = styled.h1`
  color: #f3aa4e;
`
export const TagsHeading = styled.h1`
  color: #ffffff;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const LabelText = styled.label`
  color: #ffffff;
`

export const InputBox = styled.input`
  padding: 10px;
  width: 100%;
`
export const SelectBox = styled.select`
  padding: 20px;
  width: 100%;
`
export const SelectOption = styled.option`
  padding: 0;
`
export const SubmitBtn = styled.button`
  background-color: #f3aa4e;
  border: none;
  outline: none;
  padding: 8px 15px;
  color: #ffffff;
  width: 100px;
  cursor: pointer;
`

export const TagsListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`

export const TasksListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`

export const NoTaskText = styled.p`
  color: #ffffff;
  text-align: center;
`
