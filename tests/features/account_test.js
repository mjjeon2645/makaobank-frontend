Feature('Account detail');

Before(({ I }) => {
  // TODO: 계좌 설정
  I.amOnPage('/');
  // TODO: 로그인
});

// TODO. 잔액 없는 경우 처리 필요
// Scenario('I have no money', ({ I }) => {
//   // When
//   I.click('잔액확인');

//   // Then
//   I.see('잔액이 없습니다');
// });

Scenario('I have money', ({ I }) => {
  // When
  I.click('잔액확인');

  // Then
  I.see('잔액: 123,000원');
});
