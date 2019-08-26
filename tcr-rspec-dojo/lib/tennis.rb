class Tennis
  def score
    @point == 1 ? "15 love" : "love all"
  end

  def point(player)
    @point = 1
  end
end
