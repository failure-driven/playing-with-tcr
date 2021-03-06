class FizzBuzz
  def number(number)
    accumulator = []
    accumulator << "fizz" if divisible_by(number, 3)
    accumulator << "buzz" if divisible_by(number, 5)

    accumulator == [] ? number : accumulator.join("")
  end

  private

  def divisible_by(number, dividend)
    number % dividend == 0
  end
end
