def on_forever():
    global x
    global y
    global world
    global worldW

    basic.clear_screen()
    t = 0
    if(world[y + 1][x] == 0):
        y += 1
    if(x < 2):
        t = 2 - x
    elif(x > worldW - 3):
        t = worldW - 3 - x
    led.plot_brightness(2 - t, y, 255)
    for wx in range(5):
        for wy in range(5):
            if(world[wy][wx + x - 2 + t] == 1):
                led.plot_brightness(wx, wy, 100)
    basic.pause(250)
basic.forever(on_forever)

def on_button_pressed_a():
    global x
    global world
    if(x > 0 and world[y][x - 1] == 0):
        x -= 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global x
    global worldW
    global world
    if(x < worldW - 1 and world[y][x + 1] == 0):
        x += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_ab():
    global y
    y = -1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

world = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
worldW = len(world[0])
x = 2
y = 2