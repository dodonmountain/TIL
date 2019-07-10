# Day 3

# 파이썬 기초 문법 정리

## 문제와 풀이

1. 문자열을 입력받아 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오.

   ```python
   string = input('문자를 입력하세요: ')
   print(string[0]+string[-1])
   ```

   * 문자열을 입력받아 변수 string에 할당하고, string의 [0]과 [-1]을 출력하면 된다.

   * 문자열의 인덱스는 0,1,2,3,4,5,....-3,-2,-1 순으로 매겨진다는 사실을 잊지 말자.

     

2. 자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

   ```python
   numbers = int(input('숫자를 입력하세요: '))
   for i in range(1,numbers+1):
       print(i)
   ```

   * 자연수N이 입력값으로 주어졌기에 input을 정수형 int로 받아야 한다.

   * 한줄에 하나씩 출력하기 위해 반복문을 사용했다.

     

3. 숫자를 입력 받아 짝수/홀수를 구분하는 코드를 작성하시오.

   ```python
   number = int(input('숫자를 입력하세요: '))
   if number % 2 == 0:
       print('짝수')
   else:
       print('홀수')
   ```

   * 2로 나누었을때 나머지가 0인 수가 짝수이다.

   * `not` 구문을 통해 간단히 반전이 가능하다.

     ```python
     if not number %2:
         print('홀')
     else:
         print('짝')
     ```

     

4. 표준 입력으로 국어, 영어, 수학, 과학 점수가 입력됩니다.

   국어는 90점 이상,

   영어는 80점 초과,

   수학은 85점 초과, 

   과학은 80점 이상일 때 합격이라고 정했습니다.(한 과목이라도 조건에 만족하지 않으면 불합격)

   다음 코드를 완성하여 합격이면 True, 불합격이면 False가 출력되도록 작성하시오. 

   ```python
   a = int(input('국어: '))
   b = int(input('영어: '))
   c = int(input('수학: '))
   d = int(input('과학: '))
   if a >= 90 and b >80 and c >85 and d >=80:
       print('합격')
   else:
       print('불합격')
   ```

   * if문 중첩을 댕청하게 세로로 쓸리는 없겠지.

   * 조건이 두개가 넘어갈때 조건 사이에 or 연산을 해주면 된다.

     

5. 표준 입력으로 물품 가격 여러 개가 문자열 한 줄로 입력되고, 각 가격은 ;(세미콜론)으로 구분되어 있습니다.

   입력된 가격을 높은 가격순으로 출력하는 프로그램을 만드세요.

   \# 입력 예시: 300000;20000;10000

   ```python
   prices = input('물품 가격을 입력하세요: ')
   lst_prices = list(map(int, prices.split(';')))
   print(sorted(lst_prices, reverse=True))
   ```

   * 문제를 분해하면 

     1. 가격을 입력받아 `;` 으로 구분하여 저장한다.
     2. 저장받은 가격을 정수형`int`으로 변환한다.
     3. 해당 가격을 가진 `list`를 생성하고 내림차순으로 정렬한다.

     로 요약이 가능하다.

   * `map()`함수를 이용해 2번 과정을 줄일 수 있다.

   * 리스트 내포 `list comprehension` 기능이나 단순 반복문과 조건분기로도 해결할 수 있지만 pythonic하게 해결하려면 최대한 세 줄 이내로 끝내는 편이 좋겠다.(극단적으로는 한줄로도 가능하다)

     ```python
     print(sorted(list(map(int, input().split(';'))),reverse = True))
     ```

   ## HTML/CSS
   
   ### HTML
   
   `HTML`은 HyperText Markup Language의 약자로 웹 문서를 구조화 하는데 사용되는 언어이다.
   
   1. HTML 기본 구조
   
      ```HTML
      <!DOCTYPE html>
      <html lang="ko">
      <head>
          <meta charset="UTF-8">
          <title>Document</title>
      </head>
      <body>
          <h1>Hello World?</h1>
          
      </body>
      </html>
      ```
   
      * `<head></head>`는 문서의 정보를 담고 있다.
      * `<body></body>`는 문서의 본문을 담고 있다.
   
   2. 태그의 종류
   
      1. 기본적으로 태그는 `여는 태그`와 `닫는 태그`로 구성된다.
   
         ```html
         <h1>제목1</h1>
         ```
   
      2. `닫는태그`가 없는 경우도 있다.(self-closing tag)
   
         ```html
         <img src="__"/>
         ```
   
      3. 태그의 구성
   
         ```html
         <img src="__" width="300" height="300"/>
         <a href="https://google.com" class="blue">구글</a>
         ```
   
         * 태그별로 공통적으로 가질 수 있는 속성 : `id` , `class` , `style` 
         * 각 태그별로 가질 수 있는 속성이 추가적으로 있다.
           * img - `src`,`width`,`height`
           * a - `href`

## CSS

CSS는 Cascading Style Sheets의 약자로, HTML을 꾸며주는 역할을 한다.

HTML을 꾸며주기 위하여, `선택자(selector)`를 통해 특정한 element를 지정하여야 한다.

 1. 선택자

    * 태그 선택자

      ```css
      p{
          color: red;
      }
      ```

      

    * class 선택자

      ```css
      .blue {
          color: blue;
      }
      ```

      

    * id 선택자

      ```css
      #pink {
          color: pink;
      }
      ```

      선택자 우선순위는 id선택자 > class선택자 > 태그선택자 순서로 적용된다.

## FLASK

`Flask`는 파이썬 기반의 micro framework이다.

### 기본 활용법

1. 설치

   ```bash
   $ pip install flask
   ```

2. 기본 코드

   ```python
   # app.py
   from flask import Flask
   
   app = Flask(__name__)
   
   @app.route('/')
   def hello():
       return 'Hello!'
   
   if __name__ == '__main__':
       app.run(debug = True)
   ```

3. 서버 실행

   ```bash
   $ flask run
   ```

   * 기본적으로 `flask run`명령어는 `app.py`파일을 실행시킨다. 만약 다른 파일명으로 만들었다면, 옵션을 추가해야 한다.

   * 마지막 두 줄을 작성해놓았다면, 아래와 같이 실행도 가능하다.

     ```bash
     $ python app.py
     ```

## Variable Routing

요청 오는 url을 변수화 하여 값을 사용할 수 있다.

```python
@app.route('/hi/<string:name>')
def hi(name):
    return f'{name}아 안녕?'
```

## Rendering Template

`HTML` 파일을 만들어 활용할 수 있다. 기본적으로 `templates`폴더에 파일을 만들어야 한다.

```python
app.py
templates/
	hi.html
    lunch.html
    index.html
```

`HTML` 파일에서 변수의 값을 출력하고자 한다면, 키워드 인자로 그값을 넘겨줘야한다.

```python
from flask impor Flask, render_template
# ...
@app.route('/hi')
def hi():
    return render_template('hi.html', name = name) 
```

그리고 출력을 위해서는 `{{}}`를 사용한다.

``` 
<h1>{{name}}안녕?</h1>
```





