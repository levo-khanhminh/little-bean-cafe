import menu from './data/menu.json'
import MenuItem from './components/MenuItem.jsx'

const categories = [...new Set(menu.map((item) => item.category))]

export default function App() {
  return (
    <main className="page">
      <header className="header">
        <h1>Little Bean Cafe</h1>
      </header>
      {categories.map((category) => (
        <section key={category}>
          <h2 className="category">{category}</h2>
          {menu
            .filter((item) => item.category === category)
            .map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
        </section>
      ))}
    </main>
  )
}
