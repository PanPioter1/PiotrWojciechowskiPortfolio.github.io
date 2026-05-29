const exp = document.querySelectorAll('.MyExperience');
const projects = document.querySelectorAll('.MyProjects');
const overlay = document.getElementById('overlay');
const info = document.getElementById('Info');
const currentFile = window.location.pathname.split('/').pop();

//looking through all experience divs and adding click event to show overlay
exp.forEach(div => {
    div.addEventListener('click', function() {
        let ids = this.id
        overlay.style.display = 'flex';
        //filling info box with content from clicked div
        if (currentFile === 'mainPL.html' || currentFile === 'mainENG.html') 
        {
            if(currentFile === 'mainPL.html') 
            {
                if (ids == 'fujitsu')
                {
                    info.innerHTML = `
                        <h2>Fujitsu Polska</h3> <br>
                        <h3>Stanowisko: Asystent działu IT oraz JML team</h3> <br>
                        <h4>Opis stanowiska:</h4>
                        <p>
                            IT: <br>
                                - Naprawa sprzętu komputerowego <br>
                                - Instalacja oprogramowania <br>
                                - organizacja stanowisk pracy <br>
                            JML (Joiner, Mover, Leaver) team: <br>
                                - wdrażanie nowych pracowników do systemu <br>
                                - zmiana uprawnień i stanowiska pracowników na zlecenie ich przełożonych<br>
                                - usuwanie uprawnień pracowników odchodzących z miejsca pracy<br>
                        </p> <br>
                        <p>Okres pracy: 12.02.2024 - 8.03.2024</p> <br>
                    `
                }

                if(ids == 'komputronik')
                {
                    info.innerHTML = `
                        <h2>Komputronik</h3> <br>
                        <h3>Stanowisko: praktykant</h3> <br>
                        <h4>Opis stanowiska:</h4>
                        <p>
                            - Asystowanie przy naprawie sprzętu komputerowego <br>
                            - Instalacja oprogramowania <br>
                            - Uruchamianie sprzętu z wystawy przy otwarciu sklepu<br>
                            - Pomoc klientom w doborze sprzętu komputerowego <br>
                            - Wsparcie przy przyjmowaniu i wdrażaniu dostaw do systemu<br>
                        </p> <br>
                        <p>Okres pracy: 23.09.2024 - 18.10.2024</p> <br>
                    `
                }
            }
            if(currentFile === 'mainENG.html')
            {
                if (ids == 'fujitsu')
                {
                    info.innerHTML = `
                        <h2>Fujitsu Poland</h3> <br>
                        <h3>Position: IT and JML team Assistant</h3> <br>
                        <h4>Job description:</h4>
                        <p>
                            IT: <br>
                                - Computer hardware repair <br>
                                - Software installation <br>
                                - organizing workstations <br>
                            JML (Joiner, Mover, Leaver) team: <br>
                                - onboarding new employees to the system <br>
                                - changing employee permissions and positions at the request of their supervisors<br>
                                - removing permissions of employees leaving the workplace<br>
                        </p> <br>
                        <p>Work period: 12.02.2024 - 8.03.2024</p> <br>
                    `
                }
                if(ids == 'komputronik')
                {
                    info.innerHTML = `
                        <h2>Komputronik</h3> <br>
                        <h3>Position: intern</h3> <br>
                        <h4>Job description:</h4>
                        <p>
                            - Assisting in computer hardware repair <br>
                            - Software installation <br>
                            - Starting up exhibition equipment when the store opens<br>
                            - Helping customers choose computer equipment <br>
                            - Support in receiving and implementing deliveries into the system<br>
                        </p> <br>
                        <p>Work period: 23.09.2024 - 18.10.2024</p> <br>
                    `
                }
            }
        }
        
    });
});

