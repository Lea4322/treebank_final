radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
})
input.onGesture(Gesture.LogoUp, function () {
    oppo = 0
})
input.onGesture(Gesture.Shake, function () {
    oppo = 1
})
function two () {
    strip.setMatrixColor(3, 4, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(3, 3, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(3, 2, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(1, 2, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(1, 1, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(3, 0, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.White))
}
function rotate () {
    for (let index = 0; index <= 4; index++) {
    	
    }
}
let oppo = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 256, NeoPixelMode.RGB)
let left_b_strip = neopixel.create(DigitalPin.P14, 64, NeoPixelMode.RGB)
let left_t_strip = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
left_b_strip.showRainbow(1, 360)
oppo = 0
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P3) > 1000) {
        left_b_strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        left_b_strip.show()
        basic.pause(1000)
        left_b_strip.showColor(neopixel.colors(NeoPixelColors.Black))
        left_b_strip.show()
    } else {
    	
    }
    if (oppo == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.show()
    } else {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        strip.shift(5)
        strip.show()
    }
})
