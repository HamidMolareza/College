# https://quera.org/college/2572/chapter/7088/lesson/33722

from typing import List


def get_inputs(num_of_lines: int) -> List[str]:
    result = []
    for i in range(num_of_lines):
        result.append(input())
    return result


def is_even(number: int) -> bool:
    return number % 2 == 0


num_of_inputs = 3
a, b, c = map(float, get_inputs(num_of_inputs))
if is_even(a) or (is_even(b) and is_even(c)):
    print("good")
else:
    print("bad")
