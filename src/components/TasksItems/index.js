import {ListItems, TasksContainer} from './StyledComponents'

const TasksItems = props => {
  const {TaskDetails} = props
  const {Task, Tag, id} = TaskDetails
  return (
    <ListItems>
      <TasksContainer>
        <p>{Task}</p>
        <p>{Tag}</p>
      </TasksContainer>
    </ListItems>
  )
}

export default TasksItems
