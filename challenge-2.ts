// Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, 
// pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

// Reglas:

// - Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// - Cada nombre debe estar en una línea, alineado a la izquierda.
// - El marco está construido con * y tiene un borde de una línea de ancho.
// - La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.


function createFrame(names: string[]): string {
    let largestName = ""
    names.forEach((name)=> name.length > largestName.length ? largestName = name : null)
    const frameWidth = largestName.length + 4
  
    let response = ""
  
    for(let i=0; i<names.length;i++){
      if (i==0) response += `${"*".repeat(frameWidth)} \n`
      response += `* ${names[i]}${" ".repeat(largestName.length-names[i].length)} *\n`
      if (i==names.length-1) response += `${"*".repeat(frameWidth)}`
    }
  
    return response
  }

console.log(createFrame(["midu", "madeval", "educalvolpz"]));
