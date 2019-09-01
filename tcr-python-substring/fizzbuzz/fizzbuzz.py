def number(number):
  output = []
  if number % 15 == 0:
    return 'fizzbuzz'
  if number % 3 == 0:
    output.append('fizz')
    return "".join(output)
  if number % 5 == 0:
    return 'buzz'
  return str(number)

def output():
  return " ".join(map(number, list(range(1,100))))
