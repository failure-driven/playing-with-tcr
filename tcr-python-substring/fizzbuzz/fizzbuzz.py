def number(number):
  output = ""

  if number % 3 == 0:
    output += "fizz"

  if number % 5 == 0:
    output += "buzz"

  return output or str(number)

def output():
  return " ".join(map(number, list(range(1,100))))
