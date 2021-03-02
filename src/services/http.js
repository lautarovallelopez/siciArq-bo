const get = async url => {
  const response = await fetch(`${process.env.REACT_APP_ENDPOINT}${url}`, {
    credentials: 'same-origin',
    headers: {
      referrer: process.env.REACT_APP_ENDPOINT,
      Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
    },
  });
  return response.json();
};

const post = async (url, body) => {
  const response = await fetch(`${process.env.REACT_APP_ENDPOINT}${url}`, {
    method: 'post',
    credentials: 'same-origin',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
      referrer: process.env.REACT_APP_ENDPOINT,
      Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
    },
  });
  if (response.status === 400) {
    throw new Error();
  }
  return response.json();
};

const put = async (url, body) => {
  const response = await fetch(`${process.env.REACT_APP_ENDPOINT}${url}`, {
    method: 'put',
    credentials: 'same-origin',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
      referrer: process.env.REACT_APP_ENDPOINT,
      Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
    },
  });
  return response.json();
};

const del = async (url, body) => {
  const response = await fetch(`${process.env.REACT_APP_ENDPOINT}${url}`, {
    method: 'delete',
    credentials: 'same-origin',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
      referrer: process.env.REACT_APP_ENDPOINT,
      Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
    },
  });
  if (response.status === 400) {
    throw new Error();
  }
  return response.json();
};

const postFile = async (url, file) => {
  const data = new FormData();
  data.append('file', file);

  const response = await fetch(`${process.env.REACT_APP_ENDPOINT}${url}`, {
    method: 'POST',
    credentials: 'same-origin',
    body: data,
    headers: {
      referrer: process.env.REACT_APP_ENDPOINT,
      Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
    },
  });
  return response.json();
};

export default { get, put, del, post, postFile };
