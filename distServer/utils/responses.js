"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var authenticationError = exports.authenticationError = function authenticationError(response, message) {
  return response.status(401).json(message);
};

var serverError = exports.serverError = function serverError(response, error) {
  return response.status(500).json(error);
};

var deleteSuccess = exports.deleteSuccess = function deleteSuccess(response) {
  return response.status(204).json({});
};

var badRequest = exports.badRequest = function badRequest(response, message) {
  return response.status(400).json({ message: message });
};

var notFoundError = exports.notFoundError = function notFoundError(response, message) {
  return response.status(404).json({ message: message });
};

var conflictError = exports.conflictError = function conflictError(response, message) {
  return response.status(409).json(message);
};

var responseOk = exports.responseOk = function responseOk(response, data) {
  return response.status(200).json({ data: data });
};

var responseCreateOk = exports.responseCreateOk = function responseCreateOk(response, data) {
  return response.status(201).json({ data: data });
};