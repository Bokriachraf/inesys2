function inesys2(Depart,Arrive) { 
     
     // (`id`, `nom`) 
     const arrets=[[1, 'A'],[2, 'B'],[3, 'C'],[4, 'D'],[5, 'E'],[6, 'F'],[7, 'G'],[8, 'H'],[9, 'I'],[10, 'J'],[11, 'K'],[13, 'M'],[14, 'N'],[5, 'O'],[16, 'P'],[17, 'Q'],[18, 'R'],[19, 'S'],[20, 'T'],[21, 'U'],[22, 'V'],[23, 'W'],[24, 'X'],[25, 'Y'],[26, 'Z']]          
     // (`id`, `nom`) 
     const lignes=[[1, 'Ligne 1'],[2, 'Ligne 2'],[3, 'Ligne 3'],[4, 'Ligne 4'],[4, 'Ligne 4']];
      // (`id_ligne`,`id_arret`,`num`,`sens`)
     const Lignes_arrets=[
          [1, 1, 1, 0],[1, 1, 6, 1],[1, 2, 2, 0],[1, 2, 5, 1],[1, 3, 3, 0],[1, 3, 4, 1],[1, 4, 3, 1],[1, 4, 4, 0],[1, 5, 2, 1],[1, 5, 5, 0],[1, 6, 1, 1],[1, 6, 6, 0],[2, 3, 4, 0],[2, 3, 4, 1],[2, 7, 1, 0],[2, 7, 7, 1],[2, 8, 2, 0],[2, 8, 6, 1],[2, 9, 3, 0],[2, 9, 5, 1],[2, 10, 3, 1],[2, 10, 5, 0],[2, 11, 2, 1],[2, 11, 6, 0],[2, 12, 1, 1],[2, 12, 7, 0],[3, 5, 4, 0],[3, 5, 4, 1],[3, 13, 1, 0],[3, 13, 7, 1],[3, 14, 2, 0],[3, 14, 6, 1],[3, 15, 3, 0],[3, 15, 5, 1],[3, 16, 3, 1],[3, 16, 5, 0],[3, 17, 2, 1],[3, 17, 6, 0],[3, 18, 1, 1],[3, 18, 7, 0],[4, 2, 3, 0],[4, 2, 5, 1],[4, 10, 4, 0],[4, 10, 4, 1],[4, 16, 2, 1],[4, 16, 6, 0],[4, 19, 1, 0],[4, 19, 7, 1],[4, 20, 2, 0],[4, 20, 6, 1],[4, 21, 3, 1],[4, 21, 5, 0],[4, 22, 1, 1],[4, 22, 7, 0],[5, 1, 2, 0],[5, 1, 8, 1],[5, 5, 4, 1],[5, 5, 6, 0],[5, 10, 4, 0],[5, 10, 6, 1],[5, 19, 1, 0],[5, 19, 9, 1],[5, 21, 5, 0],[5, 21, 5, 1],[5, 23, 3, 0],[5, 23, 7, 1],[5, 24, 3, 1],[5, 24, 7, 0],[5, 25, 2, 1],[5, 25, 8, 0],[5, 26, 1, 1],[5, 26, 9, 0]]

// if (Lignes_arrets=depart){

// }
// return { arrets}
let id_depart=(null);
let id_arrive=(null);
let depart_L=(null);
let arrive_L=(null);

let j=null;
for (let i=0 ; i < arrets.length; i++){
     if (arrets[i][1] === Depart) {
          id_depart=arrets[i][0]
           } else if (arrets[i][1] === Arrive) {
          id_arrive=arrets[i][0]
          
     }
}
console.log(id_depart,id_arrive)
let dist=(10)
let Dep_L=(null)
let Dep_S=(null)
let End_L=(null)
let chemin=[]

for (let i=0 ; i < Lignes_arrets.length; i++){
     if (Lignes_arrets[i][1] === id_depart && Lignes_arrets[i][2]<dist) {
          dist=Lignes_arrets[i][2]
          Dep_L=Lignes_arrets[i][0]
          Dep_S=Lignes_arrets[i][3]
          }
          else if (Lignes_arrets[i][1]===id_arrive){
               End_L=Lignes_arrets[i][0]       
           }
}
for (let i=0 ; i < Lignes_arrets.length; i++){
     if (Lignes_arrets[i][0] === Dep_L && Lignes_arrets[i][3]===Dep_S && Lignes_arrets[i][2]<=dist) {
          chemin.push(Lignes_arrets[i][1])
           }     
}
// for (let i=0 ; i < Lignes_arrets.length; i++){
//      if (Lignes_arrets[i][1]===id_arrive){
//      End_L=Lignes_arrets[i][0]       
//  }
// }

console.log(`la lignes de départ est ${Dep_L} dans le sens ${Dep_S} et le chemin de départ suivant l'id arret est ${chemin.reverse()} 
et la lignes End est ${End_L}`)


} 
        

     let De="X";
     let Ar="I"
     inesys2(De,Ar);