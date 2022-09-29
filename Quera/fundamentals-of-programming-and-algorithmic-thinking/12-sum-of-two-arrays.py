# https://quera.org/college/2572/chapter/7136/lesson/33730

length = int(input())
array1 = [int(x) for x in input().split()]
array2 = [int(x) for x in input().split()]

for i in range(length):
    print(array1[i] + array2[i], end=" ")
