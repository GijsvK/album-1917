# Als blijvend aandenken

Bladerboek van het album dat namens de Belgische vluchtelingen in Blaricum op 25 december 1917 werd aangeboden aan Mej. A. de Bijll Nachenius.

**Bekijken:** https://bit.ly/boekderbelgen
(rechtstreeks: https://gijsvk.github.io/album-1917/)

## Inhoud

- De doos (gesloten en geopend), het album van voorplat tot achterplat, en de lege doos met de penning.
- Opdracht met ondertekeningen, vier brieven (Blaricum, Laren, Schepmans), veertien kunstwerken, de inleiding en een kroniek 1914–1919.
- Transcripties van alle teksten, in de oorspronkelijke spelling. `[?]` = onzeker gelezen.

## Gebruik

**Bladeren**
- Klik of tik op het omgekrulde hoekje **rechtsonder** voor de volgende pagina, **linksonder** voor de vorige.
- Knoppen *Vorige* / *Volgende*, het menu *Ga naar* en de pijltjestoetsen werken ook.
- Op een computer of liggende tablet zie je dubbele pagina's. Op een staande telefoon alleen de pagina's met tekst of tekening; de lege pagina's verschijnen dan als achterkant van het omslaande blad.
- Bij het draaien van het scherm blijft het boek op dezelfde pagina.

**Vergrootglas** (alleen op pagina's met tekst of tekening)
- Computer: beweeg met de muis over de pagina. Scroll om de vergroting te kiezen, van 2× tot 8×.
- Telefoon: tik op de pagina. Het vergrootglas blijft open, verschuift als je sleept en sluit bij een volgende tik.

**Teksten**
- Op een pagina met tekst verschijnt de knop *Lees de tekst*, die de transcriptie in een venster toont.
- Alle teksten samen: `teksten.html`, met per tekst een link terug naar de pagina in het boek.

**Als app**
- Het album kan op het beginscherm gezet worden (Android/computer: *App installeren*; iPhone: *Deel → Zet op beginscherm*). Bekeken pagina's blijven offline beschikbaar.
- Op iOS toont het beginscherm-icoon (nog) een letter in plaats van de reliëfplaat.

## Bestanden

| Bestand / map | Inhoud |
|---|---|
| `index.html` | Het bladerboek. De lijst `book` bepaalt volgorde en titels van de pagina's; `ZOOMABLE` welke pagina's vergroot kunnen worden; `FIRST_NR` / `LAST_NR` de paginanummering (p. 1 = ondertekeningen, oneven = rechts). |
| `texts.js` | Alle transcripties. Aanpassen hier wijzigt zowel het venster als `teksten.html`. |
| `teksten.html` | Overzichtspagina met alle teksten. |
| `pages/` | Pagina-afbeeldingen voor het boek (ca. 1000 px breed). |
| `zoom/` | Scherpe versies (2200 × 2920 px) voor het vergrootglas, uit de originele foto's. |
| `js/page-flip.browser.js` | Bladerfunctie [StPageFlip](https://github.com/Nodlik/StPageFlip) 2.0.7. |
| `icons/`, `manifest.webmanifest`, `sw.js` | App-icoon (reliëfplaat van het omslag), app-instellingen en offline-ondersteuning. Verhoog `VERSION` in `sw.js` na grote wijzigingen. |

Kleine tekstwijzigingen kunnen rechtstreeks op GitHub: open het bestand, klik op het potlood en kies *Commit changes*. De site wordt na een paar minuten bijgewerkt.
