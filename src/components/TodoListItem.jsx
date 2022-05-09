import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md'
import cn from 'classname'
import styled from '@emotion/styled'
import Modal from './Modal'

const TodoListItems = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background-color: beige;
  }
  .checkbox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.5rem;
    }
    .text {
      margin-left: 0.5rem;
      flex: 1;
    }
    &.checked {
      svg {
        color: #22b8cf;
      }
      .text {
        text-decoration: line-through;
      }
    }
  }

  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: rgb(255, 192, 203);
    cursor: pointer;
    &:hover {
      color: rgb(251, 110, 206);
    }
  }

  & + & {
    border-top: 1px solid #dee2e6;
  }
`
const TodoListItem = ({ todo, onRemove, onToggle, handleModal, modalState, todos }) => {
  const { id, text, checked } = todo

  return (
    <>
      {modalState && <Modal handleModal={handleModal} text={text}></Modal>}
      <TodoListItems className="TodoListItem">
        <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>

        <button onClick={handleModal}>수정</button>

        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </TodoListItems>
    </>
  )
}

export default TodoListItem
