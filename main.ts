function act () {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(500)
    }
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        test()
    } else if (receivedNumber == 1) {
        act()
    }
})
input.onButtonPressed(Button.A, function () {
    act()
})
function test () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
    basic.clearScreen()
}
radio.setGroup(1)
