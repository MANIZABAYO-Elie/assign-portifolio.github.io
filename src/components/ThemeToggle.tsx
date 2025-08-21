import { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState<'light'|'dark'>(() => (localStorage.getItem('theme') as 'light'|'dark') || 'light')

  useEffect(()=>{
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <button onClick={()=>setTheme(t => t === 'light' ? 'dark' : 'light')} className="px-3 py-1 border rounded">
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}