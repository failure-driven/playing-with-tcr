require "tennis"

describe Tennis do
  subject(:tennis) { Tennis.new }

  [
    { score: "love all", points: [] },
    { score: "15 love", points: [:s] },
  ].each do |args|
    it "returns score #{args[:score].inspect} for points #{args[:points]}" do
      tennis.point(*args[:points])
      expect(tennis.score).to eq args[:score]
    end
  end

  it 'returns a score of "15 all" if server and reciever scores a point each' do
    tennis.point(:s, :r)
    expect(tennis.score).to eq "15 all"
  end

  it 'returns a score of "30 all" if server and reciever scores 2 points each' do
    tennis.point(*[Array.new(2, :s), Array.new(2, :r)].flatten)
    expect(tennis.score).to eq "30 all"
  end

  it 'returns a score of "deucde" if server and reciever scores 3 points each' do
    tennis.point(*[Array.new(3, :s), Array.new(3, :r)].flatten)
    expect(tennis.score).to eq "deuce"
  end

  it 'returns a score of "deucde" if server and reciever scores more than 3 points each' do
    tennis.point(*[Array.new(4, :s), Array.new(4, :r)].flatten)
    expect(tennis.score).to eq "deuce"
  end
end
