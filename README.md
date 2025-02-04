## Aufgabe 1: Basisrouting
Erstelle eine React-Anwendung mit React Router, die drei Seiten enthält:
- Home (/)
- Über uns (/about)
- Kontakt (/contact)

Nutze <code>BrowserRouter</code>, <code>Routes</code> und <code>Route</code>, um das Routing zu implementieren.

## Aufgabe 2: Navigation mit Links
Erweitere die Anwendung aus Aufgabe 1:
- Füge eine Navigation mit <code>Link</code> oder <code>NavLink</code> hinzu, damit der Benutzer zwischen den Seiten wechseln kann.

## Aufgabe 3: Dynamische Routen
Erstelle eine neue Seite für Benutzerprofile mit einer dynamischen URL:
- Die Route sollte /user/:id lauten.
- Zeige auf der Seite die id aus der URL an.

## Aufgabe 4: Weiterleitungen (Redirects)
Füge eine Weiterleitung hinzu:
- Falls ein Benutzer eine nicht existierende Route aufruft, soll er zur Startseite (/) weitergeleitet werden.

## Aufgabe 5: Geschützte Routen
Implementiere eine geschützte Route:
- Erstelle eine Route /dashboard, die nur angezeigt wird, wenn ein Benutzer eingeloggt ist.
- Falls der Benutzer nicht eingeloggt ist, soll er auf /login weitergeleitet werden.
