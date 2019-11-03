function execute(plan) {
  const { title, dom, css } = plan
  head.append(assign(crel('title'), {innerText: title}))
  body.append(...dom.map(el => assign(crel(el.tag || tag(el)),
    {innerText: el.content || cont(el)})))
  ents(css).forEach(([sel, rules])=> assign(qsel(sel).style, rules))
}

var 

doc = document,   { head, body } = doc,
{ assign, keys, entries: ents } = Object,

tags = 'h1, h2, h3, h4, h5, h6, p'.split(', ')
  .reduce((tags, tag)=> ({...tags, [tag]: tag}), {}),

[ crel, qsel ] = ['createElement', 'querySelector'].map(meth => doc[meth].bind(doc)),

[ tag, cont ] = [0, 1].map(n => el => ents(el).find(([key, val])=> key in tags)[n])