#!/usr/bin/env ruby

$LOAD_PATH << File.join(File.expand_path(File.dirname(__FILE__)), '..', 'lib')

require 'fizz_buzz'

fizz_buzz = FizzBuzz.new
puts fizz_buzz.output

