# clock
자바스크립트 및 제이쿼리로 시계, 타이머, 스톱워치 기능 구현하기

## ✨ 개요
#### 설명
> 바닐라 자바스크립트, 제이쿼리로 시계, 타이머, 스톱워치 기능 구현하기

저번 투 두 리스트는 제이쿼리를 이용하지 않았는데, 이번에 타이머, 스톱워치 기능을 구현하며 제이쿼리를 사용했다.

#### 완성된 화면
**시계**

<img width="1792" alt="스크린샷 2022-02-13 오후 4 00 03" src="https://user-images.githubusercontent.com/80568332/153743691-82595356-1465-46ea-89f6-a9ed50330966.png">

**타이머**

<img width="1789" alt="스크린샷 2022-02-13 오후 4 00 49" src="https://user-images.githubusercontent.com/80568332/153743696-34754f82-76b1-46a6-bca0-96deae640884.png">

**스톱워치**

<img width="1791" alt="스크린샷 2022-02-13 오후 4 01 11" src="https://user-images.githubusercontent.com/80568332/153743699-cdfa21c0-2cc0-41ac-bf61-1ac91cccdcc4.png">

#### 개발 기간
2022.02.12~02.13 총 2일

#### 사용 언어
- Html
- CSS
- JavaScript + jQuery

#### 기록 날짜
- 1차: 2022.02.13

## ✨ 기능 / 기록
### 메인화면(index.html, clockstyle.css) - 시계
- 디지털 시계를 보여주는 화면이다.
- 위쪽에는 시간을, 아래쪽에는 날짜가 나온다.
- 시간을 표시할 때는 am, pm으로 구분했다.<br>
👉🏻 현재 시간을 받아와 12와 크기를 비교해 pm, am을 pmOrAm 변수에 저장했다.<br>
👉🏻 ex) 오후 4시를 16:00:00가 아니라 04:00:00 pm으로 볼 수 있게 했다.
- 날짜는 연도, 월, 일, 요일 순으로 화면에 나타냈다.
- 요일은 이번에 처음으로 해본 것인데, getDay() 메서드를 사용해 반환값에 맞는 요일을 화면에 나타냈다.<br>
👉🏻 배열 ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]을 만들어 반환값을 인덱스로 하여 요일을 찾았다.

### 타이머(timer.html, timer.js, timerstyle.css)
- form이 submit 되었을 때 새로고침되지 않도록 function의 매개변수로 event를 받아 preventDefault() 메서드를 호출했다.
- input 값들이 다 작성되어야 시작 버튼을 눌렀을 때 작동되도록 하기 위해 isInput 변수에 boolean 값을 대입했다.<br>
👉🏻 디폴트 값은 false이고 모두 입력되면 true가 되며, 시작 버튼의 click event가 발생했을 때 isInput이 true이어야 실행되도록 했다.
- input : min은 0, max는 99이다.
- 타이머가 멈추는 경우는 딱 2가지이다.<br>
👉🏻 일시정지 버튼을 누르는 경우<br>
👉🏻 타이머가 다 되어 00:00:00이 되는 경우<br>
✔️ clearInterval()을 setInterval() 메서드 내부에서 사용해 멈추도록 했다.

### 스톱워치(stopwatch.html, stopwatch.js, stopwatchstyle.css)
- setInterval()와 clearInterval() 메서드를 사용했다.<br>
👉🏻 setInterval() 메서드의 두 번째 인자로 1000을 주어 1초가 증가할 때마다 바뀐 초를 화면에 표시할 수 있게 했다.<br>
👉🏻 일시정지 버튼을 누르면 clearInterval() 메서드를 호출하여 setInterval() 메서드를 멈추도록 했다.
- 시작, 일시정지, 취소 버튼이 있다.
👉🏻 시작 버튼을 누르면 1초씩 증가한다.<br>
👉🏻 일시정지 버튼을 누르면 스톱워치가 멈춘다. 시작 버튼을 누르면 다시 작동한다.<br>
👉🏻 취소 버튼을 누르면 00:00:00으로 되돌아간다.

### style.css
- 시계, 타이머, 스톱워치 3개에 모두 적용되는 공통 css 파일

## ✨ 후기 및 다음 목표
타이머 구현하는 것에 제일 시간을 많이 썼는데, form, input을 사용할지 아니면 select box를 사용할지 고민을 했는데, 하나의 form 안에 input을 3개(시간, 분, 초) 넣어서 코드를 작성했다. 여기서 form 안에 input이 1개일 때만 엔터를 쳤을 때 자동 submit되는 implicit submission이 form안에 input이 여러 개면 이루어지지 않는 문제가 발생했다. 따라서 input type이 submit인 태그를 작성하고 hidden 클래스를 주고 display:none을 하여 화면에서 보이지 않도록 하여 해결했다. 다음에는 애니메이션을 조금 더 많이 사용해볼 수 있게 미니 게임을 만들어볼까 한다. (앞으로 공부할 것은 노드와 리액트!!)
