# HTML(Hyper Text Markup Language) 
### Lesson 1. Tag의 기본 개념 시작
꺽쇠에서 시작해서 꺽쇠에서 끝나는 `<태그>`  
`속성attribute`을 통해 추가적인 정보를 제공한다.  
다양한 태그와 웹표준에 맞는 올바른 사용법을 익힌다.   
즉 각 태그마다 꼭 필요한 attribute가 어떤것들이 있는지 웹표준에 맞는지 등을 익힌다.

### Lesson 2. Headings & Paragraph (제목과 문단)
* Heading 태그 : h1, h2, h3, h4, h5, h6, 총 6가지
* Paragraph 태그 : p
* 연습

```
 <h1>구름EDU 클라우드 SW교육환경</h1>
    <p>
      스크래치3, 엔트리부터 파이썬, C언어까지 설치가 전혀 필요없고 강력한 LMS와
      연동된 SW교육환경이 눈앞에 펼쳐집니다. 누구나 SW에 대한 지식과 경험을 나눌
      수 있고, 누구나 SW를 배울 수 있는 환경! 지금 경험해보세요!
    </p>

    <h1>황제펭귄</h1>
    <h2>생물학적 특성</h2>
    <p>
      지구상에 생존하는 모든 펭귄들 중에서 가장 키가 크고 체중이 많이 나가는
      종이다. 서식지는 남극과 포클랜드 제도이다. 암컷과 수컷은 덩치와 깃털
      무늬가 비슷하며, 성체는 최고 122센티미터에 몸무게는 22~37킬로그램까지
      나간다. 등은 검고 가슴 부위는 창백한 노랑색을 띠고 있으며 귀 부위는 밝은
      노랑색이다. 다른 펭귄들과 마찬가지로 황제펭귄은 날지 못한다. 이들은 해양
      생활에 적합한 유선형의 몸매와 플리퍼(flipper)로 불리는 납작한 날개를 갖고
      있다.
    </p>
    <h2>특성</h2>
    <p>
      황제펭귄은 남극의 겨울 기간 동안 알을 낳는 유일한 종으로, 50 ~ 120킬로미터
      정도 얼음 위를 걸어 새끼들을 키우는 군집장소까지 이동한다. 이 군집장소에는
      최대 수천 마리의 개체들이 모인다. 성체 황제펭귄들은 노래를 통해 짝짓기를
      하고, 암컷은 한 개의 알을 낳는다. 수컷은 암컷이 바다로 돌아가서 먹이를
      충분히 먹고 돌아올 때까지 태양이 완전히 뜨지 않아 최대 -60℃까지 기온이
      떨어지는 1개월을 포함하여 약 4개월간 알을 발등에 올려놓고 품는다. 이
      기간동안 수컷은 수분정도만 섭취하며 버틴다. 알이 부화하면 수컷은 4개월간
      위 속에 간직했던 물고기를 한 번 새끼에게 준다. 암컷이 돌아오면 수컷이 역할
      교대를 하여 바다로 먹이를 섭취하러 나가며, 암컷이 새끼를 돌본다. 새끼가
      성장하여 천적인 도둑갈매기로부터 안전해지면 한 곳에 모아 집단으로
      관리한다. 펭귄의 새끼는 다른 조류와 마찬가지로 솜털로 덮여있는데, 성체가
      되면 솜털이 빠지고 깃털이 나면서 수영에 적합한 상태가 된다. 황제펭귄의
      수명은 야생에서 보통 20년 정도이지만, 기록에 따르면 일부 개체들은 50년까지
      살 수 있다고 한다.
    </p>
```

### Lesson 3. Emphasis & Strong (강조)
* 강조를 할때 사용하는 태그는 총 2종류가 있는데, `<strong>`과 `<em>`이 있음.
```
<em>기울기 강조</em>
<strong>굵게 강조</strong>
```
* em이랑 strong의 차이가 뭐죠?   
  : 큰 차이 없고, 끌리는 것을 사용하면 된다!
* 연습
```
<p>
   가끔 눈물을 흘린다. 눈물을 참을 수 없는 나 자신이 싫은 순간도 있다. 아픈
   마음을 달래기 위해, 소리치며 울 수 있다는 건 좋은 거야. 그렇지? 눈물은
   슬픔을 위한 것만은 아니니까.<br /><br />
   난 눈물이 좋다. 아니,<br /><br />    
   <em>머리가 아닌 마음으로 우는 내가 좋다.</em><br />
   <strong>머리가 아닌 마음으로 우는 내가 좋다.</strong>
</p>
```
* _**사실 이 부분은 CSS에서 모두 처리가 가능하기에 알고만 있자.**_

