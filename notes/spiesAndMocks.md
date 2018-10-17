# Spies, Mocks, and Stubs:
  - Spies are more like a wrapper
    - We use this when we check to see if a separate object has been called (like a database) but we don't necessarily care about what is being returned
    - expect(function).toHaveBeenCalled()
  - Mocks are used for randomness
    - When we test a class that interacts with another class, and that other class returns something, we mock that on the class we are testing
  - Stubs can just be an empty function that we just call for 'the sake of it'