const EventEmitter = require('events');

class Configuration {
    constructor(ConfigData) {
        if (ConfigData === undefined) throw new Error('Configuration is required')
        this.key = ConfigData.Key
        this.username = ConfigData.Username
        this.password = ConfigData.Password
        this.version = ConfigData.Version
        this.Configuration();
    }

    Configuration() {
        if (this.key === undefined) throw new Error('Key is required')
        const Config = {
            key: this.key,
            username: this.username ? this.username : null,
            password: this.password ? this.password : null,
            version: this.version ? this.version : 'v1'
        }
        return Config
    }
}




class Client extends EventEmitter {
    constructor(Configuration) {
        console.log(Configuration)
        super();
        this.key = Configuration.key;
        this.username = Configuration.username;
        this.password = Configuration.password;
        this.version = Configuration.version;
        // Connecter votre client ici avec le token
        this.GetFiveMServer();
    }

    GetFiveMServer() {
        if (this.key === 'Astro') {
            return { message: "Success: Using Astro Client" }
            /* this.emit('ready', { Message: "Using Astro Client" }) */
        } else {
            return { message: "Error: Invalid Configuration Key" }
            /* this.emit('ready', { Message: "Error: Invalid Configuration Key" }) */
        }
    }

    GetFortniteShop() {
        if (this.key === 'Astro') {
            return { message: "Success: Using Astro Client" }
            /* this.emit('ready', { Message: "Using Astro Client" }) */
        } else {
            return { message: "Error: Invalid Configuration Key" }
            /* this.emit('ready', { Message: "Error: Invalid Configuration Key" }) */
        }
    }

    GetFortniteStats() {
        if (this.key === 'Astro') {
            return { message: "Success: Using Astro Client" }
            /* this.emit('ready', { Message: "Using Astro Client" }) */
        } else {
            return { message: "Error: Invalid Configuration Key" }
            /* this.emit('ready', { Message: "Error: Invalid Configuration Key" }) */
        }
    }
}

module.exports = { Configuration, Client }