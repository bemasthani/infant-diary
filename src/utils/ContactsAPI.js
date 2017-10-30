
const api =  'http://localhost:3000'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll = () => fetch(`${api}/Contactlist`, {
  headers
})
  .then(res => res.json())
  .then(data => data.Contactlist)

export const remove = (contactlist) => fetch(`${api}/Contactlist/${contactlist.id}`, {
  method: 'DELETE',
  headers
})
  .then(res => res.json())
  .then(data => data.Contactlist)

export const create = (body) => fetch(`${api}/Contactlist`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
}).then(res => res.json())
export default ContactsAPI
