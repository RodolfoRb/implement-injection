import { Crud, IService } from "injection-lib-test";
import TYPES from "injection-lib-test/dist/types";
import { inject, injectable } from "inversify";
@injectable()
export class Service implements IService {
    constructor(@inject(TYPES.Empleado) private crud: Crud) {

    }
    sayHello(): string {
        return this.crud.getId().toString();
    }
}