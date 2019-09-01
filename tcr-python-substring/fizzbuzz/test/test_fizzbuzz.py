import unittest

import sys, os
sys.path.append(os.path.join(sys.path[0], '..'))

import fizzbuzz

class TestFizzBuzz(unittest.TestCase):
    def test_fizz_if_mod_3(self):
        self.assertEqual(fizzbuzz.number(3), 'fizz')

    def test_buzz_if_mod_5(self):
        self.assertEqual(fizzbuzz.number(5), 'buzz')


if __name__ == '__main__':
    unittest.main()
