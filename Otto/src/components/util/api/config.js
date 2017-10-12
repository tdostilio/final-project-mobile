export default {
  USER_INFO: 'userInfo',
  CREATE_ACCOUNT: 'http://localhost:3000/signup',
  LOGIN_ACCOUNT: 'http://localhost:3000/signin',
  CREATE_GROUP: (endpoint, id) => `http://localhost:3000/${endpoint}/${id}`
  // endpoints for create_group (adding contact to a group)
  // family
  // close_friends
  // friends
}
