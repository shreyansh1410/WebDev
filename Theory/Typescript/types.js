"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user2 = exports.user1 = void 0;
exports.user1 = {
    name: "Harkirat",
    gift: "Pen",
    ip: "asdasfas", //why does it still work with OR?
};
exports.user2 = {
    name: "Harkirat",
    gift: "asvd",
    ip: "13123",
};
function func(obj) {
    console.log(`Hello${obj.name}`);
}
