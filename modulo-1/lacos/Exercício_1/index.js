const quantosAnimaisTem = Number(prompt("Quantos animais de estimação você possui?"))
    if (quantosAnimaisTem <= 0) {
        console.log("Que pena! Você pode adotar um pet!!")
    } 
    const pets = []
        for(i = 0; i < quantosAnimaisTem; i++) {
            pets.push(prompt("Qual o nome do seu pet?"))

        }
        console.log(pets)    




