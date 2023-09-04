export function fetchAllProucts(){
  return new Promise(async(resolve)=>{
    // Todo: we will not hard-code servcer usl here
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    resolve({data})
  })
}


export function fetchProductsByFillters(filter){
  let queryString = '';
  for(let key in filter){
    queryString+= `${key}=${filter[key]}&`
  }
  return new Promise(async(resolve)=>{
    // todo: we will not hard-code server url here
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data = await response.json()
    resolve({data})
  })
}