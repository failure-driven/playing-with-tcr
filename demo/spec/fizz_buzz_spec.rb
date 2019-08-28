require 'fizz_buzz'

describe FizzBuzz do
  it 'outputs fizz buzz' do
    fizz_buzz = FizzBuzz.new
    expect(fizz_buzz.output).to eq "output here"
  end
end
