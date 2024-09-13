n = 20
for i in range(n):
    if i < (n//2):
        for x in range(n-i):
            print(' ', end='')
        for x in range(i*2+1):
            print('*', end='')
    else:
        for x in range(n - i):
            print(' ', end='')
        for x in range(i*2+1 - n):
            print('*', end='')
        for x in range(n - (i*2+1 - n)):
            print(' ', end='')
        for x in range(i*2+1 - n):
            print('*', end='')
    print()