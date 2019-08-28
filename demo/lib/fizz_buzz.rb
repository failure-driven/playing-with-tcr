class FizzBuzz
  def output
    "output here"
  end

  def number(number_to_fizz_buzz)
    return "fizz" if number_to_fizz_buzz % 3 == 0
    return "buzz" if number_to_fizz_buzz % 5 == 0

    number_to_fizz_buzz
  end
end
