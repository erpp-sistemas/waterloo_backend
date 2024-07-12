

export class ErppayEntity {

    constructor(
        private account: string,
        private owner: string,
        private debt: number,
    ){}

    static fromObject( object: { [key: string]: any }): ErppayEntity {
        
        let { account, owner, debt } = object;

        return new ErppayEntity(account, owner, debt);

    }

}