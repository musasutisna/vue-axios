import { useMessageStore } from './message'

export default function (api, defaultConfig = null) {
  const message = useMessageStore()

  /**
   * Combine with default config.
   *
   * @param   object
   * @return  object
   */
  function combineWithDefaultConfig(config) {
    var newConfig = {}

    if (defaultConfig instanceof Object) {
      newConfig = { ...defaultConfig }
    }

    if (config instanceof Object) {
      newConfig = { ...newConfig, ...config }
    }

    return newConfig
  }

  /**
   * Request with GET method.
   *
   * @param   string
   * @param   object
   * @param   boolean
   * @return  mixed
   */
  async function apiGET(url, config = null, showErr = true) {
    let result = null

    config = combineWithDefaultConfig(config)

    try {
      result = await api.get(url, config)
    } catch (err) {
      result = false

      if (showErr) {
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
   * @param   string
   * @param   object
   * @param   boolean
   * @return  mixed
   */
  async function apiPOST(url, data = null, config = null, showErr = true) {
    let result = null

    try {
      result = await api.post(url, data, config)
    } catch (err) {
      result = false

      if (showErr) {
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
   * @param   string
   * @param   object
   * @param   boolean
   * @return  mixed
   */
  async function apiPUT(url, data = null, config = null, showErr = true) {
    let result = null

    try {
      result = await api.put(url, data, config)
    } catch (err) {
      result = false

      if (showErr) {
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
   * @param   string
   * @param   object
   * @param   boolean
   * @return  mixed
   */
  async function apiDELETE(url, config = null, showErr = true) {
    let result = null

    try {
      result = await api.delete(url, config)
    } catch (err) {
      result = false

      if (showErr) {
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
    apiGET,
    apiPOST,
    apiPUT,
    apiDELETE
  }
}
