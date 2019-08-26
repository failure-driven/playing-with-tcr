class FizzBuzz
  def number(number)
    divisible_by(number, 3) ? "fizz" : divisible_by(number, 5) ? "buzz" : number
  end

  private

  def divisible_by(number, dividend)
    number % dividend == 0
  end
end
