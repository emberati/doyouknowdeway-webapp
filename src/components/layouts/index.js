import MainLayout from '@/components/layouts/MainLayout'
import FlatLayout from '@/components/layouts/FlatLayout'

const layouts = [
  MainLayout,
  FlatLayout
]

function registerLayouts(app) {
  layouts.forEach(layout => {
    app.component(layout.name, layout)
    console.log(layout.name)
})
}

export { registerLayouts }
export default layouts