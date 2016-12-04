const Foo = resolve => require(['./components/Foo'], resolve)
const Bar = resolve => require(['./components/marvin'], resolve)

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

export default routes
