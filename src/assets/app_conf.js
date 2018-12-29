export {
  notme,
  goodsites,
  addlink,
  areyou,
  notpolite,
  cantfind
};

const notme = [
  ".*[cск][-\s\.]*[0oо][-\s\.]*[dд][-\s\.]*[e3е][-\s\.]*[rрp].*",
  ".*[pп][-\s\.]*[0oо][-\s\.]*[rрp][-\s\.]*[0oо][-\s\.]*[xхh].*",
  ".*((3[.,]14)|[pпπ])?[-\s\.]*[iy1іыиeеє]?[-\s\.]*[dд][0oоaа3eе]?[-\s\.]*[rрр].*",
  ".*[cс][-\s\.]*[yу][-\s\.]*[kк][-\s\.]*[1iиіaа].*",
  ".*[xхh][-\s\.]*[yу][-\s\.]*[zйіi].*",
  ".*[bб6][-\s\.]*[aа][-\s\.]*[rр][-\s\.]*[yiи][-\s\.]*[gг][-\s\.]*[aаiиyу].*",
  ".*[zй][-\s\.]*[yу][-\s\.]*[xх].*",
  ".*f[-\s\.]*[uc]?[-\s\.]*[uc]?[-\s\.]*[k].*",
  ".*[hxхkк][-\s\.]*[aаоo0][-\s\.]*[hxхkк][-\s\.]*[oоlл01].*",
  ".*[rpр][-\s\.]*[oо0][-\s\.]*(sh|ш)?[-\s\.]*[eе3][-\s\.]*[nн].*",
  ".*с[-\s\.]*у[-\s\.]*г[-\s\.]*с.*",
  "^si[scс][-\s\.][уuy][-\s\.][кk][-\s\.][аa].*",
  ".*g[oо0]v.u[aа].*",
  ".*ш[-\s\.]*у[-\s\.]*м[-\s\.]*[eе3][-\s\.]*р.*",
  ".*[s$cс][-\s\.]*[aа][-\s\.]*[1lл][-\s\.]*[oо0].*",
  ".*[pрп][-\s\.]*[iеіи3][-\s\.]*[zcс3][-\s\.]*[dд].*",
  ".*[bл][-\s\.]*[lл][-\s\.]*[yi1]?[-\s\.]*[aя][-\s\.]*[tdд].*"
];

const goodsites = ["uprom.info"];

const addlink = {
  visible: true,
  image:'/images/cat.jpg',
  headtext: 'Дякуємо за співпрацю',
  greytext: '',
  buttext: 'ЯВОЛЬ'
};

const areyou = {
  visible: true,
  image:'/images/pastor.jpg',
  headtext: 'Ваня,',
  greytext: 'ти шо, гоніш?',
  buttext: 'НІТ, ІЗВІНІТІ, Я БІЛЬШ НЕ БУДУ'
};

const notpolite = {
  visible: true,
  image:'/images/groys.jpg',
  headtext: 'Ти просиш внести саєт',
  greytext: 'но ти просиш без увоженія.',
  buttext: 'УВОЖАЮ'
};

const cantfind = {
  visible: true,
  image:'/images/yatc.jpg',
  headtext: 'Сиш,',
  greytext: 'а чо я цього саєта в торнеті не ноблюдаю? Щас вичислю тебе по АйКью.',
  buttext: 'ВТЕКТИ'
}
