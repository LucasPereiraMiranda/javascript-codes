function Pessoa(){
    this.idade = 0
    const self = this
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(self), 1000)
}

new Pessoa 
