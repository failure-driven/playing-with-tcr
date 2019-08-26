class Tennis
  SCORES = ["love", 15]

  def initialize
    @points = { s: 0, r: 0 }
  end

  def score
    score = @points.values.map { |point| SCORES[point] }
    score[1] = "all" if same_score?
    score.join(" ")
  end

  def point(player)
    @points[player] += 1
  end

  private

  def same_score?
    @points.values.uniq.length == 1
  end
end
