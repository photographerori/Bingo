const columns = []

const createColumn = function (col) {
  const source = []
  for (let i = 0; i < 15; i++) {
    source[i] = i + 1 + 15 * col
  }

  const column = []
  for (let n = 0; n < 5; n++) {
    column[n] = source.splice(Math.floor(Math.random() * source.length), 1)[0]
  }
  return column
}

const createColumns = function () {
  for (let i = 0; i < 5; i++) {
    columns[i] = createColumn(i)
  }
  columns[2][2] = "FREE"
  return columns
}

const showBingo = function () {
  for (let row = 0; row < 5; row++) {
    const tr = document.createElement("tr")
    for (let col = 0; col <= 4; col++) {
      const td = document.createElement("td")
      td.textContent = columns[row][col]
      tr.append(td)
    }
    const tbody = document.querySelector("tbody")
    tbody.append(tr)
  }
}

createColumns()
showBingo()
