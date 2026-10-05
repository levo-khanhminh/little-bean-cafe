import menu from './data/menu.json'
import shop from './data/shop.json'
import MenuItem from './components/MenuItem.jsx'

const categories = [...new Set(menu.map((item) => item.category))]

export default function App() {
  return (
    <main className="page">
      <header className="header">
        <h1>{shop.name}</h1>
        <p>
          {shop.slogan} · Open {shop.openingHours}
        </p>
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
