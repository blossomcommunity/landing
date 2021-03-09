module.exports = {
    async redirects() {
        return [
            {
                source: '/discord',
                destination: process.env.INVITE,
                permanent: true,
            },
        ]
    },
}