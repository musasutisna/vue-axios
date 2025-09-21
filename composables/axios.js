import axios from 'axios'
import { useMessageStore } from '../stores/message'

export function useAxios(initialConfig, defaultConfig = null) {
  const message = useMessageStore()
  const api = axios.create(initialConfig)

  /**
   * Return combined with default config.
   *
   * @params {Object} config - axios configuration will be combined with default config.
   * @returns {Object}
   */
  function combineWithDefaultConfig(config) {
    var newConfig = {}

    if (defaultConfig !== null && defaultConfig instanceof Object) {
      newConfig = { ...defaultConfig }
    }

    if (config !== null && config instanceof Object) {
      newConfig = { ...newConfig, ...config }
    }

    return newConfig
  }

  /**
   * Update default config with modified current default config.
   *
   * @params {Object} config - axios configuration will be store as default config.
   * @returns {void}
   */
  function updateDefaultConfig(config) {
    if (defaultConfig === null) {
      defaultConfig = {}
    }

    defaultConfig = {
      ...defaultConfig,
      ...config
    }
  }


  /**
   * Renew default config with override current default config.
   *
   * @params {mixed} config - axios configuration will be set as new default config.
   * @returns {void}
   */
  function renewDefaultConfig(config) {
    defaultConfig = config
  }

  /**
   * Request with GET method.
   *
   * @params {string} url - target url will be retrive.
   * @params {Object} config - temporary axios config will be use on request.
   * @params {boolean} showMsg - state to store message from response.
   * @returns {mixed}
   */
  async function apiGET(url, config = null, showMsg = true) {
    let result = null

    config = combineWithDefaultConfig(config)

    try {
      result = await api.get(url, config)

      if (showMsg) {
        if (result.data) {
          message.toToggleSuccess(url, {
            display: true,
            close: true,
            icon: 'success',
            text: result.data.message,
            prefix: '<p>',
            suffix: '</p>'
          })
        }
      }
    } catch (err) {
      result = false

      if (showMsg) {
        if (err.response) {
          message.toToggleWarning(url, {
            display: true,
            close: true,
            icon: 'error',
            text: err.response.data?.message || err.message,
            prefix: '<p>',
            suffix: '</p>'
          })
        }
      }
    }

    return result
  }

  /**
   * Request with POST method.
   *
   * @params {string} url - target url will be requested.
   * @params {Object} data - the data will be pass to request.
   * @params {Object} config - temporary axios config will be use on request.
   * @params {boolean} showMsg - state to store message from response.
   * @returns {mixed}
   */
  async function apiPOST(url, data = null, config = null, showMsg = true) {
    let result = null

    try {
      result = await api.post(url, data, config)

      if (showMsg) {
        if (result.data) {
          message.toToggleSuccess(url, {
            display: true,
            close: true,
            icon: 'success',
            text: result.data.message,
            prefix: '<p>',
            suffix: '</p>'
          })
        }
      }
    } catch (err) {
      result = false

      if (showMsg) {
        if (err.response) {
          message.toToggleWarning(url, {
            display: true,
            close: true,
            icon: 'error',
            text: err.response.data?.message || err.message,
            prefix: '<p>',
            suffix: '</p>'
          })
        }
      }
    }

    return result
  }

  /**
   * Request with PUT method.
   *
   * @params {string} url - target url will be requested.
   * @params {Object} data - the data will be pass to request.
   * @params {Object} config - temporary axios config will be use on request.
   * @params {boolean} showMsg - state to store message from response.
   * @returns {mixed}
   */
  async function apiPUT(url, data = null, config = null, showMsg = true) {
    let result = null

    try {
      result = await api.put(url, data, config)

      if (showMsg) {
        if (result.data) {
          message.toToggleSuccess(url, {
            display: true,
            close: true,
            icon: 'success',
            text: result.data.message,
            prefix: '<p>',
            suffix: '</p>'
          })
        }
      }
    } catch (err) {
      result = false

      if (showMsg) {
        if (err.response) {
          message.toToggleWarning(url, {
            display: true,
            close: true,
            icon: 'error',
            text: err.response.data?.message || err.message,
            prefix: '<p>',
            suffix: '</p>'
          })
        }
      }
    }

    return result
  }

  /**
   * Request with DELETE method.
   *
   * @params {string} url - target url will be requested.
   * @params {Object} config - temporary axios config will be use on request.
   * @params {boolean} showMsg - state to store message from response.
   * @returns {mixed}
   */
  async function apiDELETE(url, config = null, showMsg = true) {
    let result = null

    try {
      result = await api.delete(url, config)

      if (showMsg) {
        if (result.data) {
          message.toToggleSuccess(url, {
            display: true,
            close: true,
            icon: 'success',
            text: result.data.message,
            prefix: '<p>',
            suffix: '</p>'
          })
        }
      }
    } catch (err) {
      result = false

      if (showMsg) {
        if (err.response) {
          message.toToggleWarning(url, {
            display: true,
            close: true,
            icon: 'error',
            text: err.response.data?.message || err.message,
            prefix: '<p>',
            suffix: '</p>'
          })
        }
      }
    }

    return result
  }

  return {
    updateDefaultConfig,
    renewDefaultConfig,
    apiGET,
    apiPOST,
    apiPUT,
    apiDELETE
  }
}
