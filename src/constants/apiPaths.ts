const API_PATHS = {
  get api() {
    return 'https://kvk5koj7u5.execute-api.eu-west-1.amazonaws.com/dev';
  },
  get products() {
    return `${this.api}/products`;
  },
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  bff: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  cart: "https://.execute-api.eu-west-1.amazonaws.com/dev",
};

export default API_PATHS;
