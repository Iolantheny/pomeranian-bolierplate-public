export async function handleRequest(id, method, data) {
  return new Promise(async (resolve, reject) => {
    const respons = await fetch(`http://localhost:3333/api/todo/${id}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const responsJSON = await respons.json();

    if (respons.status === 200) {
      resolve(responsJSON);
    }

    if (respons.status !== 200 && responsJSON.message) {
      reject(responsJSON.message);
    }
  });
}
