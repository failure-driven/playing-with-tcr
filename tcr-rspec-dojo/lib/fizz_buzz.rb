class FizzBuzz
  def number(number)
    accumulator = []
    return "fizzbuzz" if divisible_by(number, 3) and divisible_by(number, 5)
    return "fizz" if divisible_by(number, 3)
    return "buzz" if divisible_by(number, 5)

    accumulator == [] ? number : accumulator.join("")
  end

  private

  def divisible_by(number, dividend)
    number % dividend == 0
  end
end
