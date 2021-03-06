require "fizz_buzz"

describe FizzBuzz do
  it "outputs fizz buzz" do
    fizz_buzz = FizzBuzz.new
    expect(fizz_buzz.output).to eq "output here"
  end

  it "outputs fizz for numbers divisible by 3" do
    fizz_buzz = FizzBuzz.new
    expect(fizz_buzz.number(3)).to eq "fizz"
    expect(fizz_buzz.number(9)).to eq "fizz"
    expect(fizz_buzz.number(12)).to eq "fizz"
  end

  it "outputs buzz for numbers divisible by 5" do
    fizz_buzz = FizzBuzz.new
    expect(fizz_buzz.number(20)).to eq "buzz"
    expect(fizz_buzz.number(10)).to eq "buzz"
    expect(fizz_buzz.number(25)).to eq "buzz"
  end

  it "outputs number not 3 or 5 divisibile" do
    fizz_buzz = FizzBuzz.new
    expect(fizz_buzz.number(2)).to eq 2
  end

  it "fizz buzz for div by 3 && 5" do
    fizz_buzz = FizzBuzz.new
    expect(fizz_buzz.number(15)).to eq "fizzbuzz"
  end
end
