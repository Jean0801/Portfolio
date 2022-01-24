var SY_goodgoodEat_Products = [
    {
        name: '奶香蔓越莓旅行蛋糕',
        img: './img/500.jpeg',
        content: '美國蔓越莓 北海道煉乳  杏仁粉 泡打粉 法國無鹽發酵奶油 法芙娜草莓巧克力',
        price: '580',
        tag1: 'all',
        tag4: 'cake'
    },
    {
        name: '抹茶旅行蛋糕',
        img: './img/501.jpeg',
        content: '日本一保堂抹茶粉 法國無鹽發酵奶油 法芙娜33%白巧克力 抹茶琥珀糖',
        price: '600',
        tag1: 'all',
        tag4: 'cake'
    },
    {
        name: '香橙乳酪旅行蛋糕',
        img: './img/502.jpeg',
        content: '糖漬橙片 手工熬煮蜜漬香丁(晚崙西亞橙) 北海道奶油乳酪 法國無鹽發酵奶油 柑曼怡橙酒',
        price: '500',
        tag1: 'all',
        tag4: 'cake'
    },
    {
        name: '紫莓旅行蛋糕',
        img: './img/504.jpeg',
        content: '黑醋栗果泥 有機野生藍莓乾 北海道鮮奶油 法國無鹽發酵奶油 法芙娜33%白巧克力 西西里開心果',
        price: '520',
        tag1: 'all',
        tag4: 'cake'
    },
    {
        name: '天然低糖馬卡龍',
        img: './img/dessert01.jpeg',
        content: '一盒6入 6種口味 天然蔬果粉調色 低糖製作',
        price: '540',
        tag1: 'all',
        tag3: 'dessert'
    },
    {
        name: '法芙娜巧克力餅乾',
        img: './img/dessert02.jpeg',
        content: '每盒約4片 每片約5cm 巧克力系列手工餅乾 罐裝 重量約90克',
        price: '200',
        tag1: 'all',
        tag3: 'dessert'
    },
    {
        name: '鑽石餅乾',
        img: './img/601.jpeg',
        content: '每盒約4片 每片約5cm 巧克力系列手工餅乾 罐裝 重量約90克',
        price: '200',
        tag1: 'all',
        tag3: 'dessert'
    },
    {
        name: '鹽之花布列塔尼',
        img: './img/dessert03.jpeg',
        content: '一盒4入 每片約5-6cm 厚1.2cm 盒裝',
        price: '200',
        tag1: 'all',
        tag3: 'dessert'
    },
    {
        name: '海鹽杏仁佛羅倫汀',
        img: './img/dessert04.jpeg',
        content: '一盒約4片 每片5X5cm 盒裝',
        price: '200',
        tag1: 'all',
        tag3: 'dessert'
    },
    {
        name: '鐵盒手工餅乾',
        img: './img/cookie01.jpeg',
        content: '純手工製作 無添加防腐劑 低糖無負擔 鐵盒尺寸18x12x5 鐵盒款式隨機出貨',
        price: '599',
        tag1: 'all',
        tag2: 'cookie'
    },
    {
        name: 'Cake太陽ノ塔',
        img: './img/header03.jpg',
        content: 'クッキー10種アソート（10種綜合餅乾）',
        price: '890',
        tag1: 'all',
        tag2: 'cookie'
    }
]

let contentView = document.querySelector('.content')
function innerAll() {
    SY_goodgoodEat_Products.forEach(product => {
        contentView.innerHTML +=
            `<div class="card text-center Regular shadow" style="width: 18rem;">
            <img src=${product.img} class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="font-weight-bolder">${product.name} </h4>
                    <h6 class="text-muted">${product.content}</p>
                    <span class="text-danger font-weight-bolder mr-5">售價：${product.price} </span>
                    <a href="#" class="btn btn-outline-info">購買</a>
                </div>
            </div>`
    });
}

innerAll()

let btnElement = document.querySelectorAll('button')

btnElement.forEach(btn => {
    let type = btn.getAttribute('data-type');

    btn.addEventListener('click', function () {
        contentView.innerHTML = ''
        if (type === 'all') {
            innerAll();
        } else {
            SY_goodgoodEat_Products.forEach(product => {
                if (type === product.tag1 || type === product.tag2 || type === product.tag3 || type === product.tag4) {
                    contentView.innerHTML +=
                    `<div class="card text-center Regular shadow" style="width: 18rem;">
                    <img src=${product.img} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h4 class="font-weight-bolder">${product['name']}</h4>
                            <h6 class="text-muted">${product.content}</p>
                            <span class="text-danger font-weight-bolder mr-5">售價：${product.price} </span>
                            <a href="#" class="btn btn-outline-info">購買</a>
                        </div>
                    </div>`
                };
            });
        }
        clear()
        btn.classList.add('active')

    })
});

function clear() {
    btnElement.forEach(btn => {
        btn.classList.remove('active')
    });
}