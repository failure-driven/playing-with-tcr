class FizzBuzz
  def output
    "output here"
  end

  def number(number_to_fizz_buzz)
    number_to_fizz_buzz % 3 == 0 ? "fizz" : "buzz"
  end
end
