# https://quera.org/college/2572/chapter/7095/lesson/33952/

def solution_1(number_str: str) -> str:
    number_str = number_str.rstrip("0")
    number_reversed = number_str[::-1]
    return number_reversed


def solution_2(number_str: str) -> str:
    number = int(number_str)
    result = 0
    while number > 0:
        remain = number % 10
        number //= 10
        result = result * 10 + remain
    return result


n = input()
print(solution_1(n))
print(solution_2(n))
