require "fizz_buzz"

describe FizzBuzz do
  subject(:fizz_buzz) { FizzBuzz.new }

  it 'returns "fizz" for 3' do
    expect(fizz_buzz.number(3)).to eq "fizz"
  end

  it 'returns "buzz" for 5' do
    expect(fizz_buzz.number(5)).to eq "buzz"
  end
end
