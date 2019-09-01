def fb_str(number):
  if number % 3 == 0 and number % 5 == 0:
    return 'fizzbuzz'
  if number % 3 == 0:
    return 'fizz'
  if number % 5 == 0:
    return 'buzz'
  return str(number)

def output():
  return " ".join(map(fb_str, list(range(1,100))))
