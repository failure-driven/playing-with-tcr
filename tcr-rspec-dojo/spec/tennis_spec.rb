require "tennis"

describe Tennis do
  subject(:tennis) { Tennis.new }

  [
    { score: "love all", points: [] },
    { score: "15 love", points: [:s] },
    { score: "15 all", points: [:s, :r] },
    { score: "30 all", points: [Array.new(2, :s), Array.new(2, :r)].flatten },
    { score: "deuce", points: [Array.new(3, :s), Array.new(3, :r)].flatten },
    { score: "deuce", points: [Array.new(4, :s), Array.new(4, :r)].flatten },
  ].each do |args|
    it "returns score #{args[:score].inspect} for points #{args[:points]}" do
      tennis.point(*args[:points])
      expect(tennis.score).to eq args[:score]
    end
  end
end
