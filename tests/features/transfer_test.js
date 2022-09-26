Feature('송금 - 고객은 본인 계좌에서 다른 사람에게 돈을 보내기 위해 송금 서비스를 이용할 수 있다.');

// Given
Before(({ I }) => {
  // TODO: 계좌 설정

  I.amOnPage('/');

  // TODO: 로그인

  I.click('송금');
});

Scenario('올바르게 송금이 된 경우', ({ I }) => {
  // When
  I.fillField('받는 분 계좌번호', '1234567890');
  I.fillField('보낼금액(원)', '3000');
  I.fillField('받는 분 통장 표시', 'tester');
  I.click('보내기');

  // Then
  I.see('계좌 이체 성공');

  // TODO. 잔액확인 시 이 실제로 줄어있어야 함.
});

// TODO. 예외 처리 필요함
// Scenario('잔액이 부족한 경우', ({ I }) => {
//   // When
//   I.fillField('받을 분 계좌번호', '1234567890');
//   I.fillField('보낼 금액', '30000000000');
//   I.click('보내기');

//   // Then
//   I.see('잔액이 부족합니다');
// });

// Scenario('계좌 번호가 틀린 경우', ({ I }) => {
//   // When
//   I.fillField('받을 분 계좌번호', '틀린계좌');
//   I.fillField('보낼 금액', '3000');
//   I.click('보내기');

//   // Then
//   I.see('계좌번호가 틀립니다');
// });
