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
    console.log(location)
    this.query = this.query.find({ ...location })
    return this
  }
}

export default APIFeatures