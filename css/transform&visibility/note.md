# transform : 다양한 함수들이 있다. 이중 대표적인 3가지 함수만 공부한다.

1. translate(x,y) : x축, y축으로 이동시킨다. 어디로 이동시키든 다른 스타일에 영향을 주지 않는다.

- X축으로만 이동 : translatex(값)
- Y축으로만 이동 : translateY(값)
- 값에는 px 또는 % 단위를 사용할 수 있다. %는 자기 자신의 사이즈 기준을 한다.

2. scale(N) : 자기자신의 크기를 키우고, 줄이고 할때 사용. N은 배율임. 예 2 = 2배
   또는 scale(x,y) 를 사용해서 x,y 기준으로 크기를 조정할 수 있다.

3. rotate(Ndeg) : 회전시킬 때 사용

# visibility : visible(기본값) | hidden

사라지는데, 공간은 차지하고 있고, 진짜 보이지만 않게 하는 것이다. display:none;과는 다르다.
