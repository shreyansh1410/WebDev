const exp  = require('express');

function sum(n){
    let ans = 0;
    for(let i=1;i<=n;i++){
        ans+=i;
    }
    return ans;
}

const app = exp();
app.get("/", (req, res) => {
    const n = req.query.n;
    const ans = sum(n);
    // res.send(ans.toString());
    res.send("hi your answer is: " + ans);
})

app.listen(3000);