function generateHTML(data){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/stylesheet/style.css">
            <title>Team Profile</title>
    </head>
    <body>
        <h1>Employee info</h1>
        <h2>Name: ${data.name}</h2>
        <h2>ID: ${data.id}</h2>
        <h2>Email: ${data.email}</h2>
    </body>
    `
};

module.exports = generateHTML;