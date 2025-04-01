export const postMessage = async (input: string) => {
  try {
    const response = await fetch('/api/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('API 호출 실패:', errorText)
      return
    }

    const data = await response.json()

    return data.data
  } catch (error) {
    console.error('Fetch 오류:', error)
  }
}
