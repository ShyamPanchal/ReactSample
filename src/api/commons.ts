export const API_ENDPOINT = "http://httpbin.org";

type Header = {
  "Content-Type"?: string;
  "Accept-Encoding"?: string;
  Accept: string;
  Authorization?: string;
};

export const generateHeader = (
  token?: string,
  contentType = "application/json; charset=utf-8"
) => {
  let header: Header = {
    Accept: "application/json",
    "Accept-Encoding": "gzip",
  };

  if (contentType) {
    header["Content-Type"] = contentType;
  }
  if (token) {
    header = {
      ...header,
      Authorization: token,
    };
  }
  return header;
};

export const generateHeaderMultipart = (token?: string) => {
  let auth = {};
  if (token) {
    auth = {
      Authorization: token,
    };
  }
  const header = new Headers({
    Accept: "application/json",
    "Accept-Encoding": "gzip",
    ...auth,
  });

  return header;
};

export const postData = (
  data: any,
  url: string = API_ENDPOINT,
  token?: string
) => {
  return fetch(url, {
    method: "POST",
    headers: generateHeader(token),
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then((response) => {
      if (response.status === 400 || response.status === 401) {
        return response.json();
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const postDataMultipart = (
  formData: FormData,
  url: string = API_ENDPOINT,
  token?: string
) => {
  return fetch(url, {
    method: "POST",
    headers: generateHeaderMultipart(token),
    body: formData,
  })
    .then((response) => {
      if (response.status === 400 || response.status === 401) {
        return response.json();
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const putDataMultipart = (
  formData: FormData,
  url: string = API_ENDPOINT,
  token?: string
) => {
  return fetch(url, {
    method: "PUT",
    headers: generateHeaderMultipart(token),
    body: formData,
  })
    .then((response) => {
      if (response.status === 400 || response.status === 401) {
        return response.json();
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getAsyncData = async (
  url: string = API_ENDPOINT,
  token?: string
) => {
  return await fetch(url, {
    method: "GET",
    headers: generateHeader(token),
  })
    .then((response) => {
      if (!response.ok) {
        try {
          return response.json();
        } catch (e) {
          throw new Error("HTTP status " + response.status);
        }
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getData = (
  url: string = API_ENDPOINT,
  token?: string,
  contentType?: string
) => {
  return fetch(url, {
    method: "GET",
    headers: generateHeader(token, contentType),
  })
    .then((response) => {
      if (!response.ok) {
        try {
          return response.json();
        } catch (e) {
          throw new Error("HTTP status " + response.status);
        }
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteData = (url: string = API_ENDPOINT, token?: string) => {
  return fetch(url, {
    method: "DELETE",
    headers: generateHeader(token),
  })
    .then((response) => {
      if (!response.ok) {
        try {
          return response.json();
        } catch (e) {
          throw new Error("HTTP status " + response.status);
        }
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const putData = (
  data: any,
  url: string = API_ENDPOINT,
  token?: string
) => {
  const body = data ? { body: JSON.stringify(data) } : {}; // body data type must match "Content-Type" header
  return fetch(url, {
    method: "PUT",
    headers: generateHeader(token),
    ...body,
  })
    .then((response) => {
      if (!response.ok) {
        try {
          return response.json();
        } catch (e) {
          throw new Error("HTTP status " + response.status);
        }
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};
