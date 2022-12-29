_ = input()
numbers = input().split()
num_of_queries = int(input())

for _ in range(num_of_queries):
    begin, end = map(int, input().split())
    numbers = numbers[0: begin - 1] + numbers[end - 1: begin - 2:-1] + numbers[end:]
    print(" ".join(numbers))
