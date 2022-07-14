# JAVASCRIPT

## 1. java Script

- 사용자와 상호작용가능한 웹페이지로 기능하도록 함.

```
- <script> ... </script>: 자바스크립트
```

- event : 웹브라우저 위에서 일어나는 일
- event의 속성값으로 javascript가 와야함
- event가 일어났을때 js가 실행되도록 하는 것.

```
- onclick: 클릭했을때
- onchange: 변화가 일어났는지
- onkeydown: 키보드의 키를 눌렀을때
```

### 1.1 웹브라우저 제어

### 1.2 제어할 태그 선택하기(js)

```
- [document. ... (#target).stye. ...]
```

### 1.3 함수

#### 1.3.1 조건문

```
[if-else]

ex) <input id="night_day type="button" value="night" onclick="
if(document.querySelector(#id).value==='night){
    document.querySelector('body').style.backgroundColor ='black';}
else{
    document.querySelector('body').style.backgroundColor ='white';
}">
```

### 1.3.2 리팩토링

- 동작하는것은 그대로 두고 중복제거 등을 통해 코드를 효율적으로 만드는 과정

```
[this]
: 코드가 속해 있는 태그

ex) <input type="button" value="night" onclick=" if(this.value==='night){
document.querySelector('body').style.backgroundColor ='black';}
else{
    document.querySelector('body').style.backgroundColor ='white';
}">
```

### 1.3.3 배열(Array)

- 순서에 따라 정보 정리

```
- 배열 추가: push
```

### 1.3.4 반복문(Roop)

```
[while(조건){}]

ex) var i=0;
while(i<3>){
    document.write('<li>i</li>);
    i += 1
}
```

### 1.3.5 배열&반복문

```
ex) var alist = document.querySelectorAll('a');
var i = 0;

while(i< alist.lenth){
    console.log(alist[i]);
    alist[i].style.color ='powderbule';
    i += 1;
```

### 1.3.6 함수(Function/method)

```
[function]

ex) function name(){
    document.write('<li>1</li>)
    document.write('<li>2</li>)
}
```

<입력>

- Parameter: 매개변수: 지칭하는 이름
- Argument: 인자: 실제 값

<출력>

- Return

### 1.3.7 객체(object)

- 순서 없이 정리
- method:객체에 소속된 함수
- property: 객체에 소속된 변수

```
ex) <script>
    var coworkers ={
        "programmer": sohyun"
};
document.write(cowokers.programmer + "<br>");
</script>

ex2) <script>
    cowokers.showAll = funtion(){
        for(var key in this){
            document.write(key + ':'+ this[key] + '<br>');
        }
    }
    coworkers.showAll();
</script>

ex3) <script>
var Body = {
    setColor:funtion(color){
        document.querySelector('body').style.color = color;
    },
    setBAckgroundColor: function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
</script>
```

```
document.querySelector('body').style.color = color;

- documnet: 객체
- querySelector: 함수이면서 객체에 소속되어 있으므로 메소드
```

### 2. 파일로 나누기

```
ex) <script src="colors.js></script>
```

- 접속을 늘지만 한번 다운로드 후 웹페이지가 저장하기때문에 다음 접속 때 저장된 파일을 읽어 네트워크를 통하지 않게 한다.
  > 이는 서버 비용절감, 네트워크 트래픽 절감

\*\* cache:저장

### 3. 협력

- library: 가져와서 쓰는 느낌

ex) jquery

```
var Body ={
    setBackgroundColor: funtion (color){

        $('body').css('background',color);
    }
}
```

- framework: 안에
  들어가서 작업하는 느낌
