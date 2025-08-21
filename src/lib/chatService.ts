import { faqs } from '../data/faqs'

export type Message = { role: 'user' | 'bot'; text: string }

export async function getLocalAnswer(question: string) {
  const q = question.trim().toLowerCase()
  const match = faqs.find(f => f.q.toLowerCase().includes(q) || q.includes(f.q.toLowerCase().split(' ')[0]))
  if (match) return match.a
  return "Sorry — I don't have a prepared answer for that. You can email me at manizabayoelie@gmail.com or try another question."
}

export async function getOpenAIAnswer(question: string) {
  const key = import.meta.env.VITE_OPENAI_API_KEY
  if (!key) throw new Error('OpenAI API key not set in VITE_OPENAI_API_KEY')

  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: question }],
      max_tokens: 200
    })
  })
  const data = await resp.json()
  return data?.choices?.[0]?.message?.content ?? 'No answer returned.'
}