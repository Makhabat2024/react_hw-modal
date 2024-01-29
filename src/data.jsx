const data = [
  {
    id: Math.random(),
    question: "Разница между блочным и строчными элементами",
    type: "html",
  },
  {
    id: Math.random(),
    question: "Что такое CSS и для чего он используется?",
    type: "css",
  },
  {
    id: Math.random(),
    question: "Как подключить CSS к HTML-документу?",
    type: "css",
  },
  {
    id: Math.random(),
    question: "Что такое селекторы в CSS и как они работают?",
    type: "css",
  },
  {
    id: Math.random(),
    question: "Каковы различия между классами и идентификаторами в CSS?",
    type: "css",
  },
  {
    id: Math.random(),
    question: "Как применять стили к HTML-элементам с использованием CSS?",
    type: "css",
  },
  {
    id: Math.random(),
    question: "Что такое псевдоклассы и псевдоэлементы в CSS?",
    type: "css",
  },
  {
    id: Math.random(),
    question: "Как создать адаптивный веб-дизайн с помощью медиа-запросов?",
    type: "css",
  },
  {
    id: Math.random(),
    question: "Что такое наследование и каскадирование в CSS?",
    type: "css",
  },
  // {
  //   id: Math.random(),
  //   question:
  //     "Как работают блочная модель и её свойства (margin, padding, border)?",
  //   css: "css",
  // },
  // {
  //   id: Math.random(),
  //   question: "Как центрировать элементы с помощью CSS?",
  //   css: "css",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что такое flexbox и как его использовать для создания макетов?",
  //   css: "css",
  // },
  // {
  //   id: Math.random(),
  //   question: "Какие существуют единицы измерения в CSS (px, em, rem и т.д.)?",
  //   css: "css",
  // },
  {
    id: Math.random(),
    question: "Что такое двоичный код?",
    type: "js",
  },
  {
    id: Math.random(),
    question: "В чем разница между интерпретатором и компилятором?",
    type: "js",
  },
  {
    id: Math.random(),
    question: "Как раньше назывался JavaScript?",
    type: "js",
  },
  {
    id: Math.random(),
    question: "Какие есть способы объявления переменных?",
    type: "js",
  },
  {
    id: Math.random(),
    question: "В чем разница между const и let?",
    type: "js",
  },
  // {
  //   id: Math.random(),
  //   question: "",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "В каких случаях мы должны использовать const?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Почему var перестали использовать, в чем его минусы?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Сколько типов данных существует в JS?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "В чем разница между null и undefined?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Какие типы данных равны false, а какие true?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что такое преобразование данных?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Какие виды преобразования данных существуют в JS?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что возвращают операторы сравнения?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "В чем разница между строгим и нестрогим сравнением?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Какие методы преобразования данных вы знаете?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Какие математические операторы вы знаете?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Как называется этот оператор =, и что он делает?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что делает оператор %?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "А этот оператор **?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Почему объекты мы называем не примитивными?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Расскажи про логические операторы.",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что возвращают логические операторы?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Как называется этот оператор !, и что он делает?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Расскажи про условный оператор if. В каких случаях он будет работать, в каких нет?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "В чем разница между switch и if? Когда лучше использовать if, а когда switch?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Почему тернарный оператор называют тернарным? И в чем разница между if, switch, тернарным?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Как узнать к какому типу относится значение, и что возвращает этот оператор?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Расскажи про циклы.",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что такое бесконечные циклы?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Nested loops. Напиши nested loops.",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "В чем разница между for и while, do while?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Расскажи про continue, break.",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что будет, если не использовать break в switch?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Расскажи про функции. Какие виды есть?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "В чем разница между аргументом и параметром?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Expression, declaration, arrow. В чем разница?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Обязательно ли писать в функцию return?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что будет, если мы не будем писать return в функцию?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Можно писать код внизу после return?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что такое объекты?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Из чего состоит свойство в объекте?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Как называется свойство, которое хранит в своем значении функцию?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Как получить значение свойства в объекте?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Что возвращает объект, если мы обратимся к несуществующему свойству?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Как удалить свойство из объекта?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Расскажи про callback function. Почему мы так называем?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Расскажи про High Order Function. Почему мы так называем?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "В чем разница между функцией обратного вызова и callback function?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Напиши callback и функцию высшего порядка.",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "К какому типу относится Array?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "В чем разница между объектом и массивом?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Как добавить элемент в конец массива и в начало?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что лучше использовать: pop, push или shift, unshift?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что возвращает pop, push, shift, unshift?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Расскажи про map: что принимает как аргументы, что возвращает и что делает с аргументом?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Расскажи про forEach: что принимает как аргументы, что возвращает и что делает с аргументом?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Расскажи про filter: что принимает как аргументы, что возвращает и что делает с аргументом?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Расскажи про reduce: что принимает как аргументы, что возвращает и что делает с аргументом?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Как перебирать массив без методов?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Как узнать количество элементов в массиве?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Расскажи про some: что принимает как аргументы, что возвращает и что делает с аргументом?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Расскажи про every: что принимает как аргументы, что возвращает и что делает с аргументом?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Расскажи про join: что принимает как аргументы, что возвращает и что делает с аргументом?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Расскажи про slice: что принимает как аргументы, что возвращает и что делает с аргументом?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Как создать новый объект Date?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Как получить из объекта Date только год, месяц, день?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Расскажи про splice: что принимает как аргументы, что возвращает и что делает с аргументом?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Можешь создать объект со своим днем рождения и получить только день?",
  //   js: "js",
  // },

  // {
  //   id: Math.random(),
  //   question: "Объект Math. Какие методы ты знаешь?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Можешь создать функцию, которая будет получать два параметра и возвращать случайное число между первым и вторым параметром?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Math.ceil, Math.floor, Math.random, и т.д. Расскажи про них.",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Расскажи про regex. Для чего оно используется?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Какой тип возвращает confirm, alert, prompt?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Можешь написать код, который получает значение из prompt и проверяет, соответствует ли значение email или нет? Можно использовать regex-шаблон из интернета.",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что такое Scope?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Какие виды Scope вы знаете?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "В чем разница между Local Scope и Block Scope?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Как работает var в Scopes?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Как лучше всего называть переменные, функции?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Почему object называют ссылычным",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Sholow copy , deep copy в чем разница",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Деструктизация что это ?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Rest , Spread в чем разница",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Расскажите об объекте window в JavaScript и перечислите несколько его свойств или методов",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "что такое DOM",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Методы получения данных из DOM",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Методы BOM",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Events что это?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Какие фазы есть у events?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что делает preventDefault?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что делает stopPropagation?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "В чем разница между onclick и addEventListener?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что такое Critical rendering path?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Расскажи про Browser Storages.",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "В чем разница между Session Storage vs Local Storage?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Какой код мы называем асинхронным?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Промис - какие состояния может быть у промиса?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Timer API - что возвращает setTimeout?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Как остановить setInterval?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Events loop, Call Stack, Call Back Queue - что это?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Расскажи про HTTP, fetch, что возвращает fetch?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Async/await - как использовать?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Методы HTTP.",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question:
  //     "Какие функции мы называем функциями с побочным эффектом? sideEffect functions",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что такое чистая функция?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что такое рекурсия?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Расскажите про hoisting",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Что возвращает this?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "Как изменить значение this внутри функции?",
  //   js: "js",
  // },
  // {
  //   id: Math.random(),
  //   question: "В чем разница между call, apply и bind?",
  //   js: "js",
  // },
  {
    id: Math.random(),
    question: " Что такое React и в чем его основные преимущества?",
    type: "react",
  },
  {
    id: Math.random(),
    question: "Что такое Node.js и каковы его основные области применения?",
    type: "react",
  },
  {
    id: Math.random(),
    question: "Для чего используется папка node_modules в Node.js проектах?",
    type: "react",
  },
  {
    id: Math.random(),
    question:
      "Объясните назначение файлов package.json и package-lock.json в Node.js проектах.",
    type: "react",
  },
  {
    id: Math.random(),
    question: "Что такое npm и каковы его ключевые функции?",
    type: "react",
  },
  {
    id: Math.random(),
    question:
      "Какие команды Node.js наиболее часто используются разработчиками?",
    type: "react",
  },
  {
    id: Math.random(),
    question:
      "Что такое компоненты в React и какие у них основные характеристики?",
    type: "react",
  },
  {
    id: Math.random(),
    question: "Что такое JSX и каков его синтаксис?",
    type: "react",
  },

  {
    id: Math.random(),
    question: "В чем разница между export default и export в JavaScript?",
    type: "react",
  },
  {
    id: Math.random(),
    question: "Что такое props в React и как они используются?",
    type: "react",
  },
  {
    id: Math.random(),
    question: "Что означает односторонняя передача данных в React?",
    type: "react",
  },
  {
    id: Math.random(),
    question: "Что такое состояние (state) в React и как оно используется?",
    type: "react",
  },
  {
    id: Math.random(),
    question: "Чем отличается рендеринг от перерендеринга в React?",
    type: "react",
  },
  {
    id: Math.random(),
    question: "Что возвращает хук useState в React?",
    type: "react",
  },

  {
    id: Math.random(),
    question: "Что такое state batching в React?",
    type: "react",
  },
  {
    id: Math.random(),
    question: "Что значит поднятие состояния (Lifting state up) в React?",
    type: "react",
  },
  {
    id: Math.random(),
    question:
      "Что такое двустороннее связывание данных (Two-way data binding)?",
    type: "react",
  },
  {
    id: Math.random(),
    question:
      "В чем разница между контролируемыми и неконтролируемыми компонентами в React?",
    type: "react",
  },
  {
    id: Math.random(),
    question: "Что возвращает хук useRef в React?",
    type: "react",
  },

  {
    id: Math.random(),
    question: "Какие методы условного рендеринга вы знаете в React?",
    type: "react",
  },
  {
    id: Math.random(),
    question: "Что такое React reconcilation",
    type: "react",
  },
  { id: Math.random(), question: "difing algoritm", type: "react" },
  {
    id: Math.random(),
    question: "Stateful vs Stateless components",
    typet: "react",
  },
];
export default data;
