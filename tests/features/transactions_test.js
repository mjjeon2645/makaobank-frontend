Feature('거래내역 확인 - 고객은 고객의 계좌로 돈이 거래된 내역을 확인하고 싶다.');

// Given
Before(({ I }) => {
  // TODO: 계좌 설정

  I.amOnPage('/');

  // TODO: 로그인

  I.click('거래 내역 확인');
});

Scenario('거래내역이 없는 경우', ({ I }) => {
  // When
  I.click('거래 내역 확인');

  // Then
  I.see('거래 내역이 없습니다');
});

Scenario('거래 내역이 있는 경우', ({ I }) => {
  // Given
  I.click('송금');
  I.fillField('받을 분 계좌번호', '1234567890');
  I.fillField('보낼 금액', '3000');
  I.click('보내기');

  I.waitForText('계좌 이체 성공');

  // When
  I.amOnPage('/');
  I.click('거래 내역 확인');

  // Then
  I.see('송금 - 1234567890 - 3,000원');
});
