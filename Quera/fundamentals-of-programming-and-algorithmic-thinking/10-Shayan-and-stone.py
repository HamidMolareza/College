# https://quera.org/college/2572/chapter/7149/lesson/25092

from typing import List


def get_inputs(num_of_lines: int) -> List[str]:
    result = []
    for i in range(num_of_lines):
        result.append(input())
    return result


def is_prime(number: int) -> bool:
    if number < 2:
        return False

    for i in range(2, number // 2 + 1):
        if number % i == 0:
            return False
    return True


def get_num_of_prime_numbers(number: int) -> int:
    count = 0
    for num in range(2, number):
        if is_prime(num):
            count += 1
    return count


def get_num_of_prime_divisors(number: int) -> int:
    count = 0
    for i in range(2, number):
        if number % i == 0 and is_prime(i):
            count += 1
    return count


def calculate_price(number: int) -> int:
    if is_prime(number):
        return get_num_of_prime_numbers(number)
    else:
        return get_num_of_prime_divisors(number)


num_of_inputs = int(input())
weights = list(map(int, get_inputs(num_of_inputs)))

price = 0
for weight in weights:
    price += calculate_price(weight)

discount = calculate_price(price)
price -= discount

print(price)
