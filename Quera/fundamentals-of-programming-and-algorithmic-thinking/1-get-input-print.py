def get_input(message: str):
    while True:
        # print(message, end='')
        user_input = input(message)
        if user_input.strip():
            return user_input
        else:
            print("Input can not be empty. Please try again.")


name = get_input("name: ")
family = get_input("family: ")
age = int(get_input("age: "))
height = float(get_input("height: "))

# name, family, age, height = map(str, input().split())

print("%s %s is %d years old. His height is %0.2f cm." %
      (name, family, age, height))
