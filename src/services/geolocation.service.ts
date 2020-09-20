
// geolocation promise https://whatwebcando.today/articles/use-geolocation-api-promises/
const getCurrentPosition = (): Promise<Position> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve,reject)
  })
}

export const getLocation = () => {
  return getCurrentPosition()
    .then((position)=>{
      console.log(position)
      return {lat: position.coords.latitude, lng: position.coords.longitude}
    })
    .catch((err)=>{console.log(err); return {lat: 0, lng: 0}})
}