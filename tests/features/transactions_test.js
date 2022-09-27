Feature('거래내역 확인 - 고객은 고객의 계좌로 돈이 거래된 내역을 확인하고 싶다.');

// Given
Before(({ I }) => {
  // TODO: 계좌 설정

  I.amOnPage('/');

  // TODO: 로그인

  I.click('거래내역');
});

// TODO. 거래내역이 없는 경우 처리 필요
// Scenario('거래내역이 없는 경우', ({ I }) => {
//   // When
//   I.click('거래내역');

//   // Then
//   I.see('거래 내역이 없습니다');
// });

Scenario('거래 내역이 있는 경우', ({ I }) => {
  // Given
  I.click('송금');
  I.fillField('받는 분 계좌번호 :', '5678');
  I.fillField('보낼금액(원) :', 3000);
  I.fillField('받는 분 통장 표시 :', 'tester');
  I.click('보내기');

  I.waitForText('✅ 송금 완료!');

  // When
  I.amOnPage('/');
  I.click('거래내역');

  // Then
  I.see('송금\t5678\t3,000');
});
