def get_input(message: str):
    print(message, end='')
    return input()


name = get_input("name: ")
family = get_input("family: ")
age = int(get_input("age: "))
height = float(get_input("height: "))

# name, family, age, height = map(str, input().split())

print("%s %s is %d years old. His height is %0.2f cm." %
      (name, family, age, height))
