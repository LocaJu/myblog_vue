import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters.js'

Vue.use(Vuex)

/** 状态定义 */
export const state = {
  loading: false,
  themeObj: 0,//主题
  keywords:'',//关键词
  errorImg: 'this.onerror=null;this.src="' + require('../../static/img/loca.jpg') + '"',
  // baseURL:'http://114.55.31.80:8080/'
  baseURL:'http://localhost:7777/'
}

export default new Vuex.Store({
    state:{
      themeObj: {
        top_image: 'static/img/loca.jpg'
      }
    },
})
