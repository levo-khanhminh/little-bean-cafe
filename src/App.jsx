import menu from './data/menu.json'

export default function App() {
  return (
    <main className="page">
      <header className="header">
        <h1>Little Bean Cafe</h1>
      </header>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.name}: {item.price}
          </li>
        ))}
      </ul>
    </main>
  )
}
