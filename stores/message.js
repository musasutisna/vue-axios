import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('vueaxios_message', () => {
  const loading = ref({})
  const warning = ref({})

  /**
   * Toggle loading message.
   *
   * @param   string
   * @param   object
   * @return  void
   */
  function toToggleLoading(id, {
    display = true,
    text = null,
    icon = null,
    prefix = '',
    suffix = ''
  } = {}) {
    loading.value[id] = {
      display,
      text: `${prefix}${text}${suffix}`,
      icon
    }
  }

  /**
   * Toggle warning message.
   *
   * @param   string
   * @param   object
   * @return  void
   */
  function toToggleWarning(id, {
    display = true,
    close = null,
    icon = null,
    text = null,
    prefix = '',
    suffix = ''
  } = {}) {
    warning.value[id] = {
      display,
      close,
      icon,
      text: null
    }

    if (text instanceof Object) {
      let newText = ''

      for (var msg of text) {
        newText += msg.msg ? `${prefix}${msg.msg || ''}${suffix}` : ''
      }

      warning.value[id].text = newText
    } else {
      warning.value[id].text = `${prefix}${text}${suffix}`
    }
  }

  return {
    loading,
    warning,
    toToggleLoading,
    toToggleWarning
  }
})
