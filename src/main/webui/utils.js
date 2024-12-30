export function setupSelectAll(element, childElementsName) {
  element.addEventListener('click', () => {
    document.getElementsByName(childElementsName)
    .forEach((it) => {
      it.checked = element.checked === true;
    })
  })
}

export function setupDeselectParent(elementName, parentElement) {
  document.getElementsByName(elementName)
  .forEach(el => {
    el.addEventListener('click', () => {
      const parent = document.getElementById(parentElement);
      if (el.checked === false) {
        parent.checked = false
      } else {
        var allSelected = document.getElementsByName(el.name)
        .values()
        .every(element => element.checked === true)
        if (allSelected) {
          parent.checked = true
        }
      }

    })
  })
}

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}