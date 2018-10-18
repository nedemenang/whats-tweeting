const QueryValidator = (request, response, next) => {
    Object.keys(request.params).forEach((key) => {
      switch (key) {
      case 'lat':
        request.check('lat', 'Please provide lattitude')
        .notEmpty();
        break;
      case 'long':
      request.check('long', 'Please provide longitude')
        .notEmpty();
        break;
      case 'geocode':
      request.check('geocode', 'Please provide geocode')
        .notEmpty();
        break;
      default:
        break;
      }
    });
    const errors = request.validationErrors();
    if (errors) {
      const message = errors[0].msg;
      response.status(400).send({ message });
    } else {
      next();
    }
  };
  
  export default QueryValidator;