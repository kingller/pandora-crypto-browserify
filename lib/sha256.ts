import sjcl from 'browserify-sjcl';

export default function SHA256(message: string): string {
    const out = sjcl.hash.sha256.hash(message); // bitArray
    return sjcl.codec.hex.fromBits(out);
}
