import unittest

import sys, os
sys.path.append(os.path.join(sys.path[0], '..'))

import fizzbuzz

class TestFizzBuzz(unittest.TestCase):
    def test_one(self):
        assert True

if __name__ == '__main__':
    unittest.main()
