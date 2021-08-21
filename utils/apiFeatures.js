class APIFeatures {
  constructor(query, queryString) {
    this.query = query
    this.queryString = queryString
  }
  search() {
    const location = this.queryString.location ? {
      address: {
        $regex: this.queryString.location,
        $options: "i"
      }
    } : {}
    // console.log(location)
    this.query = this.query.find({ ...location })
    return this
  }

  filter() {
    const queryCopy = { ...this.queryString }
    // console.log(queryCopy)
    // Remove fields from query
    const removeFields = ["location"]
    removeFields.forEach(element => delete queryCopy[element])
    // console.log(queryCopy)

    this.query = this.query.find(queryCopy)
    return this
  }
}

export default APIFeatures