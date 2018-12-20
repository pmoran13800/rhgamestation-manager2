# rhgamestation-manager

[![Build Status](https://travis-ci.org/DjLeChuck/rhgamestation-manager.svg?branch=master)](https://travis-ci.org/DjLeChuck/rhgamestation-manager)
[![Known Vulnerabilities](https://snyk.io/test/github/djlechuck/rhgamestation-manager/badge.svg)](https://snyk.io/test/github/djlechuck/rhgamestation-manager)

A web interface to manage rhgamestation configuration.

## Note
The API activation step is only needed if you want launch game through the web interface. Otherwise, it's not necessary.

## Installation from sources
1. Clone or download the repository: `git clone https://github.com/DjLeChuck/rhgamestation-manager.git`
2. Compile the project from a computer (not rhgamestation): `./compile.sh`
3. Activate the API: https://github.com/rhgamestation/rhgamestation-api/blob/1.1.x/documentation/activate-on-rhgamestation.md
4. Launch the server (connect through SSH on the rhgamestation): `cd /rhgamestation/share/manager && NODE_ENV=production PORT=3000 node dist/server.js`
5. Go on http://rhgamestation:3000/

## Installation from releases
1. Download the release: https://github.com/DjLeChuck/rhgamestation-manager/releases/
2. Extract the package on rhgamestation: `\rhgamestation\share\manager` for example
3. Activate the API: https://github.com/rhgamestation/rhgamestation-api/blob/1.1.x/documentation/activate-on-rhgamestation.md
4. Launch the server (connect through SSH on the rhgamestation): `cd /rhgamestation/share/manager && NODE_ENV=production PORT=3000 node dist/server.js`
5. Go on http://rhgamestation:3000/

## Known issues
* Some changes are not directly applied; The rhgamestation must be restarted.

## Contributing
* **Translations** are managed with [POEditor](https://poeditor.com/join/project/taFNFlZ840)
