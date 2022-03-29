# ДЗ.

## Как делать:

0. Сделать форк этого репозитория в свой аккаунт (только 1 раз в самом начале).

1. Перед выполнением ДЗ сделайте пул мастера этого репозитория себе в форк (чтобы иметь актуальный код);
2. Обновить зависимости `yarn` или `npm i`;
3. Создайте новую ветку от актуального мастера для выполнения ДЗ;
4. Выполните ДЗ в этой ветке;
5. Сделайте Pull Request этой ветки в мастер моего репозитория;
6. Напишите мне (a.senyukov@javascript.info) письмо со ссылкой на PR.

**Важно! В результате всех этих манипуляций в вашем мастере должны быть только мои комиты, все ваши комиты должны быть в отдельных ветках под каждую домашку.**

Дедлайн – 22:00 по Киеву/23:00 по Москве за день до занятия.

## HT1

1. Создать компонент **Rate**, который принимает рейтинг (число от 1 до 5) и отображает его используя SVG со звездочками. Например `<Rate value={3} />`.
2. Создать компонент **Reviews**, который принимает все ревью по одному ресторану и отображает имена и отзывы про ресторан, а так же рейтинг с помощью компонента **Rate**.
3. Создать компонент **Restaurant** (рендерить там, где сейчас **Menu**). В **Restaurant** показывать **Menu** и **Reviews**. Так же в **Restaurant** посчитать средний рейтинг по этому ресторану и отобразить с помощью компоненты **Rate**.

## HT2

1. Покрыть **PropTypes** все компоненты (только то, что используется в компоненте).
2. Написать тесты на уменьшение блюд (опционально - без клика по increment).
3. Покрыть тестами **Reviews** (теститовать только разметку).

## HT3

1. Написать тесты на компоненты Review, Product и тестируем joinIngredients.

## HT4

1. В продукт добавить кнопку удаления продукта из корзины(совсем, выставление в 0).
2. Подмодуль для пользователя, хранит состояние о текущем пользователе. Имеет возможность войти и выйти (установить текущего пользователя, выйти текущему пользователю). Сделать два компонента в разных местах интерфейса. 1 для отображения кнопок войти/выйти. И другой для отображения инфы о пользователе. Если пользователь есть, то отображаем кнопку выйти, если нет, то войти. По клику на войти помещаем инфу о пользователе в стор(инфу о пользователи придумать самому, структура любая).

## HT5
1. селектор для price, используем в компоненте busket
2. Починить отображение **Review** компонента (взять данные из редьюсеров **review** и **users**)
3. Реализовать добавление нового review и юзера в стор и показывать его (мы считаем, что на каждый новый отзыв у нас добавляется новый пользователь)

## HT6

1. Загрузить **products**, **users**, **reviews** через **redux-thunk**, грузить только для текущего ресторана. **products** и **reviews** грузим толкьо для конкретного ресторана.

'/api/products?id=...'
'/api/reviews?id=...'
'/api/users'

2. Полностью убрать **fixtures** из приложения (удалить все импорты и сам файл), все грузить с сервера

3. При загрузках показывать лоадеры, все грузить максимально низко, там где эти данные нужны