# React Handling Skills Study

## Result

### Result of Round 1 - 회원가입 폼 만들어보기

![폴더 구조](./Round1/public/result%201%20%EA%B5%AC%EC%A1%B0.PNG)

![최소 3글자, 이메일 검증, 회원가입 시 모달 구현](./Round1/public/%EA%B2%80%EC%A6%9D%20%EC%99%84%EB%A3%8C%20%EB%B0%8F%20%EB%AA%A8%EB%8B%AC%20%EA%B5%AC%ED%98%84.gif)

## 4L (liked(좋았던 것), learned(배웠던 것), lacked(부족했던 것), longed for(바라는 것))

좋았던 것

배웠던 것

단축평가의 사용
단축평가 =>

&& 논리곱 연산자는 두 항이 모두 truthy 값일 때 두번 째 항을 반환하며
|| 논리합 연산자는 둘 중 하나가 truthy 값일 때 truthy 값을 반환한다.

이벤트 함수에서 콜백함수 사용

함수 이름만 작성하면 event만 받아오기 때문에
인수로 값을 넣어주기 위해 콜백 함수를 이벤트 함수 안에 작성

부족했던 것

props에 대한 이해
지훈님께 정리 받으면서 많이 이해가 감
같은 이름을 쓰는게 넘겨주고 받아오는데 이해가 쉬웠음

### Result of Round2 - todo 리스트, 일기장 만들어 보기

#### todo

todo 리스트는 **리액트를 다루는 기술** 책에 나온 내용을 바탕으로 클론 코딩 하였음

![폴더 구조](../my-app/Round2/todo-app/public/result%202%20todo%20%EA%B5%AC%EC%A1%B0.PNG)

![최소 5글자, 입력하면 list에 남고 제거, 완료 표시 가능](./Round2/todo-app/public/%ED%88%AC%EB%91%90%20%EB%A6%AC%EC%8A%A4%ED%8A%B8%20%EA%B5%AC%ED%98%84.gif)

#### diary

diary는 위의 todo 리스트를 바탕으로 구현 하였으며 수정 내용을 추가 하였음

![폴더 구조](../my-app/Round2/diary-app/public/result%202%20diary%20%EA%B5%AC%EC%A1%B0.PNG)

![최소 5글자, 입력하면 list에 남고 제거, 완료 표시 가능](./Round2/diary-app/public/%EC%9D%BC%EA%B8%B0%EC%9E%A5%20%EA%B5%AC%ED%98%84.gif)

## 4L

- 좋았던 것

게더타운이라는 장소에 명성님이 서버 같이 계셔서 항상 도움을 받을 수 있는 것이 항상 좋은 점. <br>
모든 스터디원 분 들이 마찬가지지만 흔쾌히 시간을 투자 해 주셔서 많이 배우는 것 같다. <br>

- 배웠던 것

![diary id값 얻어오는 함수.PNG](../my-app/Round2/diary-app/public/diary%20id%EA%B0%92%20%EC%96%BB%EC%96%B4%EC%98%A4%EB%8A%94%20%ED%95%A8%EC%88%98.PNG)

다이어리를 맵 메소드를 통해 id를 비교하고 맞으면 텍스트의 값을 newText = 새로운 값으로 받아서 바꾸고 checked를 통해 true false 값을 바꿔준다.

여기서 저 다이어리를 전개 연산자를 통해 풀어주고 밑의 예시처럼 그 안의 값을 하나만 사용한다고 생각했는데 그 안의 두개의 값을 넣어서 바꿀 수 있다는 것을 배웠다.

```jsx
// 예시
...생략
      diaries.map((diary) =>
        diary.id === id ? { ...diary, checked: !diary.checked } : diary
      )
```

배운것 2

![changeText 사용.PNG](../my-app/Round2/diary-app/public/changeText%20%EC%82%AC%EC%9A%A9.PNG)

changeText를 프롭스로 받아온 후 수정 버튼을 클릭했을 때는 id값만 받아서 일치하는지 확인해주고

완료에서는 아까 위에서 newText 파라미터 받았던 것을 value라는 인수로 넣어준다.

그 value는 위에 useState함수로 선언되어 있고 그 value의 초기 값은 insert에서 넘어온 text 값이고

값이 변하는 것은 onChange 함수를 통해 value에 저장 해준다.

```jsx
const [value, setValue] = useState('')
```

위의 value 초기 값을 처음엔 예시처럼 빈 문자열로 해 놓아서 수정 버튼을 누르면 자꾸 썼던 글이 없어져서 그것 때문에 조금 헤맸는데 지훈님과 명성님의 도움으로 구현할 수 있었다.

- 부족했던 것

전개 연산자의 사용 상황에 대해 공부가 더 필요할 것 같다.

props는 해도 해도 부족하다.

- 바라는 것

게시판 구현? <br>
처음 코딩을 시작할 때 부터 해보고 싶던 것인데 CRUD를 바탕으로 구현할 수 있을 까?..
