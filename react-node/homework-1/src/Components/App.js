import React, { Component } from "react";
import Header from "./Header";
import OrderHistoryTable from "./OrderHistoryTable";
import Menu from "./Menu";
import Filter from "./Filter";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const orderHistoryList = [
  {
    id: 0,
    date: "6/22/2018",
    price: "290.00",
    address: "108 Quinn Plains",
    rating: 10
  },
  {
    id: 1,
    date: "5/15/2018",
    price: "159.00",
    address: "262 Jovan Roads",
    rating: 4
  },
  {
    id: 2,
    date: "10/1/2018",
    price: "710.00",
    address: "331 Mills Mountains",
    rating: 9
  },
  {
    id: 3,
    date: "5/12/2018",
    price: "567.00",
    address: "47330 Boyle Road",
    rating: 8
  },
  {
    id: 4,
    date: "9/22/2018",
    price: "703.00",
    address: "0700 Furman Trail",
    rating: 6
  },
  {
    id: 5,
    date: "6/14/2018",
    price: "887.00",
    address: "24880 Margaret Harbors",
    rating: 2
  },
  {
    id: 6,
    date: "7/28/2018",
    price: "48.00",
    address: "377 Muller Parkway",
    rating: 1
  },
  {
    id: 7,
    date: "12/29/2017",
    price: "375.00",
    address: "455 Judy Isle",
    rating: 7
  },
  {
    id: 8,
    date: "3/22/2018",
    price: "806.00",
    address: "67303 Garth Haven",
    rating: 8
  },
  {
    id: 9,
    date: "8/11/2018",
    price: "143.00",
    address: "28386 Crooks Ramp",
    rating: 1
  },
  {
    id: 10,
    date: "7/22/2018",
    price: "746.00",
    address: "351 Schamberger Shore",
    rating: 4
  },
  {
    id: 11,
    date: "6/10/2018",
    price: "603.00",
    address: "221 Izaiah Ranch",
    rating: 7
  },
  {
    id: 12,
    date: "12/29/2017",
    price: "190.00",
    address: "57337 Yost Drive",
    rating: 6
  },
  {
    id: 13,
    date: "2/19/2018",
    price: "606.00",
    address: "42978 Hugh Mill",
    rating: 7
  },
  {
    id: 14,
    date: "12/6/2017",
    price: "330.00",
    address: "58209 Bradford Views",
    rating: 3
  }
];
const menuList = [
  {
    id: 1,
    name: "Картофель, запеченный в мундире",
    description:
      "Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой.",
    image:
      "https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg",
    price: 100,
    ingredients: [
      { id: 0, name: "Картофель" },
      { id: 1, name: "Чеснок" },
      { id: 2, name: "Сметана" },
      { id: 3, name: "Бекон" },
      { id: 4, name: "Твердый сыр" },
      { id: 5, name: "Зеленый лук" }
    ]
  },
  {
    id: 2,
    name: "Томатный магрибский суп",
    description:
      "Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов.",
    image:
      "https://s2.eda.ru/StaticContent/Photos/150601195903/151007183344/p_O.jpg",
    price: 150,
    ingredients: [
      { id: 0, name: "Помидоры" },
      { id: 1, name: "Куриный бульон" },
      { id: 2, name: "Мед" },
      { id: 3, name: "Петрушка" },
      { id: 4, name: "Кинза" },
      { id: 5, name: "Паприка" }
    ]
  },
  {
    id: 3,
    name: "Крем-суп из тыквы",
    description:
      "Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.",
    image:
      "https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png",
    price: 100,
    ingredients: [
      { id: 0, name: "Тыква" },
      { id: 1, name: "Петрушка" },
      { id: 2, name: "Сливки" },
      { id: 3, name: "Бренди" },
      { id: 4, name: "Куриный бульон" }
    ]
  },
  {
    id: 4,
    name: "Салат из красной фасоли с творожным сыром",
    description:
      "Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется. Кроме рукколы в этом салате уверенно чувствуют себя листья корн-салата и щавеля, но идеальнее всего ведет себя зеленая черемша.",
    image:
      "https://s1.eda.ru/StaticContent/Photos/130410124428/130421123421/p_O.jpg",
    price: 150,
    ingredients: [
      { id: 0, name: "Консервированная фасоль" },
      { id: 1, name: "Соль" },
      { id: 2, name: "Чеснок" },
      { id: 3, name: "Оливковое масло" },
      { id: 4, name: "Творожный сыр" },
      { id: 5, name: "Красный лук" }
    ]
  },
  {
    id: 5,
    name: "Классический греческий салат ",
    description:
      "Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. ",
    image:
      "https://s1.eda.ru/StaticContent/Photos/120214131925/120214132229/p_O.jpg",
    price: 350,
    ingredients: [
      { id: 0, name: "Оливковое масло extra virgin" },
      { id: 1, name: "Лимонный сок" },
      { id: 2, name: "Чеснок" },
      { id: 3, name: "Помидоры" },
      { id: 4, name: "Красный лук" },
      { id: 5, name: "Сыр фета" },
      { id: 6, name: "Маслины без косточек" }
    ]
  },
  {
    id: 6,
    name: "Маффины с голубикой и мускатным орехом",
    description:
      "Культовая ягода, которую научились производить круглый год, в сочетании с рыхлым тестом — это абсолютно беспроигрышный вариант. Маффины с голубикой стали популярным десертом в Англии и Америке, хотя происхождение их французское. Да и вообще эти маленькие сладкие кексы, какими мы их знаем сейчас, задумывались как обычный хлеб и на вкус были нейтральны.",
    image:
      "https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg",
    price: 170,
    ingredients: [
      { id: 0, name: "Сливочное масло" },
      { id: 1, name: "Пшеничная мука" },
      { id: 2, name: "Голубика" },
      { id: 3, name: "Ванильный экстракт" },
      { id: 4, name: "Мускатный орех" }
    ]
  },
  {
    id: 7,
    name: "Азу по‑татарски",
    description:
      "Одно из немногих блюд, удостоившихся в советской продуктовой традиции продажи с именной нарезкой. И до сих пор в кулинариях и супермаркетах можно найти говядину, которую режут соломкой и продают как азу. Насчет самого блюда до сих пор идут споры, как и с чем готовить: использовать говядину или баранину, топленое или обычное масло, тушить в казане или сотейнике с толстым дном. Редакций этого блюда может быть много, но основа его всегда неизменна — это нарезанное соломкой мясо, картофель и томатный соус.",
    image:
      "https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg",
    price: 270,
    ingredients: [
      { id: 0, name: "Говядина" },
      { id: 1, name: "Соленые огурцы" },
      { id: 2, name: "Картофель" },
      { id: 3, name: "Мясной бульон" },
      { id: 4, name: "Чеснок" }
    ]
  },
  {
    id: 8,
    name: "Жареный рис с яйцом по‑китайски",
    description:
      "Жареный рис — довольно распространенный ингредиент блюд восточноазиатской кухни — готовить, в сущности, можно из остатков вчерашнего ужина. Только хорошо остывший, заранее сваренный рис, в идеале простоявший всю ночь в холодильнике, при попадании в раскаленный вок не расползется до состояния каши и не превратит содержимое сковородки в неповоротливый бесформенный ком.",
    image:
      "https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg",
    price: 240,
    ingredients: [
      { id: 0, name: "Круглый рис" },
      { id: 1, name: "Мини цукини" },
      { id: 2, name: "Красный стручковый перец" },
      { id: 3, name: "Тертый имбирь" },
      { id: 4, name: "Грибы шиитаке" },
      { id: 5, name: "Легкий соевый соус" },
      { id: 6, name: "Кунжутное масло" }
    ]
  }
];

const filterByName = (data, filter) =>
  data.filter(item => item.name.includes(filter));

export default class App extends Component {
  state = {
    filter: ""
  };

  handlerInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { filter } = this.state;

    const filteredDishes = filterByName(menuList, filter);

    return (
      <div>
        <Header />
        <OrderHistoryTable data={orderHistoryList} />
        <Filter value={filter} onFilter={this.handlerInputChange} />
        <Menu data={filteredDishes} />
        <SignInForm/>
        <SignUpForm/>
      </div>
    );
  }
}
