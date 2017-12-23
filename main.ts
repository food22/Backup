//% weight=0 color=#228B22 icon="\uf1b9"
namespace KSB037 {
    /**
    * 左右馬達同時正轉
    */
    //% blockId="foreward" block="car foreward|speed(0~1023) %power"
    //% blockGap=1 weight=90
    //% power.min=0 power.max=1023
    export function foreward(power: number) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.analogWritePin(AnalogPin.P1, power)
        pins.analogWritePin(AnalogPin.P2, power)
    }
    /**
    * 左右馬達同時反轉
    */
    //% blockId="backward" block="小車後退|轉速(0~1023) %power"
    //% blockGap=1  weight=80
    //% power.min=0 power.max=1023
    export function backward(power: number) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P1, power)
        pins.analogWritePin(AnalogPin.P2, power)
    }
    /**
    * 左馬達正轉，右馬達反轉
    */
    //% blockId="rightward" block="小車右轉|轉速(0~1023) %power"
    //% blockGap=1  weight=70
    //% power.min=0 power.max=1023
    export function rightward(power: number) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.analogWritePin(AnalogPin.P1, power)
        pins.analogWritePin(AnalogPin.P2, power)
    }
    /**
    * 左馬達反轉，右馬達正轉
    */
    //% blockId="leftward" block="小車左轉|轉速(0~1023) %power"
    //% blockGap=20  weight=60
    //% power.min=0 power.max=1023
    export function leftward(power: number) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P1, power)
        pins.analogWritePin(AnalogPin.P2, power)
    }
    //% blockId="leftMotor_foreward" block="左馬達正轉|轉速(0~1023) %power"
    //% blockGap=1  weight=30
    //% power.min=0 power.max=1023
    export function leftMotor_foreward(power: number) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.analogWritePin(AnalogPin.P2, power)
    }
    //% blockId="leftMotor_backward" block="左馬達反轉|轉速(0~1023) %power"
    //% blockGap=1  weight=20
    //% power.min=0 power.max=1023
    export function leftMotor_backward(power: number) {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P2, power)
    }
    //% blockId="rightMotor_foreward" block="右馬達正轉|轉速(0~1023) %power"
    //% blockGap=1  weight=50
    //% power.min=0 power.max=1023
    export function rightMotor_foreward(power: number) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.analogWritePin(AnalogPin.P1, power)
    }
    //% blockId="rightMotor_backward" block="右馬達反轉|轉速(0~1023) %power"
    //% blockGap=1 weight=40
    //% power.min=0 power.max=1023
    export function rightMotor_backward(power: number) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.analogWritePin(AnalogPin.P1, power)
    }
    /**
    * 左右馬達同時停止轉動
    */
    //% blockId="stop" block="小車停車"
    //% blockGap=20 weight=75
    export function stop() {
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
    }
}
