# Crawling

(pip install pyautogui)>>(import pyautogui)

## 1. 네이버 검색결과 가져오기

(pip install beautifulsoup4)>>(import urllib.request from bs4 import BeautifulSoup)

- 가져올 url이 정해지면 해당 html 읽어온 후 분석하여 필요한 것 저장<br>

```
url = '가져올 url'
html = urllib.request.urlopen(url).read()
soup = BeautifulSoup(html, 'html.parser')
```

<br>

- 해당 링크의 전체 html을 가져옴
- 크롬의 경우 f12를 눌러 개발자도구<br>
- 원하는 클래스 가져오기
- href나 title과 같은 원하는 속성만 가져오기

<br>

```
title = soup.find_all(class_='원하는 클래스 이름')

for i in title:
    print(i.attrs['title'])
    print(i.attrs['href'])
```

<br>

- 링크 하나에만 관련된 결과를 가져온다는 한계점 존재
- base url 과 plus url로 나눔
- 검색어에 따라서 plus url을 활용
- 검색받은 입력어를 코드에 맞게 변환(import urllib.parse)
  <br>

```
import urllib.parse

baseUrl = ''
plusUrl = input('검색어를 입력하세요.')
url = baseUrl + urllib.parse.quote_plus(plusUrl)

```

## 2. 네이버 검색 이미지 가져오기

(pip install beautifulsoup4) >>

(from urllib.request import urlopen)
(from urllib.parse import quote_plus)
(from bs4 import BeautifulSoup)

- 크롤링에서는 도메인, url, html 분석이 핵심

```
url = '가져올 url'
html = urllib.request.urlopen(url).read()
soup = BeautifulSoup(html, 'html.parser')
img = soup.find_all(class_='_img')


n = 1 #사진마다 번호를 달 변수
for i in img:
    imgUrl = i['data-source']
    with urlopen(imgUrl) as f:
        with open('./img/' + plusUrl + str(n) + '.jpg', 'wb') as h: # 우리 파일의 이름(위치):./img/ - 파일 위치
        / wb-이미지파일이기때문에 바이너리파일

        img = f.read()
        h. write(img)

        n += 1
        print('다운로드 완료')
```

## 3. 구글 검색 결과 크롤링

(pip install selenium)
(pip install beautifulsoup4) >>
(from urllib.parse import)
