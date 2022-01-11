``` javascript
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
const mediaDoAluno = ((ex * 1) + (p1 * 2) + (p2 * 3)) / (1 + 2 + 3)

if (mediaDoAluno >= 9) {
  return "A"
}else if (mediaDoAluno < 9 && mediaDoAluno >= 7.5) {
  return "B"
}else if (mediaDoAluno < 7.5 && mediaDoAluno >=6){
  return "C"
}else{
  return "D"
  }
}
```
