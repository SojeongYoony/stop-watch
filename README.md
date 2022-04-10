# stop-watch

###### 2022-03-31~

<br>
<br>

###### 1차 점검일 : 22-04-08

<br>

#### 개발일지
<details>
<summary> 2022-04-01 </summary>
<ul>
    <li>일시정지, 종료 시 시작이 되지않는 현상 수정</li>
    <li>기능별 함수 분리</li>
    <li>인라인 click event 분리</li>
</ul>
</details>
<details>
<summary> 2022-04-02 </summary>
<ul>
  <li>Timer 객체화 시키기(class이용)</li>
</ul>
</details>
<details>
<summary> 2022-04-03 </summary>
<ul>
  <li>오류수정....=>reset/displaytime함수 수정</li>
</ul>
</details>
<details>
<summary> 2022-04-04 </summary>
<ul>
  <li>오류수정....Uncaught TypeError : Cannot read properties of undefined (reading 'tick')</li>
</ul>
</details>
<details>
<summary> 2022-04-08 </summary>
TODO : 시작버튼누르면 시작버튼이 일시정지버튼으로 바뀌게 구현예정
<ul>
  <li>현재 측정 시간 출력</li>
</ul>
</details>
<details>
<summary> 2022-04-10 </summary>
<ul>
  <li>ES5로 다시 선언하기..하는중..</li>
</ul>
</details>






<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

##  OOP 3요소 5원칙 
#### 3요소
1. 캡슐화(Encapsulation) 정보은닉
- 프로그램 내에서 같은 기능을 목적으로 작성된 코드를 모아 다른 곳 (클래스)에서 안보이게 숨기는 것
- 클래스 내에서 사용할 속성은 숨기고(private), 객체가 수행할 기능은 공개(public)하는 것을 의미
2. 상속(Inheritance) 재사용 + 확장
- 클래스 사이에 부모와 자식 클래스가 존재할 수 있다.
- 자식 클래스는 상속받은 부모 클래스의 속성 및 기능을 사용할 수 있다.
3. 다형성(Polymorphism) 사용편의
- 하나의 객체가 여러가지 형태를 가질 수 있다.
- 오버라이딩(Overriding)
  - 부모 클래스에 정의되어 있는 메서드를 자식클래스에서 재정의하여 사용
- 오버로딩(Overloading)
  - 같은 이름을 가진 메서드를 인자값의 종류나 개수를 다르게 하여 다른 기능을 구현하도록 정의

#### 5원칙(SOLID원칙)
1. 단일 책임 원칙(Single Responsibility Principle)
- 모든 클래스는 각각 하나의 책임만 가져야 한다. 즉, 특수한 목적을 수행하도록 만든 클래스는 해당 목적 외에 다른 기능을 수행하면 안된다.
2. 개방-폐쇄 원칙(Open Closed Principle)
- 클래스는 확장에는 열려있고 수정에는 닫혀있어야 한다. 즉, 기존의 코드를 변경하지 않으면서 기능을 추가할 수 있도록 설계되어야 한다.
3. 리스코프 치환 원칙(Liskov Substitution Principle)
- 자식 클래스는 언제나 자신의 부모 클래스를 대체할 수 있어야 한다. 즉, 자식 클래스는 부모 클래스의 책임을 무시하거나 재정의하지 않고 확장만 수행하도록 해야한다.
4. 인터페이스 분리 원칙(Interface Segregation Principle)
- 한 클래스는 자신이 사용하지 않는 인터페이스는 구현하지 말아야 한다. 하나의 일반적인 인터페이스보다 여러 개의 구체적인 인터페이스가 낫다.
5. 의존 관계 역전 원칙(Dependency Inversion Principle)
- 의존 관계를 맺을 때 변화하기 쉬운 것 또는 자주 변화하는 것보다는 변화하기 어려운 것, 거의 변화가 없는 것에 의존해야 한다. 즉, 구체적인 클래스보다는 인터페이스나 추상 클래스와 관계를 맺어야 한다.

#### JS Class

```javascript
class MyClass {
  // 여러 메서드를 정의할 수 있음
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

* 이렇게 클래스를 만들고 new MyClass()를 호출하면 내부에서 정의한 메서드가 들어 있는 객체 생성
* 객체의 기본 상태를 설정해주는 생성자 메서드 constructor()는 new에 의해 자동 호출 되므로, 특별한 절차 없이 객체를 초기화 할 수 있다.


###### 지금은 모르지만 언젠간 이해되겠지..
[바벨](https://velog.io/@ksh4820/%EB%B0%94%EB%B2%A8%EA%B3%BC-%EC%9B%B9%ED%8C%A9)