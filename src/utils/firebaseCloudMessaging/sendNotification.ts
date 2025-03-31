import Cookies from 'js-cookie'
export const sendEndChatNotification = async (userId: string) => {
  const accessToken = Cookies.get('accessToken1')

  try {
    const response = await fetch(`/api/notification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        userId,
        title: '토리와의 대화 저장 완료!',
        body: '토리와 나눈 대화가 우주에 별이 되었어요. 지금 바로 확인해보세요!🐰',
        data: {
          redirectUrl: '/save-chat',
        },
      }),
    })

    if (!response.ok) {
      throw new Error('알림 전송 실패')
    }

    return await response.json()
  } catch (error) {
    console.error('알림 전송 중 오류 발생:', error)
    throw error
  }
}
