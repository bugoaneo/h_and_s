# Виджет для браузера.

Переключение секций происходит за счет класса `.current`

Демонстрацию всех секций можно посмотреть по кнопкам под виджетом

Красный аутлайн нужен только для отладки и тестов убирается в стилях на `.widget`.

Верстка сделана в методологии БЭМ.

Минимальная ширина контейнера - 320 пикс.
МИНИМАЛЬНАЯ!!! высота - 640пикс.
Блоки резиновые по высоте.
Иконки и картинки как правило контеролируются их классами. В противном случае **настоятельно** рекомендую задавить им атрибут `width`!

## Струтктурные классы

Глобальный враппер, в  котором живет вся верстка `.widget`.

Основной рабочий класс для отдельных страниц `widget__wrapper` и его модификаторы
`widget__wrapper--bg` - для синего фона
`widget__wrapper--aside` - для узкого контейнера, как на дизайне с серверами

Основной центрующий и сеткообразующий класс - `.container`

`.header` - хедер/шапка. Флекс контейнер.

Любой блок с постфиксом `*row` - имеет флекс и может использоваться как флекс контейнер.

Порядок элементов во флекс-контейнере значения не играет: теста и инпуты **всегда** будут занимать максимально возможную ширину.

## Класс для ячеек - `.section` и его модификации.

Дает паддинги.
`.section--center` - при условии, что это единственная ячейка-section - центрует по высоте
`.section--col` - половина контейнера.
`.section--bg` - дает белый фон и круглые углы.
`.section--scroll` - определяет возможность сткроллить контент. Необходим внутренний блок `.scroll-wrapper` в него помещается контент. При превышении высоты контейнера, у контейнера появиться тонкий скролл. Наличие хедедра или футера - возможно. Для демонстрации необходимо раскоментировать dummy-контент в секции.
`.section--action` - аналог футера. Прижимается к низу верхним `.section--col`.

### Элементы блока `.section`

`.section__row` - флекс-контейнер. Имеет маргин снизу
`.section__cell` - флекс-потомок. Имеет размер его контента. При присоединении к нему класса `.wide` получает приоритет и растягивается на всю доступную ему ширину.
`.section__title` - заголовок. Имеет маргин снизу.
`.section__media` - имидж шириной в 147пикс
`.section__note` - бледный текст с уменьшенным размером шрифта

Прочие элементы не столь важны и легко отслеживаются. Элементы могут быть использованы без родителей. Но я не рекомендую этого.

## Организация списков

Для организации структуры списка служит класс `.menu` и его элементы
`.menu__item` - флекс-контейнер с паддингами по бокам
`.menu__pic` - контролирует иконку или элемент `img`
`.menu__textlabel` - позволяет текстовому блоку растянуться на всю доступную ширину
`.menu__icon` - контролирует маленькие иконки

## Формы и их стили

Для отправки инф-ции я сверстала формы и их элементы.
`.form` - родительский класс для всех элементов. Не имеет стилевого оформления. Нужен как точка отсчета.

### Элементы блока `.form`

`.form__group` - структурная обертка. Имеет маргин с низу
`.form__group--row` - модификатор элемента, делает его флекс-контейнером
`.form__row` - флекс контейнер
`.form__input` - класс для инпута формы. Растягивается на все доступное пространство. Для построения с ним группы, необходима обертка в `.form__row`

### Модули формы

Для реализации радио- и чекбокс-переключателей созданы отдельные, независимые модули

`.label` - структурная обертка для элементов модуля
`.label-radio` - элемент обертка текста модуля. Создает круглый индикатор переключения. Для корректной работы требует наличия **перед собой/previousSibling** инпута `type="radio"`
`.label-checkbox` - элемент обертка текста модуля. Создает квадратный индикатор-чекбокс. Для корректной работы требует наличия **перед собой/previousSibling** инпута `type="checkbox"`

## Кнопки

Лбая кнопка может быть переиначена на кнопку-ссылку в самом общем случае, эти классы могут быть использованы для любого элемента для придания ему вида кнопки.

`.btn` - общий класс. Задает глобальные стили: размер шрифта, паддинги, скругление углов, максимально возможную ширину
`.btn--small` - уменьшенные паддинги, минимально возможная ширина по контенту
`.btn--border` - убирает скругление углов и дает верхний и нижний бордер
`.btn--upload` - создает кнопку-загрузчик для `input type=file`
`.btn--icon` - создает флекс-контейнер для размещения текста и иконки. Класс для иконки `.btn__icon`
`.btn--prime` - дает основной фоновый цвет по дизайну и белый цвет шрифта
`.btn--light` - дает светлый фон и основной цвет для шрифта
`.btn--clean` - дает серую рамку без фона. Цвет шрифта не определен (дефолтный для дизайна цвет текста - черный)

### Прочие кнопки или элементы имеющие функционал кнопки

`.location-btn` - флекс-контейнер, позволяет разместить флаг, название страны и белый треугольник
`.close-menu` - кнопка с крестиком размеры 50*50пикс
`.close-btn` - кнопка возврата в шапке модуля.

## Вспомогалельные классы

`.center-text ` - центрует текст
`.right-text` - дает тексту правую выключку
`.prime-color` - дает тексту основной тематический цвет дизайна
`.light-color ` - дает тексту белый цвет
`.grey-color ` - дает тексту серый цвет
`.border-bottom ` - дает нижний сетый бордер в 1 пикс
`.invisible` - прячет за счет нулевой высоты и ширины, прозрачности и абсолюта

Я также реализовала интересный вариант для переключения коннект/дисконнект. Его можно увидеть по клику на кнопку `connect-demo`

Я вижу его как элемент который можно переключать как в ручном режиме, по тыку пользователя, так и автоматически, если подключение подключено или разорвано.