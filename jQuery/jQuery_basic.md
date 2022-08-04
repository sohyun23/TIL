# jQuery

## 1. jquery

### 1.1 특징

- 쉽게 element를 선택할 수 있는 수단
- 선택된 element를 효율적으로 제어할 수 있는 다양한 수단 제공
- 자바스크립트 라이브러리

### 1.2 사용

- 직접 서비스하는 경우

  > 1. jquery 소스코드 다운
  > 2. 위의 파일을 서버에 업로드 후 웹페이지 안에서 자바스크립트를 삽입

- 구글의 자바스크립트 라이브러리를 사용하는 경우

### 1.3 문법

<br>

```
 $(제어대상).method1().method2();
```

> 주어- 서술어

<br>

## 2. 문법

### 2.1 <b>Wrapper</b>

#### 2.1.1 제어대상을 지정하는 방법

- jquery(엘리먼트 오브젝트|'css스타일 선택자')

- jQuery( selector, [context])
- jQurey( element )

\*\*\* this: event를 발생시킨 element

\*\*\* 글로벌 변수: 바깥쪽에 위치
/ 로컬변수: 함수안에 들어가 있음(로컬변수가 우선순위 높음)

<br>

### 2.2 <b>선택자</b>

```
- eq: 인덱스를 활용해서 element 찾아내는 선택자

- gt: 인자보다 인덱스가 큰 element를 찾아내는 선택자

- lt: 인자보다 인덱스가 작은 element를 찾아내는 선택자

- even: 짝수 element를 찾아내는 선택자

- odd: 홀수 element를 찾아내는 선택자

```

### 2.3 <b>이벤트</b>

- event
- 이벤트가 발생했을때 작동할 로직을 알려주면 시스템이 이벤트발생시 해당 로직을 호출한다.

<br>

- 크로스브라우징 문제를 해결해줌
- bind로 이벤트 핸들러를 설치하고 unbind로 제거
- trigger로 이벤트 핸들러를 강제로 실행
- click, ready와 같이 다양한 이벤트 헬퍼를 제공함
- live를 이용하면 현재 존재하지 않는 엘리먼트에 이벤트 핸들러를 설치 할 수 있음

## 3. 실행방법

### 3.1 속성값 변경

#### 3.1.1 속성값 불러오기

- 속성값 code

```
$("name").val(); // 속성값 읽어오기
$("name").val('...'); // 속성값 쓰기
```

- "$"는 메소드 체이닝이 가능하다는 표시

### 3.2 DOM 탐색및 편집

#### 3.2.1 DOM 탐색

- 어떤 요소의 부모를 탐색하거나 자식을 탐색, 자식의 어떠한 요소를 추가, 삭제하는 작업

```
.parent(): 부모 선택자(상위 인자 반환)

.children(): 자식 선택

.first(): 첫번째 인자 반환

.last(): 마지막 인자 반환
```

#### 3.3.2 DOM 편집

- 텍스트를 받아오거나 변경

```
- $("p").append("Some appended test.");
> 선택한 객체 내에 객체를 가장 마지막 요소로 붙임

- $("p").preappend("Some appended test.");
> 선택한 객체 내에 객체를 가장 첫번째 요소로 붙임

- $("#div1").remove();
> 선택한 객체를 삭제
```

<br>

```
.text():  선택한 요소의 텍스트 내용을 읽거나 수정

.html(): 선택한 요소의 html코드를 읽거나 수정

.val(): form 요소의 값을 읽거나 수정
```

<br>

- 페이지 전체에 영향

```
.addClass(): 클래스 추가

.removeClass(): 클래스 삭제

.toggleClass()
```

<br>

- effect:애니메이션과 같이 요소에 다양한 효과

```
.hide(): 선택 요소 사라짐

.show(): 선택 요소 나타남

.toggle(): 선택한 요소의 현재 표시상태에 따라 다르게 나타남
```

### 3.4 CSS

### 3.4 이벤트

- event: 사용자의 행동에 상호작용하는 웹의 action

#### 3.4.1 hide

```
// DOM이 준비되면 실행시킴
$(function){
  $("div").click(funtion(){
    $(this).hide;
  }
}
```

#### 3.4.1 animate

```
$('#btn_ani').click(function(){
  $('#box1').animate({
    width:'300px'
  })
}
```

#### 3.4.1 hover

```
// 호버가 되었을때 blue, 호버에서 벗어났을때 red
$('#box').hover(funtion(){
  $(this).css("background-color","blue");
},funtion(){
  $(this).css("background-color","red");
},
```

> jQuery 플러그인
>
> - jQuery UI
> - jQuery validation(유효성 검사)
> - jQuery lightbox(모달 창처럼 만들어줌)

### 3.5 AJAX

- Ajax: jQuery에서 비동기 통신을 할 수 있는 method

```
$.ajax(): 비동기 HTTP 요청

$.get(): GET방식의 HTTP 요청

$.post(): POST방식의 HTTP 요청

$.getScript(), $getJSON():  GET방식의 HTTP 요청 후 정해진 양식으로 소스코드 전달받음

$.load(): HTML 코드를 읽어옴
```

#### 3.5.1 데이터 로드

```
$('#btn_data').click(function(){
  $("#data").load('가져오고 싶은 링크')
}};
```

#### 3.5.2 데이터 태그 로드

```
$('#btn_data').click(function(){
  $("#data").load('가져오고 싶은 링크.원하는 태그', function(responseText, statusText, xhr){
    console.log(responseText);
    console.log(statusText);
    console.log(xhr);
    console.log(xhr.status);
  })
}};
```

- responseText: 요청결과
- statusText: 요청의 상태
- xhr: 요청한 오브젝트
- xhr.status: 파일의 응답 상태

#### 3.5.3 ajax 로딩

```
$('#btn_data').click(function(){
  // $. ajax({경로, 동기화 여부, 성공하면 할 일})
  // $. ajax({url:'경로', async:true, success: function(result){}})

  $.ajax({
    url: '링크',
    async: true,
    success:function(result){
      $("#data").html(result);
    }

  });
});

```
