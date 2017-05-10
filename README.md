# [ObliqueReactive](https://stash.eap.bit.admin.ch/projects/OUI/repos/oblique-reactive/)

Reactive web template powered by [ObliqueUI](https://stash.eap.bit.admin.ch/projects/OUI/repos/oblique-ui/) and [Angular](https://github.com/angular/angular). ObliqueReactive uses [npm](https://www.npmjs.com/), [Gulp](https://github.com/gulpjs/gulp/), [Less](http://lesscss.org/), [Browserify](http://browserify.org/) and [Handlebars](http://handlebarsjs.com/) to fetch dependencies, compile & build assets and compose the pages.

## Using as dependency

TODO: Update this, if we integrated the newest version in O2R-Seed

Install `oblique-reactive` as an npm dependency:

	npm install oblique-reactive --save

Once installed, you need to import the `ObliqueModule`:

	import {ObliqueModule} from 'oblique-reactive/oblique-reactive';

And add it in your `app-module`:

```
import {ObliqueModule} from 'oblique-reactive/oblique-reactive';

angular
	.module('__MODULE__', [
		[...]
		ObliqueModule,
		[...]
```

An example of usage can be found in the `oblique-reactive-seed` project: [ObliqueReactiveSeed](https://stash.eap.bit.admin.ch/projects/OUI/repos/oblique-reactive-seed/)

## Working on ObliqueReactive

- Clone the repo: `git clone https://stash.eap.bit.admin.ch/scm/oui/oblique-reactive.git`.

## Install

### Prerequisites

* Git: <http://git-scm.com/downloads>

> If you are running Windows, select following options during installation:
> - _Run Git from the Windows Command Prompt_
> - _Checkout Windows-style, commit Unix-style endings_

* NPM via Node.js: <http://nodejs.org/download/>

> NPM, the Node Package Manager, is installed during the Node.js installation process.

### Environment setup

#### GIT configuration

If you are using Git for the first time, configure your user information as well:

	git config --global user.name "<firstname> <lastname>"
	git config --global user.email "<email>"

#### Proxy configuration (if applicable)

##### Environment Variables

> *Note*: proxy URL must start with `http[s]://`!

	HTTP_PROXY <http-proxy-url>
	HTTPS_PROXY <https-proxy-url>
	NO_PROXY follow [these instructions](https://confluence.eap.bit.admin.ch/display/JEAP/Projekt+Setup#ProjektSetup-Umgebungsvariablen)

##### GIT Config (.gitconfig)

	git config --global url."https://".insteadOf git://
	git config --global http."https://stash.eap.bit.admin.ch/".proxy ""
	git config --global http.postBuffer 524288000
	git config --global http.proxy <http-proxy-url>

##### <a name="npm-config"></a> NPM config

Follow the instructions described in the [JEAP Project Setup page](https://confluence.eap.bit.admin.ch/display/JEAP/Projekt+Setup#ProjektSetup-InstallationundKonfigurationvonNodeJsundNPM)

And add the TypeScript specific libraries and configs described in the [Configuration for TypeScript page](https://confluence.eap.bit.admin.ch/display/FEDEV/Configuration+for+TypeScript)

> *Note*: ObliqueReactive needs **TypeScript 2**, use `npm install typescript@next` to get the beta version

### First-time setup

1. Install *globally* required `npm` libraries:

	npm install -g typescript typings gulp

2. Install *development* and *frontend* dependencies (`npm` will look at [package.json](https://stash.eap.bit.admin.ch/projects/OUI/repos/oblique-reactive/browse/package.json) and automatically install the necessary dependencies listed there):

	npm install

3. Customize:

> Open [project.conf.js](https://stash.eap.bit.admin.ch/projects/OUI/repos/oblique-reactive/browse/project.conf.js) and adapt this configuration to fit your project requirements.

### Troubleshooting dependencies

Should you encounter problems with installing dependencies or running Gulp commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.

## Build & Run the showcase

### Development tasks

	npm start

_This task builds the project, runs the client application by starting a local server and watches for file changes._

#### Start the showcase API server

The start the showcase API server, run:

	gulp showcase-serve

### Production tasks

	gulp run-prod

_Same as `run-dev`, except that it will serve optimized resources._

## <a name="managing-dependencies"></a> Managing dependencies

If you ever need to add your own dependencies, here's how to do it.

### npm (build) dependencies

Run the following command to install a new npm dependency:

	npm i <dependency> -D

Before you do so, make sure you're in your project's root folder, where [package.json](https://stash.eap.bit.admin.ch/projects/oui/repos/oblique-reactive/browse/package.json) is.
After everything is done, you should see your new dependency in [package.json](https://stash.eap.bit.admin.ch/projects/oui/repos/oblique2-ui/browse/package.json).

If you need to install a global dependency, such as bower, switch the *-D* to a *-g* in your command. This would look something like this:

	npm i <dependency> -g

Installing a global npm dependency makes it accessible from every command line, independent of your console's location. Local dependencies are only accessible inside a project. Most of the time it isn't neccessary for you to install global npm packages.

You can search through npm packages over at [npmjs.com](https://www.npmjs.com/).

### Transpiling (TypeScript) dependencies

If you want to use a framework that adds new syntax to regular JavaScript, you'll probably need to give TypeScript, our JavaScript transpiler, hints as to what to do with the new expressions. This is what *typings* is for.

First, you'll need to search for your soon-to-be-integrated framework in the typings repository. We'll do it directly in the console via:

	typings search <dependency>

Most of the time, this will give you more than one result. So keep the exact name of your desired dependency in mind and type:

	typings i dt~<dependency> -SG

Doing this, typings will download all the needed typing files into your project and reference them in [typings.json](https://stash.eap.bit.admin.ch/projects/oui/repos/oblique2-ui/browse/typings.json) so that the next developer can simply run *typings install* (as we do) and doesn't need to bother. Quite neat, huh?

## Checking for updates

	npm install -g npm-check-updates

You can now check for updates and bump `package.json` dependencies accordingly:

	npm-check-updates

## <a name="publish"></a> Publishing ObliqueReactive

> Publishing should be performed with a continuous integration tool and not manually!

Before publishing, execute the following steps:

1. Switch to master branch and merge develop on it.
2. Run `gulp` to compile sources and rebuild the project distribution.
3. Check project distribution and ensure showcase is running as expected.
4. Commit and push any remaining changes.

Prepare your workspace:

1. Ensure you have an account with publishing privileges on the internal `npm` registry ([BIT Nexus v3](https://nexus3.eap.bit.admin.ch/))
2. Authenticate on the internal npm registry (Nexus v3):

	npm login --registry=https://nexus3.eap.bit.admin.ch/repository/npm-intern/

    > Follow the steps on the terminal as you may be asked for credentials.

### <a name="publish-patch"></a> Publishing a *patch* release

Build, release (defaults to *patch* version number increment) and finally publish using Gulp:

	gulp publish

    > Follow the steps on the terminal as you may be asked multiple times for credentials.

### <a name="publish-types"></a> Publishing other release types

Publishing a *prerelease*:

	gulp publish --bump prerelease

Publishing a *minor* release:

	gulp publish --bump minor

Publishing a *major* release:

	gulp publish --bump major

Publishing a *version-specific* release:

	gulp publish --version <version>

> For more release commands or options, see <https://github.com/stevelacy/gulp-bump>.
