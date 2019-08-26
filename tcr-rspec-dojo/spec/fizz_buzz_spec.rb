require "fizz_buzz"

describe FizzBuzz do
  subject(:fizz_buzz) { FizzBuzz.new }

  it 'returns "fizzbuzz" for number divisible by 3 AND 5' do
    expect(fizz_buzz.number(15)).to eq "fizzbuzz"
    expect(fizz_buzz.number(30)).to eq "fizzbuzz"
  end

  it 'returns "fizz" for number divisible by 3' do
    expect(fizz_buzz.number(3)).to eq "fizz"
    expect(fizz_buzz.number(6)).to eq "fizz"
  end

  it 'returns "buzz" for number divisible by 5' do
    expect(fizz_buzz.number(5)).to eq "buzz"
    expect(fizz_buzz.number(10)).to eq "buzz"
  end

  it "returns the number if NOT divisible by 3 or 5" do
    expect(fizz_buzz.number(1)).to eq 1
    expect(fizz_buzz.number(2)).to eq 2
    expect(fizz_buzz.number(4)).to eq 4
  end
end
