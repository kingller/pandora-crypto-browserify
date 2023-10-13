import sjcl from 'browserify-sjcl';
import { toBits } from './core/codecArrayBuffer';

export default function SHA256(message: string | ArrayBuffer | sjcl.BitArray): string {
    let signBody: string | sjcl.BitArray;
    if (ArrayBuffer && message instanceof ArrayBuffer) {
        signBody = toBits(message);
    } else {
        signBody = message as string | sjcl.BitArray;
    }
    const out = sjcl.hash.sha256.hash(signBody);
    return sjcl.codec.hex.fromBits(out);
}
