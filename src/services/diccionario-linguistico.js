import Http from './http';

const fetch = page => {
  return Http.get(`/api/diccionarioLinguistico?page=${page - 1}`);
};

export default fetch;
