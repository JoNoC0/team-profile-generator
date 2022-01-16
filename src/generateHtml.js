function generateHtml(employeeArr) {
    let employeeCards = ''
    // create employee cards and add to variable employeeCards using for loop to loop through array, if statements for what type of employee making
    const log = employeeArr.map(function() {
        console.log(employeeArr);
    }) 

    let main = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    // use bootstrap to make cards add to employeeCards
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    <nav class ="navbar navbar-dark bg-dark mb-5">
        <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
    </nav>
    <div class="container">
        <div class="row>
    ${employeeCards}
</body>
</html>
`
    return main
}

module.exports = generateHtml;