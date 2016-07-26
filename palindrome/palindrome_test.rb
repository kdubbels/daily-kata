require_relative "palindrome"
require "test/unit"
 
class TestSimpleNumber < Test::Unit::TestCase
 
  def test_simple
    assert_equal("Able Was I Ere I Saw Elba".isPalindrome, true )
  end
 
end