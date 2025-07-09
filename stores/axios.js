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
   * Update default config.
   *
   * @param   object
   * @return  void
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
   * Renew default config.
   *
   * @param   mixed
   * @return  void
   */
  function renewDefaultConfig(config) {
    defaultConfig = config
  }

  /**
   * Request with GET method.
   *
   * @param   string
   * @param   object
   * @param   boolean
   * @return  mixed
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
   * @param   string
   * @param   object
   * @param   boolean
   * @return  mixed
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
   * @param   string
   * @param   object
   * @param   boolean
   * @return  mixed
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
   * @param   string
   * @param   object
   * @param   boolean
   * @return  mixed
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
