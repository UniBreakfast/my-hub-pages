function execute(plan) {
  const { title, body, css } = plan
  head.append(assign(crel('title'), {innerText: title}))
  // doc.body.append(...body.map(el => assign(crel(el.tag || tag(el)),
  //   {innerText: el.content || cont(el)})))
  stuff(doc.body, body)
  ents(css).forEach(([sel, rules])=> assign(qsel(sel).style, rules))
}

var 

doc = document,   { head, body } = doc,
{ assign, keys, entries: ents } = Object,

str2obj = str => str.split(', ').reduce((keys, key)=> ({...keys, [key]: key}), {})

tags = str2obj('h1, h2, h3, h4, h5, h6, p, table, tr, td, a, div'),

[ crel, qsel ] = ['createElement', 'querySelector'].map(meth => doc[meth].bind(doc)),

[ tag, cont ] = [0, 1].map(n => el => ents(el).find(([key, val])=> key in tags)[n]),

props = el => ents(el).filter(([key, val])=> !(key in tags || key in str2obj('content, tag')))
  .reduce((obj, [key, val])=> ({...obj, [key]: val}), {})

stuff = (elem, content)=> {
  if (typeof content == 'string') return assign(elem, {innerText: content})
  if (!Array.isArray(content)) content = [content]
  if (elem.tagName == 'TABLE') content = content.map(row => row.tr? row : {tr: row})
  if (elem.tagName == 'TR') content = content.map(cell => cell.td? cell : {td: cell})
  return elem.append(...content.map(el => 
    assign(stuff(crel(el.tag || tag(el)), el.content || cont(el)), props(el))))
}

// build = (el, parent)=> 

{ 
  const append = Element.prototype.append
  Element.prototype.append = function (...args) {
    append.apply(this, args)
    return this
  }
}