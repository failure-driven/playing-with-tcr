class Tennis
  SCORES = ["love", 15, 30]

  def initialize
    @points = { s: 0, r: 0 }
  end

  def score
    return "deuce" if deuce?

    score = @points.values.map { |point| SCORES[point] }
    score[1] = "all" if same_score?
    score.join(" ")
  end

  def point(*players)
    players.each do |player|
      @points[player] += 1
    end
  end

  private

  def deuce?
    same_score? && @points.values.min >= 3
  end

  def same_score?
    @points.values.uniq.length == 1
  end
end
