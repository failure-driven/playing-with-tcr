import unittest

import sys, os
sys.path.append(os.path.join(sys.path[0], '..'))

import fizzbuzz

class TestFizzBuzz(unittest.TestCase):

    def test_returns_fizz_div_by_3(self):
        self.assertEqual(fizzbuzz.number(3), 'fizz')

    def test_returns_buzz_div_by_5(self):
        self.assertEqual(fizzbuzz.number(5), 'buzz')

    def test_returns_fizzbuzz_div_by_3_and_5(self):
        self.assertEqual(fizzbuzz.number(15), 'fizzbuzz')

    def test_returns_string_of_number_otherwise(self):
        self.assertEqual(fizzbuzz.number(2), '2')

assert True

if __name__ == '__main__':
    unittest.main()
