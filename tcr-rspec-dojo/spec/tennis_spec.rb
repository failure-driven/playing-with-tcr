require "tennis"

describe Tennis do
  subject(:tennis) { Tennis.new }

  it 'starts a game with "love all"' do
    expect(tennis.score).to eq "love all"
  end

  it 'returns a score of "15 love" if server scores a point' do
    tennis.point(:s)
    expect(tennis.score).to eq "15 love"
  end

  it 'returns a score of "15 all" if server and reciever scores a point each' do
    tennis.point(:s, :r)
    expect(tennis.score).to eq "15 all"
  end
end
