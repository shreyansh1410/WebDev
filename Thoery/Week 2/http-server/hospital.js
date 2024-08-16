const express = require("express");
const app = express();

app.use(express.json());

var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

function getKidneyStatus() {
  let len = users[0].kidneys.length;
  let h = 0;
  for (let i = 0; i < len; i++) {
    if (users[0].kidneys[i].healthy) h++;
  }
  return h;
}

//get no of kidneys
app.get("/", (req, res) => {
  let n = users[0].kidneys.length;
  //   res.send(
  //     `You have ${n} kidneys and ${getKidneyStatus()} of them are healthy and ${
  //       n - getKidneyStatus()
  //     } of them are unhealthy`
  //   );
  const healthy = getKidneyStatus();
  const unhealthy = n - healthy;
  res.json({
    n, healthy, unhealthy
  });
});

//install kidneys
app.post("/", (req, res) => { 
    const isHealthy  = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
 });

//make all unhealthy kidneys to be healthy
app.put("/", (req, res) => {
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    } 
    res.json({})    //sending data is important
});

//delete all unhealthy kidneys
app.delete("/", (req, res) => {});

app.listen(3000);

console.log(users[0]);
