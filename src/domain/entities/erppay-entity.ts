

export class ErppayEntity {

    constructor(
        public account: string,
        public owner: string,
        public debt: number,
    ){}

    static fromObject( object: { [key: string]: any }): ErppayEntity {
        
        let { account, owner, debt } = object;

        return new ErppayEntity(account, owner, debt);

    }

}