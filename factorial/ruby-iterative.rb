def factorial(n)
  if n == 0
    1
  else
    (1..n).reduce(:*)
  end
end