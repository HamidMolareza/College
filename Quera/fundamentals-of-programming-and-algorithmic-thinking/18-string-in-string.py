text = input()
search = input()

for i in range(len(text) - len(search) + 1):
    if search[0] != text[i]:
        continue
    is_equal = True
    for j in range(len(search)):
        if search[j] != text[i + j]:
            is_equal = False
            break
    if is_equal:
        print(i + 1, end=" ")