export class ServiceException extends Error{
    status;
    errors;
    constructor(status:number,message:string, errors = []){
        super(message)
        this.status = status;
        this.errors = errors;
    }
}