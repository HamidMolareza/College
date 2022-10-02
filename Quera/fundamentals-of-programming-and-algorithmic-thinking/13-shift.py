# https://quera.org/college/2572/chapter/7136/lesson/33960/

num_of_numbers, shift = map(int, input().split())
numbers = [int(x) for x in input().split()]

for i in range(shift * -1, 0):
    print(numbers[i], end=" ")

for i in range(num_of_numbers - shift):
    print(numbers[i], end=" ")
