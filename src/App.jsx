import { useEffect } from 'react'
import Count from './Count'


function usePageMeta(title, faviconUrl) {
  useEffect(() => {
    document.title = title

    let link = document.querySelector("link[rel*='icon']")
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }
    link.href = faviconUrl
  }, [title, faviconUrl])
}

function App() {
  usePageMeta('Counter & List App', '/logo.jpeg')

  return (
    <>
      <Count />
    </>
  )
}

export default App
