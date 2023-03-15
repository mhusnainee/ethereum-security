# ethereum-security

## How cryptography makes Ethereum Blockchain secure...❓

There are almost 225 Million unique addresses(public addresses) on Ethereum and every public address is generated from respective private key using Elliptic-curve Cryptographic algorithm.

Private key is made up of 64 hexadecimal characters(256-bits) while public address consists of 40 characters(160-bits). First private key is generated randomly with cryptographic algorithms and then resulted 64 hex characters are fed to the the Elliptic-curve digital signature algorithm and boom...💥 the result is public key.

Now if you are thinking that u can use this public key to receive funds then sorry to disappoint you. There is one last step remaining which is generating public address from this public key. This is done by taking the keccak-256 hash of public key and then taking the last 20 bytes(40 hex characters) of the resulted hash.

Now append 0x in front of these 40 hex characters, and public address is ready...🎉

Now think for a moment that, is it possible if we generate a random private key, then public address from that private key and then check that either our public address match an existing public address. It might be possible that the same public address already exist and own some Funds on Ethereum.

Although it is possible but the probability is negligible or almost zero.
I was curious about that hence I wrote a script in JavaScript to check this out. This script generates random private keys, generates public addresses from these private keys and then checks for the Eth balance of each public address. I checked for 1 Million public addresses, but there was not even a single match. Even if someone tries for Trillions of public addresses, the chances for getting a single match are negligible.

Now you can imagine how cryptography contributes in the security of Ethereum Blockchain.

- Generating Key-pair

![key_pair](https://user-images.githubusercontent.com/96762657/225210540-20ca0874-4853-41ca-8ef0-4bbbd9ef703c.JPG)
