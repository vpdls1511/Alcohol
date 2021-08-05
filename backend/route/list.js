const router = require('express').Router();
const fs = require('fs')

//아이템 가져오기
router.get('/items', (req, res) => {
    fs.readFile('items/alcohol.json', 'utf-8', (err, data) => {
        if (err) console.log(err);
        console.log(JSON.parse(data));
        res.end();
    })
})

//아이템 업로드하기
router.post('/items', ((req, res) => {
    const description = JSON.parse(fs.readFileSync('items/alcohol.json', 'utf-8'))
    const pushData = {
        "cate": req.body.cate,
        "title": req.body.title,
        "img": "img/" + req.body.title+'.png',
        "alcohol": req.body.alcohol,
        "info": req.body.info
    }
    let state = true

    for (let i in pushData) if (!pushData[i]) state = false

    if (state) {
        description.push(pushData)
        fs.writeFile('items/alcohol.json', JSON.stringify(description), (err) => {
            if (err) {
                console.log(err)
                res.status(500).send('Internal Server Error')
            } else {
                res.send('good')
            }
        })
    } else {
        res.status(400).send('Bad Request')
    }

}))
module.exports = router
