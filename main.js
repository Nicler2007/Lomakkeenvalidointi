

document.getElementById("form").addEventListener("submit", function(event) {
    let isValid = true;

    function showError(inputId, message) {
        const input = document.getElementById(inputId);
        const errorElement = document.getElementById(inputId + "Error");

        if (message) {
            errorElement.textContent = message;
            if (input) input.classList.add("error-border");
            isValid = false;
        } else {
            errorElement.textContent = "";
            if (input) input.classList.remove("error-border");
        }
    }

    // Nimi (pakollinen)
    const name = document.getElementById("name").value.trim();
    showError("name", name === "" ? "Nimi on pakollinen." : "");

    // Osoite (pakollinen)
    const address = document.getElementById("address").value.trim();
    showError("address", address === "" ? "Osoite on pakollinen." : "");

    // Sukupuoli (pakollinen)
    const gender = document.querySelector('input[name="gender"]:checked');
    showError("gender", !gender ? "Valitse sukupuoli." : "");

    // Kieli (pakollinen)
    const language = document.querySelector('input[name="language"]:checked');
    showError("language", !language ? "Valitse kieli." : "");

    // Käyttäjä ID (min. 6 merkkiä)
    const userId = document.getElementById("userId").value.trim();
    showError("userId", userId.length < 6 ? "Käyttäjä ID:n pitää olla vähintään 6 merkkiä." : "");

    // Salasana (6 merkkiä, iso kirjain, numero, erikoismerkki)
    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@£$€&%#]).{6,}$/;
    showError("password", !passwordRegex.test(password) ? "Salasanan tulee olla vähintään 6 merkkiä ja sisältää iso kirjain, numero ja erikoismerkki." : "");

    // Sähköposti (oikea muoto)
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    showError("email", !emailRegex.test(email) ? "Anna kelvollinen sähköpostiosoite." : "");

    // Postinumero (5 numeroa)
    const postalCode = document.getElementById("postalCode").value.trim();
    const postalCodeRegex = /^\d{5}$/;
    showError("postalCode", !postalCodeRegex.test(postalCode) ? "Postinumeron tulee olla 5 numeroa." : "");

    if (!isValid) event.preventDefault();
});


// Maa (valittava)
const countries = [
    { code: "FI", name: "Suomi" },
    { code: "SE", name: "Ruotsi" },
    { code: "NO", name: "Norja" },
    { code: "DK", name: "Tanska" },
    { code: "EE", name: "Viro" },
    { code: "US", name: "Yhdysvallat" },
    { code: "GB", name: "Iso-Britannia" },
    { code: "FR", name: "Ranska" },
    { code: "DE", name: "Saksa" },
    { code: "IT", name: "Italia" },
    { code: "ES", name: "Espanja" },
    { code: "CN", name: "Kiina" },
    { code: "JP", name: "Japani" },
    { code: "IN", name: "Intia" },
    { code: "BR", name: "Brasilia" },
    { code: "AU", name: "Australia" },
    { code: "MX", name: "Meksiko" },
    { code: "RU", name: "Venäjä" },
    { code: "ZA", name: "Etelä-Afrikka" },
    { code: "Other", name: "Muu maa" }
];

const countrySelect = document.getElementById("country");

// Lisää "Valitse maa" -vaihtoehto ensin
const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.textContent = "Valitse maa";
countrySelect.appendChild(defaultOption);

// Lisää maat dynaamisesti
countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = country.name;
    countrySelect.appendChild(option);
});