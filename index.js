const fs = require('fs')

fs.readFile('README_BASE.md', 'utf-8', async (err, data) => {
    if (err) {
        throw err;
    }

    const numeroRandom = Math.round(Math.random() * 1000000)

    const modificado = data
        .replace(
            /%{titulo}/gm,
            'Dynamic Readme'
        )
        .replace(
            /%{listaDeNomes}/gm,
            `- Carlos\n- Ana\n- Sérgio`
        )
        .replace(
            /%{numeroRandom}/gm,
            numeroRandom
        )

    fs.writeFile('README.md', modificado, 'utf-8', (err) => {
        if (err) {
            throw err;
        }
        console.log('Processo finalizado!');
    });
});