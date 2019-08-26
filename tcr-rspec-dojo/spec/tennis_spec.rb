require "tennis"

describe Tennis do
  subject(:tennis) { Tennis.new }

  it 'starts a game with "love all"' do
    expect(tennis.score).to eq "love all"
  end
end
