// in this file you can append custom step methods to 'I' object
// 린트 에러로 인해 아샬님이 포맷을 살짝 바꿔두었으며 이를 그대로 옮겨옴

const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = () => actor({
  setupDatabase() {
    this.amOnPage(`${backdoorBaseUrl}/setup-database`);
  },

  changeAmount({ userId, amount }) {
    this.amOnPage([
      `${backdoorBaseUrl}/change-amount`,
      `?userId=${userId}&amount=${amount}`,
    ].join(''));
  },
});
