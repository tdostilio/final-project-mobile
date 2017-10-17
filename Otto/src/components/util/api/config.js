export default {
  USER_INFO: 'userInfo',
  FEED: 'feed',
  CREATE_ACCOUNT: 'http://localhost:3000/signup',
  LOGIN_ACCOUNT: 'http://localhost:3000/signin',
  CREATE_GROUP: (endpoint, id) => `http://localhost:3000/${endpoint}/${id}`,
  GET_GROUP: (endpoint, id) => `http://localhost:3000/${endpoint}/${id}`,
  ADD_REMINDER: (endpoint, id) => `http://localhost:3000/${endpoint}/reminder/${id}`
}
