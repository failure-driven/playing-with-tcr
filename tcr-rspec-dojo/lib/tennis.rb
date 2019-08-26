class Tennis
  SCORES = ["love", 15]

  def initialize
    @points = { s: 0, r: 0 }
  end

  def score
    score = @points.values.map { |point| SCORES[point] }.join(" ")
    score == "love love" ? "love all" : score
  end

  def point(player)
    @points[player] += 1
  end
end
