const cf = document.getElementById('close-form')
const form = document.getElementsByTagName('form')[0]
const nameBox = document.getElementById('name')
const emailBox = document.getElementById('email')

cf.addEventListener('click', e => {
  form.classList.toggle('hide')
  cf.innerText === 'X' ? (cf.innerText = '+') : (cf.innerText = 'X')
})

form.addEventListener('submit', e => {
  e.preventDefault()
  if (nameBox.value.length === 0 && emailBox.value.length === 0) {
    nameBox.classList.add('error')
    emailBox.classList.add('error')
    alert('You must enter a name and an email address to subscribe!')
  } else if (nameBox.value.length === 0) {
    nameBox.style.border = '2px solid red'
    alert('Please enter a name to subscribe.')
  } else if (emailBox.value.length === 0) {
    emailBox.style.border = '2px solid red'
    alert('Please enter an email address to subscribe.')
  } else {
    form.parentElement.innerText = 'Thank you for subscribing!'
  }
})
