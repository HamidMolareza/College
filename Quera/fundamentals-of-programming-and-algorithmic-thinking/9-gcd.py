# https://quera.org/college/2572/chapter/7149/lesson/24348/

def is_prime(num1: int, num2: int) -> bool:
    return get_gcm(num1, num2) == 1


def get_gcm(bigger_number: int, smaller_number: int) -> int:
    if smaller_number > bigger_number:
        bigger_number, smaller_number = smaller_number, bigger_number  # swap
    while smaller_number > 0:
        remain = bigger_number % smaller_number
        bigger_number = smaller_number
        smaller_number = remain
    return bigger_number


def get_lcm(num1: int, num2: int) -> int:
    gcm = get_gcm(num1, num2)
    return num1 * num2 // gcm


n = int(input())

prime_numbers = []
for i in range(1, n):
    if is_prime(i, n):
        prime_numbers.append(i)

result = 1
for i in prime_numbers:
    result = get_lcm(result, i)

print(result)
