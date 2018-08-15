@Failures
Feature: Fail tests on purpose

  In order to determine the right way to fail a test
  create some tests that fail on purpose

  @pass @repeat
  Scenario: Adding an item to a list with other items

    Given that James has a todo list containing Buy some cookies, Walk the dog
    When he adds Buy some cereal to his list
    Then his todo list should contain Buy some cookies, Walk the dog, Buy some cereal

  @repeat
  Scenario: Adding an item to a list with other items

    Given that James has a todo list containing Buy some cookies, Walk the dog
    When he adds Buy some cereal to his list
    Then his todo list should contain Buy some cookies, Walk the dog, Buy some cereal

  @fail
  Scenario: he repeats the test

    Given that James has a todo list containing Buy some cookies, Walk the dog
    When he rejects a promise
    And he adds Buy some cereal to his list
    Then his todo list should contain Buy some cookies, Walk

  @falseIs
  Scenario: he expects false to equal true

    Given that James is on stage
    When he expects false is true
    And he adds Buy some cereal to his list
    Then his todo list should contain Buy some cookies, Walk


  @falseEquals
  Scenario: he expects false to equal true

    Given that James is on stage
    When he expects false to equal true
    And he adds Buy some cereal to his list
    Then his todo list should contain Buy some cookies, Walk


  @falseEventuallyEquals
  Scenario: he expects false to equal true

    Given that James is on stage
    When he expects false to eventually equal true
    And he adds Buy some cereal to his list
    Then his todo list should contain Buy some cookies, Walk

  @throw
  Scenario: he throws fail

    Given that James is on stage
    When he throws fail
    And he adds Buy some cereal to his list
    Then his todo list should contain Buy some cookies, Walk

  @passBoolean
  Scenario: he uses passBoolean

    Given that James is on stage
    When he expects false to equal true
    And he adds Buy some cereal to his list
    Then his todo list should contain Buy some cookies, Walk

  @AssertionError
  Scenario: he uses AssertionError

    Given that James is on stage
    When he returns an AssertionError
    And he adds Buy some cereal to his list
    Then his todo list should contain Buy some cookies, Walk



  @rejectThis
  Scenario: he uses rejects.this

    Given that James is on stage
    When he rejects this
    And he adds Buy some cereal to his list
    Then his todo list should contain Buy some cookies, Walk

