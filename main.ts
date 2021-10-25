basic.forever(function () {
    if (input.soundLevel() > 100) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
