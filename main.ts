basic.forever(function on_forever() {
    
    
    
    
    basic.clearScreen()
    let t = 0
    if (world[y + 1][x] == 0) {
        y += 1
    }
    
    if (x < 2) {
        t = 2 - x
    } else if (x > worldW - 3) {
        t = worldW - 3 - x
    }
    
    led.plotBrightness(2 - t, y, 255)
    for (let wx = 0; wx < 5; wx++) {
        for (let wy = 0; wy < 5; wy++) {
            if (world[wy][wx + x - 2 + t] == 1) {
                led.plotBrightness(wx, wy, 100)
            }
            
        }
    }
    basic.pause(250)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    
    if (x > 0 && world[y][x - 1] == 0) {
        x -= 1
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    
    
    if (x < worldW - 1 && world[y][x + 1] == 0) {
        x += 1
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    y = -1
})
let world = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
let worldW = world[0].length
let x = 2
let y = 2
