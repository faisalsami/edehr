import demoHelper from '../../helpers/demo-helper'
import sKeys from '../../helpers/session-keys'

const debugDS = false

const _clearDemo = () => {
  localStorage.removeItem(sKeys.DEMO_TOKEN)
  localStorage.removeItem('AcceptTerms')
}
const _getDemoToken = () => localStorage.getItem(sKeys.DEMO_TOKEN)
const _setDemoToken = (token) => localStorage.setItem(sKeys.DEMO_TOKEN, token)

const getters = {
  demoToken: function () {
    return _getDemoToken()
  },
  demoTokenData: function (state) {
    return state.demoData
  },
  demoAssignment: function (state) {
    return state.assignment
  },
  demoPersona: function (state) {
    return state.persona
  },
  isDemo: function (state) {
    // yes this is an active demo is the demo data has been loaded
    return state.demoData.constructor === Object && Object.keys(state.demoData).length > 0
  },
  agreesWithTerms: function (state) {
    return state.acceptsTerms
  },
  getDemoFeatureFlag: function (state) {
    return state.demoFeature
  }
}

const state = {
  demoData: {}, // load from a fetch token
  persona: {}, // selected by user on the Demo page
  assignment: {}, // selected by the user on the DemoCourse page
  acceptsTerms: false,
  demoFeature: false
}

const actions = {
  acceptsTerms: function ({ commit }, data) {
    commit('setAcceptTerms', data)
  },
  createToolConsumer: function () {
    return demoHelper.createToolConsumer()
      .then(res => {
        const { demoToken } = res.data
        _setDemoToken(demoToken)
        return Promise.resolve(demoToken)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  demoLogout: function ({ commit }) {
    const token = _getDemoToken()
    if (token) {
      if (debugDS) console.log('demoStore logout t', token)
      return demoHelper.demoLogout(token)
        .then(res => {
          if (debugDS) console.log('demoStore logout server side done. Next clear localstorage')
          _clearDemo()
          commit('setDemoData', {})
        })
        .catch(err => {
          console.error('demoStore logout ERROR', err)
          _clearDemo()
          commit('setDemoData', {})
        })
    } else {
      console.error('demoStore logout no token')
      return Promise.resolve()
    }
  },
  setDemoFeatureFlag: function ({ commit }, data) {
    commit('demoFeature', data)
  },
  loadDemoData: function ({ commit }) {
    const token = _getDemoToken()
    if (!token ) {
      console.error('Unexpected no demo token when calling loadDemoData')
      return Promise.reject('No token')
    }
    return demoHelper.dhLoadDemoData(token)
      .then(res => {
        const { demoData } = res.data
        commit('setDemoData', demoData)
        return Promise.resolve(demoData)
      })
      .catch(err => {
        console.error('DemoStore loadDemoData ERROR', err)
        return Promise.reject(err)
      })
  },
  submitPersona: function (none, submitData) {
    const token = _getDemoToken()
    return demoHelper.submitPersona(token, submitData)
      .then(res => {
        return Promise.resolve(res.data)
      }).catch(err => {
        return Promise.reject(err)
      })
  },
  setDemoToken: function (none, demoToken) {
    _setDemoToken(demoToken)
  },
  setDemoData: function ({ commit }, data) {
    commit('setDemoData', data)
  },
  setDemoAssignment: function ({ commit }, data) {
    commit('setAssignment', data)
  },
  setDemoPersona: function ({ commit }, data) {
    commit('setPersona', data)
  },
  initialize: function ({ commit }) {
    commit('initialize')
  },
}

const mutations = {
  initialize: function (state) {
    state.acceptsTerms = localStorage.getItem('AcceptTerms') === 'true'
    state.demoFeature = localStorage.getItem('DemoFeature') === 'true'
    const stashedDemoData = localStorage.getItem('DemoData')
    if (stashedDemoData) {
      if (debugDS) console.log('DemoStore restore stashed DemoData', stashedDemoData)
      state.demoData = JSON.parse(stashedDemoData)
    }
    const stashedPersona = localStorage.getItem('DemoPersona')
    if (stashedPersona) {
      if (debugDS) console.log('DemoStore restore stashed persona', stashedPersona)
      state.persona = JSON.parse(stashedPersona)
    }
    if (debugDS) console.log('DemoStore initialize: accept terms, demo feature state', state.acceptsTerms, state.demoFeature)
  },
  setAcceptTerms: function (state, data) {
    if (debugDS) console.log('DemoStore set accept terms data', data)
    state.acceptsTerms = data.accepts
    localStorage.setItem('AcceptTerms', data.accepts)
  },
  setDemoData: function (state, data) {
    if (debugDS) console.log('DemoStore set demo data', data)
    state.demoData = data
    localStorage.setItem('DemoData', JSON.stringify(data))
  },
  demoFeature: function (state, data) {
    if (debugDS) console.log('DemoStore set demo feature', data)
    state.demoFeature = data
    localStorage.setItem('DemoFeature', data)
  },
  setAssignment: function (state, data) {
    if (debugDS) console.log('DemoStore set assignment', data)
    state.assignment = data
  },
  setPersona: function (state, data) {
    if (debugDS) console.log('DemoStore set persona', data)
    state.persona = data
    localStorage.setItem('DemoPersona', JSON.stringify(data))
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}