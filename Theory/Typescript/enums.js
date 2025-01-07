"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 12] = "Up";
    Direction[Direction["Down"] = 13] = "Down";
    Direction[Direction["Left"] = 14] = "Left";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    // do something.
}
console.log(Direction.Right); //outputs 0
doSomething(Direction.Right);
//common usecase in express:
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }
// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })
