const teachers = [
    'Nathan',
    'Ed',
    'Fabio',
    'Phil',
    'Carlo',
    'Lewis',
    'Luca'
  ]; // NON MODIFICARE QUESTA VARIABILE
  
  // 1. Utilizzando un indice sull'array teachers, cambia il valore della
  // variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

    let fourthTeacher = null; /* USANDO CONST NON RIESCO AD RIASSEGNARE LA VARIABILE, C'È UN MODO DIVERSO O È GIUSTO CAMBIARE LA VARIABILE IN LET? */

    for (let index = 0; index < teachers.length; index++) {
      if ( index === 3){
        fourthTeacher = teachers[index];
      }   
    }
    console.log(fourthTeacher);

  
  // 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

    for (let index = 0; index < teachers.length; index++) {
      if (index === 4) {
        teachers[index]= 'Patrick';
      }   
    }
    console.log(teachers);

  // 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

    let lastTeacher = null;

    for (let index = 0; index < teachers.length; index++) {
      if (index === teachers.length -1){
        lastTeacher = teachers[index]
        teachers.length = teachers.length-1; 
      }
    }
    console.log(lastTeacher);
    console.log(teachers);
  
  // 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
  let firstTeacher = null;

  
  // 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
  
  // 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
  
  // 7. Verifica se 'Fabio' è presente nell'array teachers
  // e salva il risultato nella variabile isFabioPresent
  const isFabioPresent = null;
  
  // 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
  // e salvalo nella variabile lewisIndex
  const lewisIndex = null;
  
  // 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
  // separata da virgole e salvala nella variabile teachersString
  const teachersString = null;
  
  // 10. Verifica se l'array teachers è vuoto
  // e salva il risultato nella variabile isTeachersEmpty
  const isTeachersEmpty = null;