class String
  def isPalindrome
    if self.length <= 1
      return true
    else
      return self[0].downcase == self[-1].downcase && self[1...-1].downcase.isPalindrome
    end
  end
end