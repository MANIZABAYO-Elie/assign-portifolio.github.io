import { useEffect, useState } from 'react'
import { getLocalAnswer, getOpenAIAnswer } from '../lib/chatService'
import type { Message } from '../lib/chatService'

export default function Chatbot(){ 
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [useAI, setUseAI] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setMessages([{role:'bot', text:'Hi — ask me about Elie, projects, or how to contact him.'}])
  },[])

  async function send(){
    if(!input.trim()) return
    const userMsg:Message = {role:'user', text: input}
    setMessages(m=>[...m, userMsg])
    setInput('')
    setLoading(true)
    try{
      const answer = useAI ? await getOpenAIAnswer(input) : await getLocalAnswer(input)
      setMessages(m=>[...m, {role:'bot', text: answer}])
    }catch(e:any){
      setMessages(m=>[...m, {role:'bot', text: 'Error: ' + (e.message||e)}])
    }finally{ setLoading(false) }
  }

  return (
    <div className={`fixed right-6 bottom-6 z-50`}>
      {open ? (
        <div className="flex flex-col w-[320px] bg-white dark:bg-gray-800 border rounded shadow-lg overflow-hidden">
          <div className="p-3 flex items-center justify-between">
            <strong>Elie Assistant</strong>
            <div className="flex items-center gap-2">
              <label className="text-xs">AI</label>
              <input aria-label="use-ai" type="checkbox" checked={useAI} onChange={(e)=>setUseAI(e.target.checked)} />
              <button onClick={()=>setOpen(false)} className="ml-2">✕</button>
            </div>
          </div>
          <div className="p-3 h-64 overflow-auto bg-gray-50 dark:bg-gray-900">
            {messages.map((m,i)=>(
              <div key={i} className={`mb-2 ${m.role==='user' ? 'text-right' : ''}`}>
                <div className={`inline-block p-2 rounded ${m.role==='user' ? 'bg-indigo-100' : 'bg-gray-200 dark:bg-gray-700'}`}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t">
            <div className="flex gap-2">
              <input value={input} onChange={(e)=>setInput(e.target.value)} className="flex-1 p-2 border rounded" placeholder="Ask a question..." />
              <button onClick={send} className="px-3 py-1 bg-indigo-600 text-white rounded">{loading? '...' : 'Send'}</button>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={()=>setOpen(true)} className="mt-2 w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center">💬</button>
      )}
    </div>
  )
}