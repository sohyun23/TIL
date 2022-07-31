# git

- 가장 진보된 버전 관리 도구(형상관리 도구: 작업물 제작시 업데이트 버전마다 상태를 저장하는 도구)
- 개발된 코드의 History를 관리

## 1. git의 특징

> - 분산 버전 관리: 버전관리를 할 때, 자신의 컴퓨터와 원격지서버에 모두 버전관리를 할 수 있음
>   > - 이러한 저장소를 Remote Repository

## 2. git Local Repository

> - 파일의 이력을 관리하기위한 Derectory형태의 저장소.
> - [.git]이라는 폴더명으로 history를 저장 (숨김파일로 되어있으며 내용은 알 수 없음)

## 3. git 파일 상태 관리

> - Working Directory -> Staging Area -> Git Repository
>   > 3.1 Working Directory (파일 생성)
>   >
>   > - Untracked files: git이 이력을 관리하지 않은 파일

> > - [git.add 파일명]: Untracked files을 변화,관리해주기 위해 선언하는 명령어

> > 3.2 Staging Area (Tracked File)
> >
> > - commit이 될 준비가 됨.

> > - [git.commit 파일 -m "메세지"]: 저장소(.git)에 파일 상태 저장

> > - Staged File: 변화 이력이 저장이 안 된 지속 관찰할 대상 파일

> > 3.3 Git Repository (Committed File)

> > - Committed File: 현재 상태를 Git Repository 저장

> > - commit은 의미있는 변화를 하는 경우 적합

git remote -v : 누구랑 어떻게 연결되어있는지
git remote add origin 내 링크 : 내링크랑 연결

## 4. git log

- 커밋한 기록 열람가능
- git checkout 코드번호: 해당 상태로 돌아가기

## 5. branch

- [git.branch 이름]

 <br>

- 브랜치 생성: git branch 이름
- 브랜치 목록 확인: git branch
- 브랜치간 이동: git switch 이름
- 브랜치 생성과 동시에 이동하기: git switch -c 이름
  브랜치 삭제하기: git branch -d (이름)
- 브랜치 이름 바꾸기: git branch -m 기존이름 새이름
- 위치한 브랜치 내의 내역: git log

<br>

### 5.1 브랜치 합치기

#### 5.1.1 <b> merge</b>

- 브랜치와 메인브랜치를 합침
- 브랜치의 히스토리를 남김
  (rebase와의 차이점)
- merge는 하나의 커밋 > reset가능
- 병합된 브랜치는 삭제
  <br>

```
git merge 브랜치명
```

#### 5.1.1 <b> rebase</b>

- 브랜치자체를 메인브랜치로 옮겨 붙임

```
git switch 원래브랜치이름 // 원래브랜치에서 rebase 해야함
git rebase main
git merge 원래브랜치이름 // main브랜치의 가장 끝으로 이동
// 이후 브랜치 삭제
```

## 6. Remote Repositoty

## 7. git status

- add하기 전과 후 차이 보여줌
- 파일 변경후 사용

## 8. 발생 에러

1. branch 관련

   > - git branch -m: branch 이름 변경

2. push 관련

- git push -f = git push --force: 강제로 나의 최신 데이터를 push하는 것.

## 9. 협업

- main 브랜치가 아닌 복사본 develop브랜치 생성

- feature 브랜치에 기능을 개발해보고 잘되면 merge
