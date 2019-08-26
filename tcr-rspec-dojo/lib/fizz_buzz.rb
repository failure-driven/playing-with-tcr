class FizzBuzz
  def number(number)
    return "fizz" if divisible_by(number, 3)
    return "buzz" if divisible_by(number, 5)

    number
  end

  private

  def divisible_by(number, dividend)
    number % dividend == 0
  end
end
