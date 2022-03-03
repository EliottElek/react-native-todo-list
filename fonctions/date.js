const getStringDay = (date) => {
  var day = "";
  var month = "";

  const days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  day = days[date.getDay()-1];
  month = months[date.getMonth()];
  return `${day} ${date.getDate()} ${month} ${date.getFullYear()}`;
};
export default getStringDay;
