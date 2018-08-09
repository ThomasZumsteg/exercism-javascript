class DiffieHellman {
    constructor(p, g) {
        if( !(1 <= p && p < 9999) || !(1 <= g && g < 9999))
            throw new Error("Arguments are out of range");
        else if(!this.prime(p) || !this.prime(g))
            throw new Error("Arguments are not prime");

        this.p = p;
        this.g = g;
    }

    getPublicKeyFromPrivateKey(a) {
        if(!(2 <= a && a < this.p)) throw new Error("Not a valid private key");

        return Math.pow(this.g, a) % this.p;
    }

    getSharedSecret(priv, pub) {
        return Math.pow(pub, priv) % this.p;
    }

    prime(num) {
        if(num % 2 == 0)
            return false;
        for(var f = 3; f * f <= num; f += 2)
            if(num % f == 0) return false;

        return true;
    }
}

module.exports = DiffieHellman;
