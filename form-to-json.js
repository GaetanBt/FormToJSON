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
