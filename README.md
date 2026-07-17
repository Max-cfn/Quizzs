# 🎓 Quizzs

Application locale pour s'entraîner à des QCM en conditions d'examen ou en mode révision.

## Installation

### 🍎 macOS — installation en 1 ligne

Ouvrez **Terminal** (Spotlight → tapez « Terminal ») et collez cette commande :

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Max-cfn/Quizzs/main/installer/install-mac.sh)"
```

Elle installe tout (Homebrew, Node.js, Git), télécharge l'app, la lance, et crée
un raccourci **« Quizzs »** sur le Bureau. **Les fois suivantes :
double-clic sur le raccourci du Bureau** (2 clics, sans alerte).

> **Pourquoi pas un simple double-clic au départ ?** macOS (Gatekeeper) bloque
> les scripts téléchargés en `.zip` (« logiciel non vérifié »). L'installation via
> `curl`/`git clone` évite ce blocage — aucun fichier n'est mis en quarantaine,
> et le raccourci du Bureau est créé localement.

### 🪟 Windows

Téléchargez le dépôt, puis double-cliquez sur `installer/start-windows.bat`.
Il installe Node.js (via winget) et les dépendances au premier lancement.

### 🐧 Linux

```bash
git clone https://github.com/Max-cfn/Quizzs.git ~/Quizzs
cd ~/Quizzs && ./installer/start-linux.sh
```

Le site s'ouvre sur **http://localhost:3000**.

## Fonctionnalités

- **Bibliothèque** classée par catégorie
- **Mode Examen** : timer configurable, batch de X questions, pause, résultats détaillés à la fin
- **Mode Entraînement** : feedback immédiat avec explications
- **Quizz préfaits** : les questions sont découpées en lots de 50
- **Sélection par plage** : toutes, les X dernières, les X premières, ou plage personnalisée
- **Multi-réponses** : support des questions à choix multiples (2-3 réponses attendues)
- **Flag de questions** : marquez des questions pendant un quiz pour les revoir ensuite
- **Historique** : réponses détaillées de chaque session, avec review
- **Raccourcis clavier** : A-F pour sélectionner, ←→ pour naviguer, Enter pour valider

## Ajouter des questions

### Depuis l'interface
Cliquez **« Importer un fichier .md »** pour charger un fichier de questions.

### Manuellement
Placez vos fichiers `.md` dans le dossier `exams/`. Ils apparaîtront au prochain lancement.

## Format des fichiers de questions

Chaque question suit ce format markdown, séparée par une ligne `----` :

```
## Sujet 1 question 1

Intitulé de la question ?

A. Première option
B. Deuxième option
C. Troisième option
D. Quatrième option

**Answer: C**
```

Les questions à choix multiples se déclarent avec `(Choose two.)` dans l'intitulé
et une réponse combinée (`**Answer: AC**`).

## Structure

```
├── installer/              # Scripts de lancement (double-clic)
│   ├── install-mac.sh
│   ├── start-mac.command
│   ├── start-windows.bat
│   ├── start-linux.sh
│   └── README.md
├── public/                 # Frontend
│   ├── index.html
│   ├── style.css
│   ├── parser.js
│   └── app.js
├── exams/                  # Vos fichiers de questions (.md, gitignored)
├── server.js               # Serveur Express (API + static)
├── package.json
├── start.sh                # Lanceur alternatif (terminal)
└── README.md
```
