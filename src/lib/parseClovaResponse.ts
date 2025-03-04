export function parseClovaResponse(responseText: string): string {
  const resultEventMatch = responseText.match(/event:result\ndata:(.*?)\n\n/s)
  if (resultEventMatch && resultEventMatch[1]) {
    try {
      const resultData = JSON.parse(resultEventMatch[1])
      return resultData.message.content
    } catch (error) {
      console.error('ai 메시지 파싱 실패:', error)

      // 파싱 실패 시 전체 텍스트 반환
      return responseText
    }
  }
  return '응답을 처리할 수 없습니다.'
}
