import {useState} from 'react'
import {ListItems, CustomButton} from './StyledComponents'

const TagItems = props => {
  const {TagDetails, ActiveStatus} = props
  const {displayText, optionId} = TagDetails
  const [activeBtn, SetActiveBtn] = useState(false)

  const ClickTag = () => {
    SetActiveBtn(!activeBtn)
    ActiveStatus(!activeBtn, optionId)
  }

  return (
    <ListItems>
      <CustomButton type="button" Active={activeBtn} onClick={ClickTag}>
        {displayText}
      </CustomButton>
    </ListItems>
  )
}

export default TagItems
