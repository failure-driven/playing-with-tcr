def number(number):
  if number % 5 == 0 and number % 3 == 0:
    return 'fizzbuzz'
  if number % 5 == 0:
    return 'buzz'
  if number % 3 == 0:
    return 'fizz'
  return str(number)

def output():
  return " ".join(map(number, list(range(1,100))))
