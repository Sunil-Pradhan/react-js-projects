export default function ProductsPage({ searchParams }) {
  // Get language from URL query params (?lang=english)
  const language = searchParams.lang || 'english'

  const translations = {
    english: { title: 'Products', description: 'Browse our products' },
    spanish: { title: 'Productos', description: 'Explora nuestros productos' },
    french: { title: 'Produits', description: 'Parcourez nos produits' }
  }

  const t = translations[language] || translations.english

  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.description}</p>

      <div style={{ marginTop: '20px' }}>
        <strong>Switch Language:</strong>
        <a href="/products?lang=english" style={{ margin: '0 10px' }}>English</a>
        <a href="/products?lang=spanish" style={{ margin: '0 10px' }}>Spanish</a>
        <a href="/products?lang=french" style={{ margin: '0 10px' }}>French</a>
      </div>

      <p>Current language: {language}</p>
    </div>
  )
}
