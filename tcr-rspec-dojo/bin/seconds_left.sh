#!/usr/bin/env ruby

$LOAD_PATH << File.join(File.expand_path(File.dirname(__FILE__)), '..', 'lib')

require 'next_talk'

puts NextTalk.new(ARGV.join(' ')).seconds_left

