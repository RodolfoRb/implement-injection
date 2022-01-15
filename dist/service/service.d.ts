import { Crud, IService } from "injection-lib-test";
export declare class Service implements IService {
    private crud;
    constructor(crud: Crud);
    sayHello(): string;
}
