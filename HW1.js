function fileSorting(filename) {
  const fs = require('fs')
  const fileInfo = fs.readFileSync(filename, 'utf8')
  const line = fileInfo.split('\n')
  
  var dataArr = [];
  for (const item of line) {
    dataArr.push(item.split(','))
  }

  for (var i = 0; i < dataArr.length; i++) {
    for (var j = i+1; j < dataArr.length; j++) {
      if (dataArr[i][0].codePointAt(0) > dataArr[j][0].codePointAt(0)) {
      let tempVal = dataArr[i]
      dataArr[i] = dataArr[j]
      dataArr[j] = tempVal
      }
    }
  }
  for (var i = 0; i < dataArr.length; i++){
    console.log(dataArr[i].toString())
  }

  console.log("\n")
  for (var i = 0; i < dataArr.length; i++) {
    for (var j = i+1; j < dataArr.length; j++) {
      if (dataArr[i][0].codePointAt(0) < dataArr[j][0].codePointAt(0)) {
      let tempVal = dataArr[i]
      dataArr[i] = dataArr[j]
      dataArr[j] = tempVal
      }
    }
  }

  for (var i = 0; i < dataArr.length; i++){
    console.log(dataArr[i].toString())
  }
}
  fileSorting("Hw1_SampleFile.txt")