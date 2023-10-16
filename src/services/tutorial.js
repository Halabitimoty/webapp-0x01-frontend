import http from "../api";

const getAll = () => {
  return http.get("/tutorials");
};

const get = (id) => {
  return http.get(`/tutorials/${id}`);
};

const create = (data) => {
  return http.post("/tutorials", data);
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const deletes = (id) => {
  return http.delete(`/tutorials/${id}`);
};

const deleteAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = (title) => {
  return http.get(`/tutorials?title=${title}`);
};

const crud = {
  getAll,
  get,
  create,
  update,
  deletes,
  deleteAll,
  findByTitle,
};

export default crud;
