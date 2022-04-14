export default {
    methods: {
        formatPrice (num) {
            if (num)
                return 'R$ '+ num.toFixed(2).toString().replace('.', ',')
        },
    }
}