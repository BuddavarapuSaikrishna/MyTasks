import styled from 'styled-components'

export const ListItems = styled.li`
  margin-right: 10px;
  list-style: none;
  margin-bottom: 10px;
`

export const CustomButton = styled.button`
  padding: 8px 16px;
  border: none;
  outline: none;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 15px;
  cursor: pointer;
  background-color: ${props => (props.Active ? 'orange' : 'transparent')};
`
