require "time"

class NextTalk
  def initialize(talk_start_time)
    @talk_start_time = Time.parse(talk_start_time)
  end

  def seconds_left
    (@talk_start_time - Time.now).round
  end
end
