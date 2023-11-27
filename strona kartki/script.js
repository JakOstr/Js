function funkcja() {
const wyborr = document.getElementById('wyborr');
const wybrane = wyborr.value;
const nadawca = document.getElementById('nadawca').value;
const Adres = document.getElementById('Adres').value;
const wiad = document.getElementById('wiad').value;

const data = {
    RodzajKartki: wybrane,
    Nadawcaa: nadawca,
    ADress: Adres,
    WIadomość: wiad
  };

 
alert('Wybrana karta: ' + wybrane + '; Nazwa nadawcy: ' + nadawca
 + '; Adres odbiorcy: ' + Adres + '; Treść karty: ' + wiad);


  // Tutaj normalnie byłoby wysłanie danych do serwera, ale dla przykłądu są alerty
}
