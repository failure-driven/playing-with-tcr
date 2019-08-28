class FizzBuzz
  def output
    "output here"
  end

  def number(number_to_fizz_buzz)
    return "fizz" if div_by(number_to_fizz_buzz, 3)
    return "buzz" if number_to_fizz_buzz % 5 == 0

    number_to_fizz_buzz
  end

  private

  def div_by(num, div)
    num % div == 0
  end
end
