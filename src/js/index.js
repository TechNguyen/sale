async function getApi(endpoint,queryParams) {
    try {
         let url = new URL('https://localhost:44391/api/' + endpoint);
         if (queryParams) {
             Object.keys(queryParams).forEach(key => url.searchParams.append(key,queryParams[key]))
         }
         const res = fetch(url, {
             method: 'GET',
         })
         return (await res).json();
    } catch (error) {
         return error;
    }
 }
 async function callApi(enpoint,data,token) {
     try {
        const res = await fetch('https://localhost:44391/api/' + enpoint, {
             method: 'POST',
             headers: {
                 "Content-Type": "application/json",
                 "Authorization": `Bearer ${token}`
             },
             body: JSON.stringify(data), 
         })
         const jsonData = await res.json(); // Chuyển đổi phản hồi thành đối tượng JSON
         console.log(jsonData); // Hiển thị dữ liệu JSON trong console
         return jsonData; // Trả về dữ liệu JSON
     } catch (error) {
         return error
     }
 }
