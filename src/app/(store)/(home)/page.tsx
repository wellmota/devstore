export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return <h1>Hello World!</h1>
}
