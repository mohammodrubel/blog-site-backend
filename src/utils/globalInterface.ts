export type ROLE = {
    Admin:string,
    User:string,
    Modarator:string,
}[]

export const ROLE_TYPE = {
    Admin:"Admin",
    User:"User",
    Modarator:"Modarator"
}

export  type T_Error_Sources = {
    path: string | number 
    message:string
}[]

export type T_Error_Responce = {
    statusCode:number ;
    message:string;
    errorSource:T_Error_Sources
}