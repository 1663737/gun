light2 = 0

def on_forever():
    global light2
    pins.digital_write_pin(DigitalPin.P8, 1)
    pins.digital_write_pin(DigitalPin.P9, 0)
    light2 = pins.digital_read_pin(DigitalPin.P1)
    basic.show_number(light2)
basic.forever(on_forever)
