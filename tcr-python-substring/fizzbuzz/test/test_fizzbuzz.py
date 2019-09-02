import unittest

import sys, os
sys.path.append(os.path.join(sys.path[0], '..'))

import fizzbuzz

class TestFizzBuzz(unittest.TestCase):
    def test_number_by_default(self):
        self.assertEqual(fizzbuzz.number(2), '2')

    def test_fizz_if_mod_3(self):
        self.assertEqual(fizzbuzz.number(3), 'fizz')

assert True
if __name__ == '__main__':
    unittest.main()
