const apiUrl = 'https://rickandmortyapi.com/api/character/';

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log("Data berhasil diambil:", data);
    })
    .catch((error) => {
        console.error("Terjadi kesalahan:", error);
    });