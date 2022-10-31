

export const getFetch = async () => {   
    const res = await fetch('http://localhost:5000/users/userlist')
     .then(response => response.json())
      return res   
 }
 
 export const postFetch = async (data) => {
     const res = await fetch('http://localhost:5000/users/adduser',{
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
     })
     .then(response => response.json())
      return res  
 }

 export const putFetch = async (data) => {
    const res = await fetch(`http://localhost:5000/users/updateusers/${data.id}`,
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
    })
    .then(response => response.json())
     return res  
}


export const deleteFetch = async (id) => {
    const res = await fetch(`http://localhost:5000/users/deleteusers/${id}`,
    {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          },
          
    })
    .then(response => response.json())
     return res  
}