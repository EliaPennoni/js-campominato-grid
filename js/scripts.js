console.log('js connected')

const startButton = document.querySelector('button');
startButton.addEventListener('click', function () {
    console.log('startbutton', startButton, typeof startButton);
    const griglia = document.getElementById('pratofiorito')
    for (let i = 1; i <= 100; i++) {

        const newCell = document.createElement('div');
        newCell.innerHTML = i;
        newCell.addEventListener('click', function() {
            newCell.classList.add('cliccato');
            console.log(i)
        })
        griglia.append(newCell);
    }



});