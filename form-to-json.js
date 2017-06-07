class FormToJSON {

  constructor (selector) {
    this.data = {}
    this.form = document.querySelector(selector)
    this.supportedFields = ['input', 'select', 'textarea']
  }

  init () {
    const formElements = this.form.querySelectorAll(this.supportedFields)
    const len = formElements.length
    for (let i = 0; i < len; i++) {
      this.prepareData(formElements[i])
    }
  }

  addData (key, value) {
    this.data[key] = value
  }

  getData () {
    return this.data
  }

  prepareData (field) {
    if (!field.name) {
      return console.warn('[Warning in `FormToJSON.init()`] Missing `name` attribute on some form element. It will not be included in the returned object.')
    }
    switch (field.type) {
      case 'checkbox':
        this.addData(field.name, field.checked)
        break
      case 'radio':
        if (field.checked) this.addData(field.name, field.value)
        break
      default:
        this.addData(field.name, field.value)
    }
  }

}
