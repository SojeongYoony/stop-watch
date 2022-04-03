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
<summary> 2022-04-03 </summary>
<ul>
  <li>오류수정....=>reset/displaytime함수 수정</li>
</ul>
</details>






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
