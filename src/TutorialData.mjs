/**
 * @typedef {Object} TutorialData
 *  @property {String} title - Title of card
 *  @property {String} description - Card's description
 *  @property {String} bgColor - Card's background color
 *  @property {String} image - Image src path
 */
/** 
 * Incoming card data
 * @type {TutorialData[]}
 * */
export const tutorialData = [
  {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "#4da2a9",
      image: "/time_managment.svg"
  },
  {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a ccelerar el teu aprenentatge.",
      bgColor: "#d3d4d9",
      image: "/programming.svg"
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "#ffd167",
      image: "/meditation.svg"
    },
]
