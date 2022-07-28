# API

## 1. 라이브러리

- 자주 사용하는 코드를 재사용할 수 있는 형태로 가공
- jquery

### 1.1 jquery

- 빠르고 작고 feature-rich한 자바스크립트 라이브러리

## 2. 실행방법

### 2.1 속성값 변경

#### 2.1.1 속성값 불러오기

- 속성값 code

```
$("name").val(); // 속성값 읽어오기
$("name").val('...'); // 속성값 쓰기
```

- "$"는 메소드 체이닝이 가능하다는 표시

### 2.2 DOM 탐색및 편집

#### 2.2.1 DOM 탐색

- 어떤 요소의 부모를 탐색하거나 자식을 탐색, 자식의 어떠한 요소를 추가, 삭제하는 작업

```
.parent(): 부모 선택자(상위 인자 반환)

.children(): 자식 선택

.first(): 첫번째 인자 반환

.last(): 마지막 인자 반환
```

#### 2.3.2 DOM 편집

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

### 2.4 이벤트

- event: 사용자의 행동에 상호작용하는 웹의 action

#### 2.4.1 hide

```
// DOM이 준비되면 실행시킴
$(function){
  $("div").click(funtion(){
    $(this).hide;
  }
}
```

#### 2.4.1 animate

```
$('#btn_ani').click(function(){
  $('#box1').animate({
    width:'300px'
  })
}
```

#### 2.4.1 hover

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

### 2.5 AJAX

- Ajax: jQuery에서 비동기 통신을 할 수 있는 method

```
$.ajax(): 비동기 HTTP 요청

$.get(): GET방식의 HTTP 요청

$.post(): POST방식의 HTTP 요청

$.getScript(), $getJSON():  GET방식의 HTTP 요청 후 정해진 양식으로 소스코드 전달받음

$.load(): HTML 코드를 읽어옴
```

#### 2.5.1 데이터 로드

```
$('#btn_data').click(function(){
  $("#data").load('가져오고 싶은 링크')
}};
```

#### 2.5.2 데이터 태그 로드

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

#### 2.5.3 ajax 로딩

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
