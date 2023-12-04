def on_received_number(receivedNumber):
    pass
radio.on_received_number(on_received_number)

def on_gesture_logo_up():
    pass
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_shake():
    pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def two():
    pass
def rotate():
    pass
strip = neopixel.create(DigitalPin.P16, 256, NeoPixelMode.RGB)
left_b_strip = neopixel.create(DigitalPin.P14, 64, NeoPixelMode.RGB)
left_t_strip = neopixel.create(DigitalPin.P13, 64, NeoPixelMode.RGB)

def on_forever():
    left_b_strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    left_t_strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    strip.set_pixel_color(64, neopixel.colors(NeoPixelColors.BLUE))
basic.forever(on_forever)

# LED를 연결한 핀 번호 (P0부터 P4까지 가능)

def on_forever2():
    pass
basic.forever(on_forever2)

# LED를 연결한 핀 번호 (0부터 4까지 가능)

def on_forever3():
    pass
basic.forever(on_forever3)
