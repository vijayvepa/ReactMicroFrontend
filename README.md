# React Microfrontend

## Steps
- Designate one app as **Host** - [./container](./container/) and one app as **Remote** - [./products](./products/)
- In the **Remote**, decide which modules are available to other projects
	- Setup *ModuleFederationPlugin* to expose those files
- In the **Host**, decide which modules to get from remote
	- Setup *ModuleFederationPlugin* to fetch those files
	- Refactor the entry point to load asynchronously
	- Import the necessary files from the **Remote**