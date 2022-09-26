Feature('Home Page');

Scenario('Visit the Home Page without Login', ({ I }) => {
  // When
  I.amOnPage('/');

  // Then
  I.see('마카오뱅크에서');
});
