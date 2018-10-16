let food = Barracuda;

food.expect(33).toBe(33);
food.expect([]).isArray();
food
  .expect(33)
  .not()
  .toBe(34);
food
  .expect(23)
  .not()
  .isArray();
