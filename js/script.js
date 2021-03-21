const initialAdverts = [{
    cost: 1000,
    id: 3,
    title: "Администратор службы приема и размещения в отель",
    address: "Москва, ул Строителей 7"
}, {
    cost: 125000,
    id: 6,
    title: "Куплю ваше авто",
    address: "Москва, ул Ленина 34"
}, {
    cost: 73090,
    id: 9,
    title: "Продам часы Montana ",
    address: "Рязань, ул Октября 1"
}, {
    cost: 10800,
    id: 12,
    title: "Ремонт холодильного оборудования",
    address: "Москва, Большая Татарская ул., 36"
}, {
    cost: 1000,
    id: 14,
    title: "Sunseeker 30M 2009",
    address: "Москва, Ленинградское ш., 39с7"
}, {
    cost: 1000,
    id: 16,
    title: "Мотоцикл Avantis A2 Lux (172FMM, возд.охл.) птс",
    address: "Москва, Дорожная ул., 3к6"
}, {
    cost: 155000,
    id: 23,
    title: "Участок 12 сот. (СНТ, ДНП)",
    address: "Московская область, г.о. Серпухов, д. Тульчино"
}, {
    cost: 510600,
    id: 45,
    title: "Электросамокат Ultron T11 3200W",
    address: "Москва, ул. Поликарпова, 27"
}, {
    cost: 810700,
    id: 54,
    title: "Продается торговое помещениея",
    address: "Москва, поселение Сосенское, Скандинавский б-р, 23к2"
},

];

let elementId = document.getElementById("my_adverts");
let params = {elementId:elementId, initialAdverts};
let advertList = new AdvertList(params);
advertList.initAdvert();

//console.log(elementId);
//console.log(advertList);
//console.log('test');
//console.log('Проверка GIT');