### Lesson 4. Anchor (링크)
* 현재 위치에서 다른 위치로 이동할 때 사용
```
<a href="주소"> 링크 </a>
href 속성 : hypertext reference의 축약으로 주소값을 입력해준다
```
* href 표기방법
1. 웹URL
2. 페이지 내 이동 : id값을 사용한다
```
<a href="#hello"> hellow section으로 이동 </a>
<section id="hello"> Hello Section입니다. </section>
```
3. 메일주소 사용
```
<a href="mailto:gibeks@hanmail.net">메일쓰기</a>
```
4. 전화걸기 : 
```
<a href="전화번호"></a>
```
* traget 속성 : target = "_blank" / _blank를 값으로 사용 시 새로운 탭으로 이동하게 해준다.

### Lesson 5. Image (그림)
```
<img src="#" alt="/>
src : source
alt : alternative text / 대체 텍스트, 즉 Network가 느려 이미지 업로드가 느릴 때 그림 대신 보여주는 글
```

### Lesson 6. List (목록)
* `<ul>`(unordred list), `<ol>`(ordered list) 총 2가지가 대표적이다
* ul 또는 ol의 자식요소인 무조건 `<li>`만 사용 가능함. 즉 항목 1에 링크를 걸고 싶으면 `<li>`안에 `<a>`를 넣어야함.
```
<ul>
  <li> 
    <a href="#">항목1</a>
  </li>
  <li> 항목2 </li>
</ul>
```

### Lesson 7. Description List (정의 목록)
* 사용 목적
  1. `용어`를 `정의`할 때 사용하는 리스트
  2. `key:value`로 정보를 제공할 때
* 태그 :
  1. dl : description list / dl을 사용하는 범위
  2. dt : description term / key값에 해당
  3. dd : description data / value값에 해당
     * dt와 dd는 하나의 묶음이며 같이 다녀야 한다.
  4. dfn : definition

```
<dl>
  <div> <!-- division으로 묶어도 되고 안묶어도 되고 개발자의 자율적으로 사용한다. -->
    <dt>학습</dt>
    <dd>
      배워서 익히는 일. 교육학에서는, 지식의 획득, 인식의 발전, 습관의 형성 등을
      목표로 하는 의식적 행동을 가리킴.
    </dd>
    <dd>
      심리적, 행동적 경험을 쌓음으로써 행동의 양태가 변화, 발전하는 일
    </dd>
  </div>
</dl>
```

### Lesson 8. Quotations (인용)
```
<!-- 어떤 문단 또는 내용 전체가 인용문일 경우 사용함 -->
<!-- 인용 사이트를 알고 있을 경우 cite 속성을 추가하면 된다. -->
<blockquote cite="#"> 인용 내용 </blockquote> 
<!-- 출처명을 적을 때 사용-->
<cite>출처 명</cite>
<!-- 문장내 들어가는 인용문을 사용할 때 사용 / 따옴포"" 가 생김 -->
<q> 인용내용 </q>
```

### Lesson 9. Form - 기본 구조
* 사용자로부터 어떠한 정보나 데이터를 받고 싶을 때 사용한다.    
  그래서 함께 사용할 속성이 많다.
* form 태그에서는 action 속성을 반드시 작성해야한다. 사용자로 부터 받은 데이터를 전달할 대상이 있어야하기 때문이다.
* action 값에 들어갈 API주소는 "back-end 개발자"에게서 받는다.
* form안에 채울 다양한 필드Field 태그를 Lesson 10부터 공부한다.

```
<form action="API주소 입력" method="GET|POST"> </form>
```

