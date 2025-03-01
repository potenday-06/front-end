import Cookies from 'js-cookie'

// const mockChatList = Array.from({ length: 10 }, (_, index) => index).map(
//   (num) => ({
//     starId: num,
//     name: `star ${num}`,
//     createdAt: `${num}일전`,
//   })
// )

export async function starList(page: number) {
  const accessToken = Cookies.get('accessToken1')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}v1/stars?page=${page}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

      credentials: 'include',
    }
  )

  if (!res.ok) {
    throw new Error(`별 목록 조회 실패: ${res.status}`)
  }

  const response = await res.json()

  return response.data

  // return {
  //   totalCount: mockChatList.length,
  //   isFirst: page === 1,
  //   isLast: page === Math.floor(mockChatList.length / 3),
  //   content: [...mockChatList].splice(3 * (page - 1), 3),
  // }
}
