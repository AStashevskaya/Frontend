// const images = ['clode.jpg', 'dega.jpg', 'eduard.jpg', 'mashkov.jpg', 'renuar.jpg', 'repin.jpg', 'rerih.jpg', 'shagal.jpg']
let images = [...Array(148).keys()]
images = images.map(el => `${el+1}.jpg`)
console.log(images)
export {images} 