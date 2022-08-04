# Vue

- 'vue.cmd create <project-name>' : project 만들기
- 'npm run serve' : 실시간 미리보기 띄우기
- ctrl + c : vue 종료하는 법
  <br>

### package.json

- package.json: 프로젝트에 대한 정보
  > scripts: 단축키처럼 명령어를 저장함
  > browserlist: 제공하는 browser

<br>

### src> main.js

- npm run serve를 눌러 vue를 실행되는 순간에 가장 먼저 실행됨
- main.js를 통해 구동

<br>

### public> index.html

- 파일을 통해 서비스가 됨

### Manually select features

- Babel: 최신 자바스크립트에서 짠 코드를 구 브라우저에서도 동작할 수 있게 구브라우저용 코드로 변환해줌
- TypeScript
- Progressive Web App (PWA) Support: 모바일처럼 웹을 만들어주는 것
- Router: 메뉴를 눌렀을 때 화면이동을 해주는 모듈
- Vuex: 모든 vue 컴포넌트내에서 공통으로 접근가능한 저장소를 만들고 상태관리
- CSS Pre-processors
- Linter / Formatter: 팀내에서 모두가 동일한 코딩컨벤션을 할 수 있게 함( 코딩규칙 통일)
- Unit Testing: 실제로 개발한 단위기능을 테스트할 수 있는 모듈
- E2E Testing: 전체적인 테스트

## 1. Router

### 라우터 설계

- 1. 무조건으로 들어가는 것 2) 사용가능성이 높은 것 3) 사용가능성이 무작위인 경우

1. 상단에서 import함

2. webpackPrefetch:true

- prefetch하여 캐시에 저장: 미래에 사용할 가능성이 높은 것에 한해서 prefetch, 브라우저가 열리는 순간 캐시에 저장함(데이터를 누르는 순간받아오는 것이 아닌 미리 받아옴: 사이즈가 큰 경우)

3. webpackPrefetch:true를 쓰지 않는 경우

- 사이즈가 작아서 클릭하는 순간 데이터를 받아도 문제가 되지 않음
- 해당 페이지를 여는 빈도가 낮은 경우
