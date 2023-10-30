import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagItems from '../TagItems'
import TasksItems from '../TasksItems'
import {
  MainContainer,
  InputContainer,
  OutputContainer,
  Heading,
  TagsHeading,
  FormContainer,
  TextContainer,
  LabelText,
  InputBox,
  SelectBox,
  SelectOption,
  SubmitBtn,
  TagsListContainer,
  TasksListContainer,
  NoTaskText,
} from './StyledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

const Home = () => {
  const [inputValue, SetInputValue] = useState('')
  const [selected, SetSelected] = useState(tagsList[0].optionId)
  const [tasksList, SetTasksList] = useState([])

  const ChangeInput = event => {
    SetInputValue(event.target.value)
  }

  const ChangeSelect = event => {
    SetSelected(event.target.value)
  }

  const GetStatus = (Active, id) => {
    const filteredData = tasksList.filter(eachItem => eachItem.Tag === id)
    console.log(filteredData)
  }

  const SubmitData = event => {
    event.preventDefault()
    const newData = {
      id: uuidv4(),
      Task: inputValue,
      Tag: selected,
    }

    SetTasksList(prevState => [...prevState, newData])
  }

  return (
    <MainContainer>
      <InputContainer>
        <Heading>Create a task!</Heading>
        <FormContainer onSubmit={SubmitData}>
          <TextContainer>
            <LabelText htmlFor="task">Task</LabelText>
            <InputBox
              id="task"
              type="text"
              onChange={ChangeInput}
              value={inputValue}
              placeholder="Enter the task here"
            />
          </TextContainer>
          <TextContainer>
            <LabelText htmlFor="tags">Tags</LabelText>
            <SelectBox
              id="tags"
              onChange={ChangeSelect}
              value={selected}
              type="select"
            >
              {tagsList.map(eachItem => (
                <SelectOption value={eachItem.optionId} key={eachItem.optionId}>
                  {eachItem.displayText}
                </SelectOption>
              ))}
            </SelectBox>
          </TextContainer>
          <SubmitBtn type="submit">Add Task</SubmitBtn>
        </FormContainer>
      </InputContainer>
      <OutputContainer>
        <TagsHeading>Tags</TagsHeading>
        <TagsListContainer>
          {tagsList.map(eachItem => (
            <TagItems
              TagDetails={eachItem}
              key={eachItem.optionId}
              ActiveStatus={GetStatus}
            />
          ))}
        </TagsListContainer>
        <Heading>Tasks</Heading>
        {tasksList.length === 0 ? (
          <NoTaskText>No Tasks Added Yet</NoTaskText>
        ) : (
          <TasksListContainer>
            {tasksList.map(eachItem => (
              <TasksItems TaskDetails={eachItem} key={eachItem.id} />
            ))}
          </TasksListContainer>
        )}
      </OutputContainer>
    </MainContainer>
  )
}

export default Home
