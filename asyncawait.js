const apiUrl = 'https://rickandmortyapi.com/api/character/';

async function getCharacterData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json(); 
        console.log("Data berhasil diambil (Async/Await):", data);
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}

getCharacterData();