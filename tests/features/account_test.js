Feature('잔액확인 - 고객은 얼마를 쓸 수 있는지 알기 위해 본인계좌 잔액을 확인할 수 있다.');

const backdoorBaseUrl = 'http://localhost8000/backdoor';

Before(({ I }) => {
  // TODO: 계좌 설정
  // GET /backdoor/setup-database

  I.amOnPage(`${backdoorBaseUrl}/setup-database`);

  I.amOnPage('/');
  // TODO: 로그인
});

Scenario('잔액이 없는 경우', ({ I }) => {
  // Given
  // 고객의 잔액이 0이어야 함
  // GET /backdoor/change-amount?userId=1&amount=0
  I.amOnPage(`${backdoorBaseUrl}/change-amount?userId=1&amount=0`);

  // When
  I.click('잔액확인');

  // Then
  I.see('잔액이 없습니다');
});

Scenario('잔액이 있는 경우', ({ I }) => {
  // Given
  // 고객의 잔액이 100,000원이어야 함
  // GET /backdoor/change-amount?userId=1&amount=100000
  I.amOnPage(`${backdoorBaseUrl}/change-amount?userId=1&amount=100000`);

  // When
  I.click('잔액확인');

  // Then
  I.see('잔액 : 100,000원');
});
