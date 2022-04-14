export default {
    methods: {
        debounce (timeout, functionCallBack) {
            if (timeout) {
                clearTimeout(timeout)
            }
            return setTimeout(() => functionCallBack(), 1200)
        },
    }
}