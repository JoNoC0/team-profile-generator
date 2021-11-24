function generateHtml(employeeArr) {
    let employeeCards = ''
    // create employee cards and add to variable employeeCards using for loop to loop through array, if statements for what type of employee making
let main = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    // use bootstrap to make cards add to employeeCards
    <title>Document</title>
</head>
<body>
    ${employeeCards}
</body>
</html>
`
    return main
}

module.exports = generateHtml;