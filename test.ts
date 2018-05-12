let item = 0
OLED12864_I2C.init(60)
item = 0
basic.forever(() => {
    OLED12864_I2C.showNumber(
    0,
    0,
    item,
    1
    )
    item += 1
    basic.pause(1000)
})
