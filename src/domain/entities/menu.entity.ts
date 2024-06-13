


export class MenuEntity {


    constructor(
        public id_menu: number,
        public id_menu_parent: number,
        public name_menu: string,
        public icon: string,
        public route: string,
        public activo: number
    ) { }


    static fromObject(objeto: { [key: string]: any }): MenuEntity {

        let { id_menu, id_menu_parent, name_menu, icon, route, activo } = objeto;

        return new MenuEntity( id_menu, id_menu_parent, name_menu, icon, route, activo)
    
    }

}