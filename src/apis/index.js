export function httpGet(url) {
  return fetch(url).then(response => response.json())
}

export function httpPost(request) {
  console.log("requestforcreate", request)
  fetch(request?.url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request?.body)
  }).then(response => response.json())
}

export function httpDelete(url) {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  }).then(response => {
    return response.json()})
}

export function httpUpdate(req) {
  return fetch(req.url, {
    method: "PUT",
    body:JSON.stringify(req?.body),
    headers: {
      "Content-Type": "application/json"
    },
  }).then(response => response.json())
}

export function httpGetTea(url) {
  return fetch(url).then(response => response.json())
}

export function httpPostTea(request) {
  fetch(request?.url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request?.body)
  }).then(response => response.json())
}

export function httpDeleteTea(url) {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  }).then(response => {
    return response.json()})
}

export function httpUpdateTea(req) {
  return fetch(req.url, {
    method: "PUT",
    body:JSON.stringify(req?.body),
    headers: {
      "Content-Type": "application/json"
    },
  }).then(response => response.json())
}