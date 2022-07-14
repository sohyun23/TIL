# Database Modeling

## 1. Database

- 어떻게 만들것인가? 테이블

  > Table = Attribute, Instance, Relations, Entity

### 1.1 데이터베이스 설계

> - 시스템에 사용되는 Attribute를 List-Up
> - Entity를 List-UP
>   > \*\* Entity: 행동을 하는 객체, 다른 행동에 영향을 받는 객체, 보통 명사의 경우
> - Entity간의 Relation을 유추
> - Entity 및 Relation Table 생성, Primary Key
> - 중복되는 Attribute 제거,정규화
>   ex) entity: 학생
>   attribute: 학번, 이름, 학점, 전공
>   instance: 학생 하나하나

> <고려사항>

> - Hidden state를 생각
> - 계산으로 나와야하는 attribute같은 경우 테이블을 따로 만들거나 trigger를 통해 따로 저장
>   -> isolation이 안될 수 있음
> - primary key
> - Entity

---

## 2. Guideline

### 2.1 attribute

- 속성은 특징 한개의 집합, 다중 특징x
- 반드시 primary key를 지정
  (필요할 경우 Compound key(복합키))
- 중복되어 저장되는 속성이 없도록 함(정규화)

> ex) 업데이트나 변경, 삭제 시 어려움 존재

- 계층에 대한 정보나 연속해서 나타나는 데이터, 연결관계를 나타내는 데이터 >> 누적활용:task가 자신을 가르치는 등

- 계산 속성은 View를 통해서 업데이트로 제공

### 2.2 Table

- ERD(Entity Relation Diagram): DB상에 존재하는 Entity들 간의 관계를 표

  > > 관계들의 정보를 표현하여 DB구성

- 테이블의 유형에 따라 나눔

  > ### 2.2.1 Table
  >
  > - <b>데이터 테이블</b>: 조직의 중요한 데이터를 가진 가장 일반적인 테이블
  > - <b>연결 테이블(Linking Table)</b>: 정보와 정보가 어떤 연결관계에 있는지(동사에 대한 정보, 행위에 대한 정보 )
  > - <b>부분집합 테이블(Subset Table)</b>: 한 테이블에 대한 자세한 정보.

- 테이블 이름 설정

### 2.3 Relation

- 두개의 테이블의 관계= 속성을 공유하는 방법

> #### 2.3.1
>
> - <b>1:1</b> - 한개의 테이블의 상세내용
>   (Subset Table)
>   > ex) self relationship: 자신의 상사나 팀원관리

> - <b>1:m</b>- 한개 테이블과 관련된 m개의 instance정보를 다른 테이블이 가짐

> - <b>m:n</b>- Linking Table
