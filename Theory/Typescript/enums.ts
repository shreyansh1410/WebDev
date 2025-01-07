enum Direction {
  Up = 12,
  Down,
  Left,
  Right = "RIGHT",
}
function doSomething(keyPressed: number | string) {
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

