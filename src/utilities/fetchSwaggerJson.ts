const fetchSwaggerJson = (link: string) => {
  fetch(link).then(res => res.json)
  
}

export default fetchSwaggerJson