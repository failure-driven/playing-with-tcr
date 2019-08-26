class Tennis
  def initialize
    @points = { s: 0 }
  end

  def score
    @points.values[0] == 1 ? "15 love" : "love all"
  end

  def point(player)
    @points[player] += 1
  end
end
