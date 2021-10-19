const defaultState = {
  // 定义 input 收缩 状态
  focused: false
}

export default function headerReducer (state = defaultState, action) {
 switch (action.type) {
   case 'search_focus':
     return {
       focused: true
     }
   case 'search_blur':
     return {
       focused: false
     }
   default:
     return state
 }
}