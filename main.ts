let light2 = 0
let _switch = 0
let status = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P9, 0)
    light2 = pins.digitalReadPin(DigitalPin.P1)
    _switch = pins.digitalReadPin(DigitalPin.P0)
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showNumber(1)
        if (status == 0) {
            status = 1
            music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        while (pins.digitalReadPin(DigitalPin.P1) == 1) {
            basic.showNumber(2)
            if (status == 1) {
                status = 2
                music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            }
        }
    } else {
        basic.showNumber(0)
        status = 0
    }
})
