import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Random {
    private readonly key = this.RandomString(8);

    makeConst(length: number): string {
        var result = '';
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_^%$#@';
        const charactersLength = characters.length;
        for (let c = 0; c < length; c++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    RandomString(length: number): string {
        var result = '';
        const charac = this.makeConst(62);
        const charactersLength = charac.length;
        for (let d = 0; d < length; d++) {
            result += charac.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    }

    setKey(): string {
        return this.key;
    }
}
