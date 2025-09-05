// Dynamic metadata function
export async function generateMetadata({ params }) {
  const productId = params.id
  const productData = await getProductData(productId)

  return {
    title: `${productData.name} - Product Details`,
    description: productData.description,
  }
}

// Mock function to simulate data fetching
async function getProductData(id) {
  const products = {
    1: { name: 'Amazing Product 1', description: 'This is the best product ever created!' },
    2: { name: 'Fantastic Product 2', description: 'A revolutionary product that changes everything!' },
    3: { name: 'Incredible Product 3', description: 'The ultimate solution for all your needs!' },
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100))

  return products[id] || { name: 'Product Not Found', description: 'This product does not exist' }
}

export default async function ProductDetailPage({ params }) {
  const product = await getProductData(params.id)

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Product ID: {params.id}</p>
    </div>
  )
}
