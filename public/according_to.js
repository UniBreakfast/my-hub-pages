function execute(plan) {
  const { title, layout } = plan
  head.append(assign(crel('title'), {innerText: title}))
  body.append(...layout.map(el => assign(crel(el.tag || tag(el)),
    {innerText: el.content || cont(el)})))
}

var 

doc = document,   { head, body } = doc,
{ assign, keys, entries: ents } = Object,

tags = 'h1, h2, h3, h4, h5, h6, p'.split(', ')
  .reduce((tags, tag) => ({...tags, [tag]: tag}), {})

crel = doc.createElement.bind(doc),

[tag, cont] = [0, 1].map(n => el => ents(el).find(([key, val]) => key in tags)[n])