### Lesson 10. Form - Input
* type 속성을 항상 넣어주어야한다
* 속성 종류 : [input 속성값 종류](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)  
```
<form action="" method="GET">
      <input
        type="text"
        placeholder="아이디를 입력하세요"
        minlength="5"
        maxlength="13"
        required
      />
      <input
        type="text"
        placeholder="공란입니다"
        value="여기는 아무도 못건드려요"
        disabled
      />
      <input type="email" placeholder="이메일을 입력하세요" />
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        minlength="6"
        required
      />
      <input type="url" placeholder="포트폴리오 URL을 적으시오" />
      <input
        type="number"
        placeholder="나이를 입력하세요 (12세 이상 100세 이하)"
        min="12"
        max="100"
      />
      <input type="file" accept=".png, .jpg" />
      <button>SUBMIT</button>
</form>
```
* placeholder : 입력창에 대한 내용 설명을 적을때 사용하는 속성
* minlength & maxlength : 최소/최대 입력 갯수
* disabled : 입력 안되게 만들기
* required : 반드시 form에서 입력값으로 사용되게 하기
* email type : @가 들어가는 것을 확인
* file type에서 accpet 속성 : 파일 확장자 범위를 제한할 수 있음.
* number type에서 min/max 속성으로 최대/최소 값을 정할수 있음.

### Lesson 11. Form - Label
* 폼 양식에 이름을 붙이는 태그
* 문법적으로 지켜야할 규칙이 있음 / lebel이 어떠한 form과 연결이 되어 있는지 명시해야하며 `for` 속성을 사용하여 해당 form의 `#id`값을 넣어준다
```
<label for="abc"> 라벨 </label>
<input id="abc" type="text" />
```

### Lesson 11. Form - Radio & Checkbox
* Radio 타입은 항상 `name`과 `value` 속성을 함께 사용해야한다. `name`속성으로 radio들을 grouping 해주고, `value`를 통해 backend에 전달할 고유 값을 지정할 수 있다.
* 아래의 코드는 subscription의 그룹에서 구독중일 때 1, 미구독일 때 0의 고유값을 가지고 있다.
```
radio
<form action="" method="GET">
  <input type="radio" name="subscription" value="1" id="subscribed" />
  <label for="subscribed">구독중</label>
  <input type="radio" name="subscription" value="0" id="unsubscribed" />
  <label for="unsubscribed">미구독</label>
  <button type="submit">submit</button>
</form>
```
* Checkbox 타입은 Radio와 비슷하나 굳이 name으로 grouping이 될 필요는 없음. name은 각 box의 고유 변수명이 됨
```
checkbox
 <h1>사용가능언어</h1>
<form action="" method="GET">
  <input type="checkbox" id="html" name="skill" value="0" />
  <label for="html">HTML</label>
  <input type="checkbox" id="css" name="skill" value="1" />
  <label for="css">CSS</label>
  <input type="checkbox" id="javascript" name="skill" value="2" />
  <label for="javascript">JavaScript</label>

  <button type="submit">submit</button>
</form>
```

### Lesson 12. Form - Select & Option
* name은 굳이 각 option들에 붙일 필요 없이 select태그에 붙이면 됩니다.
* select 아래 option태그를 통해서 여러 옵션을 넣어 줍니다. 그리고 value 속성을 통해 고유 값을 지정하여 추 후에 선택 후 backend에 전달할 value를 지정해줍니다.
* `multiple`속성을 넣을 경우 여러개를 선택할수 있음. ~~그러나 유용하지 않아 보입니다.~~
```
<form action="" method="GET">
      <label for="skill">스킬</label>
      <select name="skill" id="skill">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="js">JAVASCRIPT</option>
      </select>
      <button type="submit">submit</button>
</form>
```

### Lesson 13. Form - Textarea
* `<input type="text"/>`는 한줄의 글만 전달 할수 있다면 `textarea`태그는 여러개의 글을 전달할 수 있음.
```
<form action="" method="GET">
      <label for="filed"></label>
      <textarea
        name="good"
        id="filed"
        cols="30"
        rows="10"
        placeholder="자기소개를 입력하세요"
      ></textarea>
      <br />
      <button type="submit">submit</button>
</form>
```

### Lesson 14. Form - Button
* 버튼 type의 종류 : button, submit/form을 제출할 때만 명시, ~~reset/잘 쓰지 않는다.~~ 
```
<button type="button or submit or reset"></button>
```

### Lesson 15. Table - 기본구조
* tr : table row / 표의 행을 의미함
* td : table data / 셀의 데이터 입력 의미
* th : table head / 셀이 제목임을 의미
* thead : head부분이라는 것을 명시적으로 표현하기 위한 태그
* tbody : body부분이라는 것을 명시적으로 표현하기 위한 태그
* tfoot : foot부분(총계 라던지?)이라는 것을 명시적으로 표현하기 위한 태그
```
<table>
  <!-- 헤더 부분 -->
  <thead>
    <tr>
      <th> 테이블 헤더 </th>
    </tr>
  </thead>

  <!-- 바디 부분 -->
  <tbody>
    <tr>
      <td> 테이블 데이터 </td>
    </tr>
  </tbody>

  <!-- 풋 부분 -->
  <tfoot>
    <tr>
      <td> 테이블 데이터 </td>
    </tr>
  </tfoot>
</table>
```

