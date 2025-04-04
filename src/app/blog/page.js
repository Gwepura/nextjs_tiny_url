// "use client"

async function getData() {
  // const endpoint = "http://localhost:3000/api/posts"
  // const res = await fetch(endpoint)

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data")
  // }

  // return res.json()

  return {items: []}
}

export default async function BlogPage() {
  const data = await getData()
  const items = data && data.items ? [...data.items] : []
  return <main>
    <h1>Hello World</h1>
    <p>Posts:</p>
    {items && items.map((items, idx) => {
      return <li key={`post-${idx}`}>{items.title}</li>
    })}
  </main>
}