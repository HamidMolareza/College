# https://quera.org/college/2572/chapter/7178/lesson/34095/?comments_page=1&comments_filter=ALL&submissions_page=1

def func(number: int) -> int:
    if number == 0:
        return 5
    if number % 2 == 0:
        return func(number - 1) - 21
    else:
        return func(number - 1) ** 2


n = int(input())
result = func(n)
print(result)
