const axios = require('axios');

const result = () => {
    axios.get('https://api.upbit.com/v1/ticker?markets=KRW-BTC').then((res) => {
        const btc_value = document.querySelector('#btc_value');
        const trade_volume = document.querySelector('#trade_volume');
        const acc_trade_volume = document.querySelector('#acc_trade_volume');
        const signed_change_rate = document.querySelector(
            '#signed_change_rate'
        );
        console.log(res.data[0].trade_volume);
        btc_value.innerText = '';
        btc_value.innerText =
            res.data[0].trade_price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원';
        trade_volume.innerText = '';
        trade_volume.innerText = res.data[0].trade_volume + ' BTC';
        acc_trade_volume.innerText = '';
        acc_trade_volume.innerText = res.data[0].acc_trade_volume + ' BTC';
        signed_change_rate.innerText = '';
        signed_change_rate.innerText =
            res.data[0].signed_change_rate * 100 + ' %';
    });
};
result();
setInterval(() => result(), 60000);
