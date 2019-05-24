# mobile-app-project
Project voor Mobile Apps keuzedeel

## Documentatie
**Klantwensen**
* Mobiele app die automatisch groepen maakt
* Klas moet gekozen kunnen worden
* Groep grote moet gekozen kunnen worden
* Groepen worden verwijderd door met het device te schudden
* Styling van de applicatie veranderd gebaseerd op de hoeveelheid licht in de omgeving

**Vooronderzoek**   
Ionic:
* Voorkennis van Freek
* Web-based
* Veel documentatie

React-native:
* Web-based
* React codebase

Xamarin:
* C# based
* Veel native support

Conclusie:    
De keuze is gemaakt om de opdracht in Ionic 4 te realiseren. De belangrijkste reden voor deze keuze is geweest dat een van de projectleden voorkennis heeft van het ontwikkelproces.

**Hardware specificaties**    
Lichtsensor:    
Tijdens de implementatiefase hebben we ondervonden dat de lichtsensor plugin van cordova niet te implementeren is. Om deze reden hebben we samen met de opdrachtgever het besluit gemaakt om af te zien van een feature die deze sensor zou gebruiken.

Schudden:   
Om het wissen van de groepen te implementeren door te schudden maken we gebruik van de "Shake" cordova plugin. Deze plugin is voor IOS geoptimaliseerd en gebruikt een verouderde, maar werkende, implementatie voor Android apparaten. We hebben besloten om deze plugin te gebruik vanwege gemak van gebruik en onderhoud.

**Testplan**  
Testcases:  
*Case 1 - Maak een lijst van studenten*   
stap 1: Open de applicatie    
stap 2: Kies een klas door op de klas dropdown te klikken   
stap 3: Kies de groep groten waaring je de klas wilt verdelen.    
stap 4: Druk op de knop "Groepen maken" om de groepen te genereren.


*Case 2 Een lijst wewggooien*   
stap 1: Maak een lijst van studenten.   
stap 2: Schud uw telefoon om de gegenereerde groepen te verwijderen.


*Case 3 het regenereren van een lijst:*   
stap 1: Maak een lijst van studenten door op de "Groepen maken" knop te drukken.    
stap 2: Druk vervolgens nog een keer op de "Groepen maken" knop om de lijst opnieuw te genereren.


*Case 4 Groepsgroten veranderen:*   
stap 1: Maak een lijst van studenten door op de "Groep maken" knop te drukken.    
stap 2: Verander de grootte van de groep.   
stap 3: Druk nogmaals op de "Groep maken" knop om een nieuwe lijst te genereren.


Testresultaten:

*Case 1 - Maak een lijst van studenten*   
stap 1: Gelukt    
stap 2: Gelukt  
stap 3: Gelukt, heeft standaard waarde van "2"    
stap 4: Gelukt, 4 groepen van elk 3 studenten


*Case 2 Een lijst wewggooien*   
stap 1: Gedaan in case 1   
stap 2: Gelukt


*Case 3 het regenereren van een lijst:*   
stap 1: Gelukt    
stap 2: Gelukt, studenten worden anders ingedeeld


*Case 4 Groepsgroten veranderen:*   
stap 1: Gelukt   
stap 2: Gelukt  
stap 3: Gelukt, de lijst klopt.

Conclusies:   
De applicatie voldoet aan alle eisen die eraan zijn gesteld door de opdrachtgever.
