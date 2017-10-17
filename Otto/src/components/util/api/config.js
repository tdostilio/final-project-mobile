export default {
  USER_INFO: 'userInfo',
  FEED: 'feed',
  CREATE_ACCOUNT: 'https://myottoapp.com/signup',
  LOGIN_ACCOUNT: 'https://myottoapp.com/signin',
  CREATE_GROUP: (endpoint, id) => `https://myottoapp.com/${endpoint}/${id}`,
  GET_GROUP: (endpoint, id) => `https://myottoapp.com/${endpoint}/${id}`,
  ADD_REMINDER: (endpoint, id) => `https://myottoapp.com/${endpoint}/reminder/${id}`
}
