title = 'Сайт человека'

the_plan = {
  title, body: [
    {h1: title},
    {h2: 'Михаил "Нинин" Великосельский'},
    {h4: 'aka UniBreakfast or TooT NININ'},
    {p: 'Здесь будет информация обо мне, о моих работах, занятиях и увлечениях.'},
    {h3: 'Контакты / Ссылки'},
    {table: [
      {tr: [ {td: 'GitHub:'}, {td: {
          a: 'github.com/UniBreakfast', href: 'https://github.com/UniBreakfast'
      }}]},
      {tr: [ {td: 'Facebook:'}, {td: {
          a: 'facebook.com/UniBreakfast', href: 'https://www.facebook.com/UniBreakfast'
      }}]},
    ]},
    {div: [
      {h3: 'Контакты / Ссылки'},
      {table: [ 
        ['GitHub:', {a: 'github.com/UniBreakfast', href: 'https://github.com/UniBreakfast'}],
        ['Facebook:', 
          {a: 'facebook.com/UniBreakfast', href: 'https://facebook.com/UniBreakfast'}]
      ]}
    ]},
  ],
  css: {
    body: {
      font: '1em Trebuchet MS, Helvetica, Arial, sans-serif',
      background: 'cornsilk'
    }
  }
}

execute(the_plan)