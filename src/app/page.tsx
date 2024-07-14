import { microCMSClient } from "@/libs/microCMSClient";

export default async function Home() {
  const data = await microCMSClient.get({
          endpoint: 'blog',
          queries: { draftKey: '7uSEvY0fNh' }
      })
  return (
      <main>
        <div>{data.title}</div>
      </main>
  )
}