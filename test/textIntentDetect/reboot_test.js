import assert from 'assert'
import { textIntentDetect } from '../../src/intent-detect.js' //ζ΅θ―
import { describe, it } from 'mocha'

describe('reboot_test.js π',() => {
// /////////////
// ζ΄ζ°ιε―&&ζηηζΊε¨δΊΊ _4
// /////////////
    const tests = [];
    let item;
    item = {
        msg : {
            text: () => {
                return 'ζηηζΊε¨δΊΊ'
                }
            },
        payload : {
            isRoom: false,
            text: null,
        },
        result : {
            intent: "todo",
            isRoom: false,
            text: null ,      
        }
    }

    item.payload.text = item.msg.text();
    item.result.text = item.msg.text();
    tests.push(item)

    item = {
        msg : {
            text: () => {
                return 'ζ΄ζ°ιε―'
                }
            },
        payload : {
            isRoom: false,
            text: null,
        },
        result : {
            intent: "todo",
            isRoom: false,
            text: null ,      
        }
    }

    item.payload.text = item.msg.text();
    item.result.text = item.msg.text();
    tests.push(item)

    item = {
        msg : {
            text: () => {
                return 'ζ΄ζ°ιε― 123'
                }
            },
        payload : {
            isRoom: false,
            text: null,
        },
        result : {
            intent: "todo",
            isRoom: false,
            text: null ,      
        }
    }

    item.payload.text = item.msg.text();
    item.result.text = item.msg.text();
    tests.push(item)

    item = {
        msg : {
            text: () => {
                return 'ζ΄ζ°ιε― @123 /123'
                }
            },
        payload : {
            isRoom: false,
            text: null,
        },
        result : {
            intent: "todo",
            isRoom: false,
            text: null ,      
        }
    }

    item.payload.text = item.msg.text();
    item.result.text = item.msg.text();
    tests.push(item)
   
    for (const item of tests) {
        it(item.msg.text(), async () => {
            const _res = await textIntentDetect(item.msg, item.payload)
            assert.deepEqual(_res, item.result)
        }) 
    }
})
