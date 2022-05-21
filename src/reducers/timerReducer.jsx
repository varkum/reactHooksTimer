
export default function timerReducer(state, action) {
  switch(action.type) {
    case 'increment':
      return time + 1
    case 'stop':
      return time
    case 'reset':
      return 0
    default:
      throw new Error()
  }
}