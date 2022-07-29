# Vue

- 'npm run serve' : 실시간 미리보기 띄우기

## <b>1. 데이터 바인딩</b>

- js 데이터를 html에 넣을 수 있음

1. 데이터 보관함 생성

```
data(){
    return{
        //여기에 필요한 데이터 저장
        // object 자료로 저장( 자료이름: 자료내용)
    }
}
```

2. 데이터 부르기

- {{데이터 이름} 로 저장했던 데이터를 부를 수 있음

<br>

### 1.1 데이터바인딩하는 이유

<br>

- vue의 실시간 자동 렌더링
- 변경에 용이
- html 속성도 데이터 바인딩 가능[:속성="데이터이름"]

<br>

## <b>2. 반복문</b>

<br>

```
<태그 v-for="a in 몇회":key="a">
```

- 몇회가 아닌 array/object를 넣을 수 있음

```
<태그 v-for="a in array":key="a">{{ a }}</태그>
```

- key는 반복문 돌린 요소를 컴퓨터가 구분하기 위해 사용(unique한 숫자나 문자 사용)

- 변수 두개까지 가능

```
<태그 v-for="(a,i) in array":key="i">{{ a }}</태그>
```

<br>

## <b>3. event 핸들러</b>

- 다양한 이벤트 핸들러 존재
  <br>

```
<태그 v-on:click="jsp 작성">
// 아래와 동일한 문장
<태그 @click="jsp 작성">
```

- 함수(중간에 삽입)

```
method : {
    method1(){
        this.데이터명 += 1
    },
    method2(){
        this.데이터명 += 10
    },
}
```

- 함수안에서 데이터를 가져와 쓸 때는 [this.데이터명]

<br>

## <b>4. 모달창 만들기 </b>

<br>
1) 모달창 디자인<br>
2) 동적인 UI 만드는 법<br>

- UI의 현재 상태를 데이터로 저장해둠
  > 창이 열렸는지에 따라 0,1이나 ture,false로 표현
- 데이터에 따라 UI가 어떻게 보일지 작성

### 4.1 조건식(v-if)

<br>

```
<div class="black" v-if="변수==1">
```

## <b>5. import/export </b>

- export: js에서 변수를 (vue로) 내보내고 싶을 때

- import: js에서 변수를 (vue로) 내보내고 싶을 때

<br>

### 5.1 import/export 쓰는법 (1)

<br>

- export default 변수명
- import 변수명 from 파일경로

<br>

```
[.js]
var apple = 10;
export default apple

[.vue]
import apple from './파일 경로/'
```

<br>

### 5.2 import/export 쓰는법 (2)

<br>

- export{변수1, 변수2, ...}
- 함수도 호출 가능
- import{변수1} form 경로

<br>

```
[.js]
var apple1 = 10;
var apple2 = 20;
export {apple1, apple2 }

[.vue]
import {apple1, apple2} from './파일 경로/'
```
