const axios = require('axios');

const result = () => {
    axios.get('https://api.upbit.com/v1/ticker?markets=KRW-BTC').then((res) => {
        const target = document.querySelector('#btc-value');
        const div = document.createElement('div');
        div.setAttribute('class', 'card-body');
        div.innerText =
            res.data[0].trade_price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원';
        target.appendChild(div);
    });
};
result();
setInterval(() => result(), 60000);
