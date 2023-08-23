const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1334589",
    key: "4aed833cb4657d97c07e",
    secret: "86332c55990b15158d61",
    cluster: "ap2",
    useTLS: true,
});
module.exports = { pusher }