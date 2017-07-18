import {ADD_COLLECT, REMOVE_COLLECT} from './mutation-types'
export const mutations = {
  [ADD_COLLECT](state, n){
    let flag = state.collect.some(item=>item.id === n.id);
    console.log('mutations.js line4', flag);
    if(!flag){
      state.collect.push(n);
    }
  }
};
