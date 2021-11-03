# NX Heroes

## create angular workspace  
npx create-nx-workspace --preset=angular

## Ordnerstruktur
#### apps: 
beinhaltet die Aplikationen (Angular, React, NodeJS)
#### libs: 
beinhaltet Bibliotheken die unter apps geteilt werden können  (verhindert code duplication)

## Besondere Datein 
### nx.json: 
beinhaltet die Projekte 
```"npmScope": "nx-heroes"``` wo npm ausgefüht wird und wo die node modules gespeichert werden 
```"accessToken": ``` für die NxCloud relevant
## Nx Console 
ist das UI von NxTools.
ist ein VsCode Plugin.
erleichtert die Entwicklung und zeigt Projektabhängigkeiten durch dep-graph
### dep-graph 
### Generate
generiert alle gängigen Angular Bausteine(Application, Component, Service, ...)
### Run
startet Build, Serve, Test, Lint und E2E für ein Projekt
### run-many
startet Build, Serve, Test, Lint und E2E für mehrere Projekte
### affected 
nur betroffene Projekte werden ausgeführt
### migrate
updated den workspace und packages
## Nx Cloud 