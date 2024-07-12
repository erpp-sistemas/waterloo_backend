

export class GeneratePdfDto {

    constructor(
        public account: string,
        public owner: string,
        public debt: number,
    ) { }

    static create(object: { [key: string]: any }): [string?, GeneratePdfDto?] {

        let { account, owner, debt } = object;

        if (!account) return ['Missing account'];
        if (!owner) return ['Missing owner'];
        if (!debt) return ['Missing debt'];

        return [undefined, new GeneratePdfDto( account, owner, debt )];

    }


}