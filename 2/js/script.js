"use strict"

class FormChecker {
    constructor() {
        this.refs = {
            name: /^([a-z]|[а-я])+$/i,
            phone: /\+\d\(\d{3}\)\d{3}-\d{4}/,
            email: /(\w+|\w+\.\w+|\w+-\w+)@\w+\.[a-z]{2,3}/i
        }
        this._init()
    }

    _init() {
        document.querySelector('.submit').addEventListener('click', (evt) => {
            this._checkInputs(evt)
        })
    }

    _checkInputs(evt) {
        this.inputs = evt.target.parentNode.querySelectorAll('input')
        for (let inputField of this.inputs) {
            this.inputName = inputField.name
            if (!inputField.value || !inputField.value.match(this.refs[this.inputName])) {
                inputField.classList.add('error')
            } else {
                inputField.classList.remove('error')
            }
        }
    }
}

let checker = new FormChecker()