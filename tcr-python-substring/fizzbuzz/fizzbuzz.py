def number(number):
  output = []
  if number % 3 == 0:
    output.append('fizz')
  if number % 5 == 0:
    output.append('buzz')
  return str(number) if output == [] else "".join(output)

def output():
  return " ".join(map(number, list(range(1,100))))
