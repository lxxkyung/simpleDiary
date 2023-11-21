import { useState,useRef } from 'react';
import './App.css';
import DiaryEditor from './DiaryEdior';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id:1,
//     author: '이름1',
//     content: '하이1',
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id:2,
//     author: '이름2',
//     content: '하이2',
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id:3,
//     author: '이름3',
//     content: '하이3',
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
 
// ]

function App() {
  //일기 데이터
  const [data, setData] = useState([]);

  const dataId = useRef(0)

  /**
   * 추가한 일기 저장 이벤트
   * @param {string} author 작성자
   * @param {string} content 일기 내용
   * @param {number} emotion 감정 점수
   */
  const onCreate = (author,content,emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data])
  }

  /**
   * 일기 데이터 삭제 이벤트
   */
  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList)
  }

  return (
    <div className="App">
        <DiaryEditor onCreate={onCreate}/>
        <DiaryList diaryList={data} onDelete={onDelete}/>
    </div>
  );
}

export default App;
