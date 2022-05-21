import { useState } from 'react'

const sortOptionList = [
  {
    value: 'latest',
    name: '최신순',
  },
  {
    value: 'oldest',
    name: '오래된순',
  },
]

const filterOptionList = [
  { value: 'all', name: '모두' },
  { value: 'good', name: '좋음' },
  { value: 'bad', name: '슬픔' },
]

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((option, index) => (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState('lastest')
  const [filter, setFilter] = useState('all')

  const getProcessedDiaryList = () => {
    const filterCallback = (item) => {
      if (filter === 'good') {
        return parseInt(item.emotion) <= 3
      } else {
        return parseInt(item.emotion) > 3
      }
    }

    const compare = (a, b) => {
      if (sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date)
      } else {
        return parseInt(a.date) - parseInt(b.date)
      }
    }

    const copyList = JSON.parse(JSON.stringify(diaryList))

    const filteredList = filter === 'all' ? copyList : copyList.filter((it) => filterCallback(it))

    const sortedList = filteredList.sort(compare)
    return sortedList
  }
  return (
    <div>
      <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
      <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList} />
      {getProcessedDiaryList().map((diary) => (
        <div key={diary.id}>{diary.content}</div>
      ))}
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList: [],
}
export default DiaryList
