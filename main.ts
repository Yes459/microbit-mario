basic.forever(function on_forever() {
    
    
    
    basic.clearScreen()
    led.plotBrightness(2, y, 255)
    for (let wx = 0; wx < 5; wx++) {
        for (let wy = 0; wy < 5; wy++) {
            if (world[wy][wx + x - 2] == 1) {
                led.plotBrightness(2, y, 100)
            }
            
        }
    }
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    x -= 1
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    x += 1
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    y -= 2
})
let world = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
let x = 2
let y = 2
