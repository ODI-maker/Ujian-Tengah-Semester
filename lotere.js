function Lottery(num) {
    return new Promise((resolve, reject) => {
        if (num < 1 || num > 100) {
            return reject("Angka harus antara 1 sampai 100!");
        }

        console.log("Mengundi... Harap tunggu 10 detik.");

        setTimeout(() => {
            const angkaAcak = Math.floor(Math.random() * 100) + 1;

            console.log(`Angka undian keluar: ${angkaAcak}, Angka tebakanmu: ${num}`);

            if (num === angkaAcak) {
                resolve("Selamat! Anda memenangkan lotere!");
            } else {
                reject("Maaf, Anda tidak memenangkan lotere, silakan coba lagi.");
            }
        }, 10000); 
    });
}

Lottery(5)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log('undian lotre telah berakhir.'));