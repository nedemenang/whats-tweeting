export const authenticationError = (response, message) => response.status(401).json(message);

export const serverError = (response, error) => response.status(500).json(error);

export const deleteSuccess = response => response.status(204).json({});

export const badRequest = (response, message) => response.status(400).json({message });

export const notFoundError = (response, message) => response.status(404).json({message });

export const conflictError = (response, message) => response.status(409).json(message);

export const responseOk = (response, data) => response.status(200).json({data});

export const responseCreateOk = (response, data) => response.status(201).json({data});