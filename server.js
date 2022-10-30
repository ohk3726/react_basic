const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/api/customers',(req,res) => {
    res.send([
        {
            'id':1,
            'image':'https://picsum.photos/id/237/64/64',
            'name':'천지호',
            'birthday':'940117',
            'gender':'남자',
            'job':'추노꾼'
        },
        {
            'id':2,
            'image':'https://picsum.photos/id/236/64/64',
            'name':'홍길동',
            'birthday':'940117',
            'gender':'남자',
            'job':'활빈당원'
        },
        {
            'id':3,
            'image':'https://picsum.photos/id/235/64/64',
            'name':'허준',
            'birthday':'020202',
            'gender':'남자',
            'job':'의사'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}` ));