### Lesson 16. Table - 심화
* scope속성 : th 태그에만 사용하는 속성으로써 col에 대한 제목인지, row에 대한 제목인지 명시적으로 표기하는 것임
* rowspan : 해당 셀을 기준으로 아래쪽으로 몇칸 합칠지 결정 
* colspan : 해당 셀을 기준으로 오른쪽으로 몇칸 합칠지 결정

```
<table>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">월</th>
          <th scope="col">화</th>
          <th scope="col">수</th>
          <th scope="col">목</th>
          <th scope="col">금</th>
        </tr>
      </thead>
        <tr>
          <th scope="row">1교시</th>
          <td rowspan="2" class="html-css-basic">왕초보 HTML &amp; CSS</td>
          <td class="coding">모각코</td>
          <td rowspan="2" class="html-css-basic">왕초보 HTML &amp; CSS</td>
          <td class="coding">모각코</td>
          <td rowspan="2" class="html-css-basic">왕초보 HTML &amp; CSS</td>
        </tr>
        <tr>
          <th scope="row">2교시</th>
          <td rowspan="2" class="js-skillup">Javascript 스킬업</td>
          <td rowspan="2" class="js-skillup">Javascript 스킬업</td>
        </tr>
        <tr>
          <th scope="row">3교시</th>
          <td class="js-basic">Javascript 시작반</td>
          <td class="js-basic">Javascript 시작반</td>
          <td class="js-basic">Javascript 시작반</td>
        </tr>
        <tr>
            <th colspan="6" scope="row">점심시간</th>
        </tr>
        <tr>
            <th scope="row">4교시</th>
            <td class="sass-basic">SASS 기초반</td>
            <td rowspan="2" class="portfolio">HTML &amp; CSS 포트폴리오반</td>
            <td rowspan="2">Open Seminar</td>
            <td rowspan="2" class="portfolio">HTML &amp; CSS 포트폴리오반</td>
            <td class="sass-basic">SASS 기초반</td>
        </tr>
        <tr>
            <th scope="row">5교시</th>
            <td class="coding">모각코</td>
            <td class="coding">모각코</td>
        </tr>
      </tbody>
</table>
```
<table>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">월</th>
          <th scope="col">화</th>
          <th scope="col">수</th>
          <th scope="col">목</th>
          <th scope="col">금</th>
        </tr>
      </thead>
        <tr>
          <th scope="row">1교시</th>
          <td rowspan="2" class="html-css-basic">왕초보 HTML &amp; CSS</td>
          <td class="coding">모각코</td>
          <td rowspan="2" class="html-css-basic">왕초보 HTML &amp; CSS</td>
          <td class="coding">모각코</td>
          <td rowspan="2" class="html-css-basic">왕초보 HTML &amp; CSS</td>
        </tr>
        <tr>
          <th scope="row">2교시</th>
          <td rowspan="2" class="js-skillup">Javascript 스킬업</td>
          <td rowspan="2" class="js-skillup">Javascript 스킬업</td>
        </tr>
        <tr>
          <th scope="row">3교시</th>
          <td class="js-basic">Javascript 시작반</td>
          <td class="js-basic">Javascript 시작반</td>
          <td class="js-basic">Javascript 시작반</td>
        </tr>
        <tr>
            <th colspan="6" scope="row">점심시간</th>
        </tr>
        <tr>
            <th scope="row">4교시</th>
            <td class="sass-basic">SASS 기초반</td>
            <td rowspan="2" class="portfolio">HTML &amp; CSS 포트폴리오반</td>
            <td rowspan="2">Open Seminar</td>
            <td rowspan="2" class="portfolio">HTML &amp; CSS 포트폴리오반</td>
            <td class="sass-basic">SASS 기초반</td>
        </tr>
        <tr>
            <th scope="row">5교시</th>
            <td class="coding">모각코</td>
            <td class="coding">모각코</td>
        </tr>
      </tbody>
</table>