//looking through all project divs and adding click event to show overlay
projects.forEach(div => {
    div.addEventListener('click', function() {
        let ids = this.id
        overlay.style.display = 'flex';
        //filling info box with content from clicked div
        if (currentFile === 'mainPL.html' || currentFile === 'mainENG.html') 
        {
            if(currentFile === 'mainPL.html') 
            {
                if (ids == 'ItShop')
                {
                    info.innerHTML = `
                        <h2>Sklep IT</h3> <br>
                        <h4>Opis projektu:</h4>
                        <p>
                            Strona internetowa sklepu komputerowego stworzona przy użyciu HTML, CSS oraz JavaScript. <br>
                            Zawiera katalog produktów, koszyk zakupowy oraz formularz kontaktowy. <br>
                            Projekt jest w pełni responsywny i dostosowany do różnych urządzeń. <br>
                            Strona była robiona w grupach 2-osobowych. <br>
                            Osobiście utworzyłem większość kodu HTML oraz JavaScript, treść została stworzona przez mojego kolegę z grupy. <br>
                        </p> <br>
                        <a class="FramedLinkBox" href="https://panpioter1.github.io/ITShop.github.io/asortyment.html" target="_blank" rel="noopener noreferrer">Odwiedź podgląd strony</a>
                    `
                }

                if(ids == 'MuseumSite')
                {
                    info.innerHTML = `
                        <h2>Strona muzeum</h3> <br>
                        <h4>Opis projektu:</h4>
                        <p>
                            Strona internetowa muzeum stworzona przy użyciu HTML, CSS, JavaScript oraz PHP. <br>
                            Zawiera informacje o wystawach, godzinach otwarcia oraz lokalizacji muzeum. <br>
                            Projekt jest w pełni responsywny i dostosowany do różnych urządzeń. <br>
                            Strona była robiona w grupach 4-osobowych w ramach projektu zaliczeniowego. <br>
                            Osobiście zajmowałem się projektowaniem bazy danych oraz implementacją skryptów JavaScript w raz z jedną dodatkową osobą. <br> 
                        </p> <br>
                        <p>Niestety przez prawa autorskie nie jestem w stanie udostępnić pełnej strony wraz z bazą danych, jednak poniżej znajdzie się link do repozytorium zawierającego pliki strony</p>
                        <a class="FramedLinkBox" href="https://github.com/PanPioter1/MuseumSite" target="_blank" rel="noopener noreferrer">Odwiedź repozytorium</a>
                    `
                }

                if(ids == 'SiteManagement')
                {
                    info.innerHTML = `
                        <h2>Poradnik do zarządzania stronami</h3> <br>
                        <h4>Opis projektu:</h4>
                        <p>
                            Strona internetowa zawierająca poradnik dotyczący zarządzania stronami internetowymi. <br>
                            Zawiera informacje na temat tworzenia, edytowania oraz publikowania stron internetowych. <br>
                            Projekt jest w pełni responsywny i dostosowany do różnych urządzeń. <br>
                            Strona została stworzona przeze mnie samodzielnie. <br>
                        </p> <br>
                        <a class="FramedLinkBox" href="https://panpioter1.github.io/SiteManagementTutorial.github.io/" target="_blank" rel="noopener noreferrer">Odwiedź stronę</a>
                    `
                }

                if(ids == 'ShopManager')
                {
                    info.innerHTML = `
                        <h2>Shop Manager</h3> <br>
                        <h4>Opis projektu:</h4>
                        <p>
                            Aplikacja desktopowa stworzona w języku C++. <br>
                            Umożliwia zarządzanie asortymentem sklepu, w tym dodawanie, usuwanie oraz edytowanie produktów zapisywanych w bazie danych. <br>
                            Projekt jest w trakcie tworzenia. <br>
                        </p> <br>
                        `
                }

                if(ids == 'Portfolio')
                {
                    overlay.style.display = 'none';
                    info.innerHTML = '';
                }

                if(ids == 'MuseumGame')
                {
                    info.innerHTML = `
                        <h2>Gra muzealna</h3> <br>
                        <h4>Opis projektu:</h4>
                        <p>
                            Gra stworzona w Unreal Engine 5.2 za używając C++ oraz blueprintów <br>
                            Ma ona na celu zobrazowanie muzeum, którego strona internetowa przedstawiona powyżej reprezentuje. <br>
                            Gracz może poruszać się po muzeum oraz wchodzić w interakcje z eksponatami, aby poznać ich historię. <br>
                            Projekt jest w pełni funkcjonalny, jednak nie jest jeszcze ukończony. <br>
                            Gra była robiona wyłącznie przeze mnie jako praca dodatkowa do projektu zaliczeniowego. <br>
                        </p> <br>
                        <p>Niestety przez prawa autorskie nie jestem w stanie udostępnić gry, ponieważ obrazy zawarte w niej są używane do jednej z głównych funkcji oraz fukcjonalności zostały stworzone wokół nich</p>
                        `
                }
            }
            if(currentFile === 'mainENG.html')
            {
                if (ids == 'ItShop')
                {
                    info.innerHTML = `
                        <h2>IT Shop</h3> <br>
                        <h4>Project description:</h4>
                        <p>
                            A computer store website created using HTML, CSS and JavaScript. <br>
                            It includes a product catalog, shopping cart and contact form. <br>
                            The project is fully responsive and adapted to different devices. <br>
                            The site was made in 2-person groups. <br>
                            I personally created most of the HTML and JavaScript code, the content was created by my groupmate. <br>
                        </p> <br>
                        <a class="FramedLinkBox" href="https://panpioter1.github.io/ITShop.github.io/asortyment.html" target="_blank" rel="noopener noreferrer">Visit site preview</a>
                    `
                }

                if(ids == 'MuseumSite')
                {
                    info.innerHTML = `
                        <h2>Museum website</h3> <br>
                        <h4>Project description:</h4>
                        <p>
                            A museum website created using HTML and CSS. <br>
                            It includes information about exhibitions, opening hours and the location of the museum. <br>
                            The project is fully responsive and adapted to different devices. <br>
                            The site was made in 4-person groups as part of a project. <br>
                            I personally designed the database and implemented JavaScript scripts along with one additional person. <br> 
                        </p> <br>
                        <p>Unfortunately, due to copyright, I am unable to share the full site along with the database, but below is a link to the repository containing the site files</p>
                        <a class="FramedLinkBox" href="https://github.com/PanPioter1/MuseumSite" target="_blank" rel="noopener noreferrer">Visit repository</a>
                        `
                }

                if(ids == 'SiteManagement')
                {
                    info.innerHTML = `
                        <h2>Site Management Tutorial</h3> <br>
                        <h4>Project description:</h4>
                        <p>
                            A website containing a tutorial on website management. <br>
                            It includes information on creating, editing and publishing websites. <br>
                            The project is fully responsive and adapted to different devices. <br>
                            The site was created by me alone. <br>
                        </p> <br>
                        <a class="FramedLinkBox" href="https://panpioter1.github.io/SiteManagementTutorial.github.io/" target="_blank" rel="noopener noreferrer">Visit site</a>
                    `
                }

                if(ids == 'ShopManager')
                {
                    info.innerHTML = `
                        <h2>Shop Manager</h3> <br>
                        <h4>Project description:</h4>
                        <p>
                            A desktop application created in C++. <br>
                            It allows you to manage the store's assortment, including adding, deleting and editing products stored in the database. <br>
                        </p> <br>
                        `
                }

                if(ids == 'Portfolio')
                {
                    overlay.style.display = 'none';
                    info.innerHTML = '';
                }

                if(ids == 'MuseumGame')
                {
                    info.innerHTML = `
                        <h2>Museum Game</h3> <br>
                        <h4>Project description:</h4>
                        <p>
                            A game created in Unreal Engine 5.2 using C++ and blueprints <br>
                            Its purpose is to illustrate the museum represented by the website above. <br>
                            The player can move around the museum and interact with exhibits to learn about their history. <br>
                            The project is fully functional, but not yet completed. <br>
                            The game was made solely by me as an additional work for the project. <br>
                        </p> <br>
                        <p>Unfortunately, due to copyright, I am unable to share the game, as the images contained in it are used for one of the main functions and functionalities were built around them</p>
                        `
                }
            }
        }
        
    });
});

//preventing overlay from closing when clicking inside info box
info.addEventListener('click', function(event) {
    event.stopPropagation();
});

//closing overlay when clicking outside info box
overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    info.innerHTML = '';
})