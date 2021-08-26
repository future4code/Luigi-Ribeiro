function calculaNota(ex, p1, p2) {
  let ponderada = (ex+p1*2+p2*3)/6 
  
  if (ponderada>=9)
  {
    return "A"
  }
  else if (ponderada>=7.5)
  {
    return "B"
  }
  else if (ponderada>=6)
  {
    return "C"
  }
  else
  {
    return "D"
  }
}