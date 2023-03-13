import once from '../lib/once.js'

const doPayment = once(() => console.log('Payment is done'))

doPayment()
doPayment()
doPayment()