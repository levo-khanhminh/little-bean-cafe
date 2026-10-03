function formatPrice(price) {
  return price.toLocaleString('vi-VN') + ' ₫'
}

export default function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <span className="name">{item.name}</span>
      <span className="price">{formatPrice(item.price)}</span>
    </div>
  )
}
