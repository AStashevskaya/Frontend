export default function getWeekDay(num) {
  switch (num) {
    case 0:
      return 'Jan';
    case 1:
      return 'Feb';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'Jun';
    case 6:
      return 'Jul';
    case 7:
      return 'Aug';
    case 8:
      return 'Sep';
    case 9:
      return 'Oct';
    case 10:
      return 'Nov';
    default:
      return 'Dec';
  }
}
