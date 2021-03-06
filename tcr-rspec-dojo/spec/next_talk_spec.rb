require "next_talk"
require "timecop"

describe NextTalk do
  it "0 seconds left if it is the time of the next talk" do
    next_talk = NextTalk.new("Mon 2 Sep 2019 18:00:00")
    Timecop.freeze(Time.local(2019, 9, 2, 18, 0, 0)) do
      expect(next_talk.seconds_left).to eq 0
    end
  end

  it "3600 seconds left an hour before" do
    next_talk = NextTalk.new("Mon 2 Sep 2019 18:00:00")
    Timecop.freeze(Time.local(2019, 9, 2, 17, 0, 0)) do
      expect(next_talk.seconds_left).to eq 3600
    end
  end

  it "rounds to seconds" do
    next_talk = NextTalk.new("Mon 2 Sep 2019 18:00:00.123")
    Timecop.freeze(Time.local(2019, 9, 2, 17, 0, 0)) do
      expect(next_talk.seconds_left).to eq 3600
    end
  end

  it "rounds to seconds" do
    next_talk = NextTalk.new("Mon 2 Sep 2019 18:00:00.823")
    Timecop.freeze(Time.local(2019, 9, 2, 17, 0, 0)) do
      expect(next_talk.seconds_left).to eq 3601
    end
  end
end
