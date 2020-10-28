export function set(name, value){
    localStorage.set(name, JSON.stringify(value))
}
// мы передаем аргумент сабст для того, чтобы когда вызываем метод гетБ а в сторедже ничего нетБ нам не возвращалось андефайнд
export function get(name, sabst = null){
   return JSON.parse(localStorage.get(name) || sabst) 
}