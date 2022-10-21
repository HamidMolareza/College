# https://quera.org/college/2572/chapter/7178/lesson/104222/?comments_page=1&comments_filter=ALL

def fibonacci(n: int) -> int:
    if n <= 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)


result = fibonacci(int(input()))
print(result)
