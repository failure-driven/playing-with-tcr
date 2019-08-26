require "fizz_buzz"

describe FizzBuzz do
  subject(:fizz_buzz) { FizzBuzz.new }

  it 'returns "fizz" for 3' do
    expect(fizz_buzz.number(3)).to eq "fizz"
  end

  it 'returns "buzz" for 5' do
    expect(fizz_buzz.number(5)).to eq "buzz"
  end

  it "returns the number if NOT divisible by 3 or 5" do
    expect(fizz_buzz.number(1)).to eq 1
    expect(fizz_buzz.number(2)).to eq 2
    expect(fizz_buzz.number(4)).to eq 4
  end
end
